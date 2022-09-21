import { useRouter } from 'next/router'

import Image from 'next/image'
import { useEffect, useState } from 'react'

/* Components */

import SearchDropdown from '../../components/UI/SearchDropdown'

/* Assets */
import navaraLogo from '../../assets/logos/navara_logo.svg'
import API from '../../services/api'

/* Constants */
import Link from 'next/link'
import Card from '../../components/Card'
import Tabs from '../../components/Tabs'
import { Spinner } from '../../components/UI/Spinner'
import Widget from '../../components/Widget'
import { categories } from '../../constants/constants'
import { tempWidgetItems } from '../../constants/temporaryData'
import { useDebounce } from '../../hooks/useDebounce'
import Modal from '../../components/UI/Modal'
interface IProflleProps {
  data: any
}
const Profile = ({ data }: IProflleProps) => {
  const router = useRouter()
  const domain = router.asPath
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
  const [errorMessage, setErrorMessage] = useState('')
  // API search function
  const searchCharacters = async (search: any) => {
    return await API.get('domain/find', {
      params: {
        domain: search,
      },
    }).then((result) => {
      setResults(result)
    })
      .then((result) => {
        setIsSearching(false)
        setResults(result)
      })
      .catch((error) => {
        setIsSearching(false)
        setResults([])
        console.log(error.response.data.message)
        setErrorMessage(error.response.data.message)
      })
  }
  useEffect(
    () => {
      if (debouncedSearchTerm) {
        // setIsSearching(true)
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
  const [isShow, setIsShow] = useState(false)
  const handlOpen = () => {
    setIsShow(!isShow)
  }

  return (
    <div className="max-w-xs mx-auto my-5">
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
        results && results.length > 0 ? (
          <Spinner />
        ) : (
          <></>
        )
      ) : (
        results && (
          <div className={`flex cursor-pointer hover:font-bold hover:bg-gray-200 p-3 my-3 rounded-2xl `}>
            <Link href={`${results?.domain}`}>
              <a onClick={() => setIsSearching(true)}>
                <p>{results?.domain}</p>
              </a>
              {/* <div className="flex px-2 my-3 flex-col ">
                <p>{results?.domain}</p>
              </div> */}
            </Link>
          </div>
        )
      )}
      <Card data={data} />

      <Widget items={tempWidgetItems} />

      <Tabs tabList={categories} chains={data.chains} />
      <Modal isShow={isShow} handlOpen={handlOpen} />
    </div>
  )
}

export async function getServerSideProps(context: any) {
  // Fetch data from external API
  const domainName = context.params.username
  const res = await API.get(`domain/find?domain=${domainName}`)
  const data = await res

  // Pass data to the page via props
  return { props: { data: data } }
}

export default Profile
