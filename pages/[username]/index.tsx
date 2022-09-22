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
import { setTimeout } from 'timers'
import Card from '../../components/Card'
import LayoutPage from '../../components/commons/LayoutPage'
import Tabs from '../../components/Tabs'
import { Spinner } from '../../components/UI/Spinner'
import Widget from '../../components/Widget'
import { categories } from '../../constants/constants'
import { tempWidgetItems } from '../../constants/temporaryData'
import { useDebounce } from '../../hooks/useDebounce'
interface IProflleProps {
  data: any
}
const Profile = ({ data }: IProflleProps) => {
  const router = useRouter()
  const domain = router.asPath
  const [resultSearch, setResultSearch] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (event: any) => {
    const inputDomain = event.target.value

    setSearchTerm(event.target.value)
  }

  // State and setters for ...
  // Search term
  // API search results
  const [results, setResults] = useState([])
  // Searching status (whether there is pending API request)
  const [isSearching, setIsSearching] = useState(false)
  const [typing, setTyping] = useState(false)
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
    })
      .then((result: any) => {
        setResults(result)
        setErrorMessage('')
        setTyping(false)
      })
      .catch((error) => {
        setResults([])
        setTimeout(() => {
          setErrorMessage(error.response.data.message)
        }, 1000)
        setTyping(false)
      })
  }
  useEffect(() => {
    setTyping(true)
  }, [searchTerm])
  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsSearching(true)

        searchCharacters(debouncedSearchTerm).then((results: any) => {
          // setResults(results)
          // console.log(results, 'UEF')
          setTyping(false)
          setIsSearching(false)
        })
      } else {
        setResults([])
        setTyping(false)
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
    <>
      <LayoutPage title={` ${data.domain} | Navara One`}></LayoutPage>

      <div className="max-w-xs mx-auto my-5">
        <div className="flex justify-center mb-5">
          <Image src={navaraLogo} className="mx-auto" />
        </div>
        <div className="rounded-lg border m-2">
          <SearchDropdown
            placeholder="Seach other address"
            className="p-2"
            onChange={handleSearch}
            value={searchTerm}
            searching={resultSearch}
          />
          <div className="  mb-1 ">
            {searchTerm === '' ? (
              <p className="my-2 text-center text-[13px] text-red-500 px-3">Start typing to search for assets</p>
            ) : results ? (
              typing ? (
                <div className="my-3">
                  <Spinner />
                </div>
              ) : errorMessage ? (
                <p className="my-3 text-center text-[13px] text-red-500 px-3">
                  We were unable to find any results for your search
                </p>
              ) : (
                !isSearching && (
                  <div className={`flex cursor-pointer hover:font-bold hover:bg-gray-50 px-10 my-1 rounded-2xl `}>
                    <Link href={`${results?.domain}`}>
                      <a onClick={() => setIsSearching(true)}>
                        <p>{results?.domain}</p>
                      </a>
                    </Link>
                  </div>
                )
              )
            ) : (
              //     &&
              // // <p className="my-3 text-[13px] text-red-500 px-3">We were unable to find any results for your search</p>
              // !isSearching && (
              // <div className={`flex cursor-pointer hover:font-bold hover:bg-gray-50 px-10 my-1 rounded-2xl `}>
              //   <Link href={`${results?.domain}`}>
              //     <a onClick={() => setIsSearching(true)}>
              //       <p>{results?.domain}</p>
              //     </a>
              //   </Link>
              // </div>
              // )
              <p className="my-3 text-center text-[13px] text-red-500 px-3">
                We were unable to find any results for your search
              </p>
            )}
          </div>
        </div>

        <Card data={data} />

        <Widget items={tempWidgetItems} />

        <Tabs tabList={categories} chains={data.chains} />
        {/* <Modal isShow={isShow} handlOpen={handlOpen} /> */}
      </div>
    </>
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
