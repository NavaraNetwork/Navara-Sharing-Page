import { useRouter } from 'next/router'

import Image from 'next/image'
import { useEffect, useState } from 'react'

/* Components */

import Tabs from '../../components/Tabs'
import SearchDropdown from '../../components/UI/SearchDropdown'
import { Spinner } from '../../components/UI/Spinner'
import Widget from '../../components/Widget'

/* Assets */
import navaraLogo from '../../assets/logos/navara_logo.svg'
import API from '../../services/api'

/* Constants */
import Link from 'next/link'
import Card from '../../components/Card'
import { categories } from '../../constants/constants'
import { tempUser, tempWidgetItems } from '../../constants/temporaryData'
import { useDebounce } from '../../hooks/useDebounce'
interface IProflleProps {
  data: any
}
const Profile = ({ data }: IProflleProps) => {
  const router = useRouter()
  const domain = router.asPath
  console.log(data, '12322')
  const [resultSearch, setResultSearch] = useState(false)

  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value)
  }

  // State and setters for ...
  // Search term
  const [searchTerm, setSearchTerm] = useState('')
  // API search results
  const [results, setResults] = useState([])
  // Searching status (whether there is pending API request)
  const [isSearching, setIsSearching] = useState(false)

  // Debounce search term so that it only gives us latest value ...
  // ... if searchTerm has not been updated within last 500ms.
  // The goal is to only have the API call fire when user stops typing ...
  // ... so that we aren't hitting our API rapidly.
  const debouncedSearchTerm = useDebounce(searchTerm, 500)
  // API search function
  const searchCharacters = async (search: any) => {
    return await API.get('domain/find', {
      params: {
        domain: search,
      },
    }).then((result) => {
      console.log(result.data)
      setResults(result.data)
    })
  }
  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsSearching(true)
        searchCharacters(debouncedSearchTerm).then((results: any) => {
          setIsSearching(false)
        })
      } else {
        setResults([])
        setIsSearching(false)
      }
    },
    [debouncedSearchTerm] // Only call effect if debounced search term changes
  )
  console.log(results, 'results')
  return (
    <div className="max-w-xs mx-auto">
      <div className="flex justify-center mb-5">
        <Image src={navaraLogo} className="mx-auto" />
      </div>
      <SearchDropdown
        placeholder="Seach other address"
        className=" p-2"
        onChange={handleSearch}
        value={searchTerm}
        searching={resultSearch}
      />
      {isSearching ? (
        <div className="my-3">
          <Spinner />
        </div>
      ) : (
        results && (
          <div className={`flex cursor-pointer hover:font-bold rounded-2xl mb-2`}>
            <Link href={`/${results.domain}`}>
              <div className="flex px-2 my-3 flex-col ">
                <p>{results.domain}</p>
              </div>
            </Link>
          </div>
        )
      )}

      <Card {...tempUser} />

      <Widget items={tempWidgetItems} />

      <Tabs tabList={categories} />
    </div>
  )
}

export async function getServerSideProps(context: any) {
  // Fetch data from external API
  const domainName = context.params.username
  const res = await API.get(`domain/find?domain=${domainName}`)
  console.log(res, '123')
  const data = await res

  // Pass data to the page via props
  return { props: { data: data } }
}

export default Profile
