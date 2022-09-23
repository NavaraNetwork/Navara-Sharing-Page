import { useRouter } from 'next/router'

import Image from 'next/image'
import { useEffect, useState } from 'react'

/* Components */

import SearchDropdown from '../../components/UI/SearchDropdown'

/* Assets */
import navaraLogo from '../../assets/logos/icon-navara.svg'
import API from '../../services/api'
import batteryIcon from '../../assets/icons/battery-full.svg'
import wifiIcon from '../../assets/icons/wifi.svg'

/* Constants */
import Link from 'next/link'
import { setInterval, setTimeout } from 'timers'
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
    setSearchTerm(event.target.value)
  }

  type resuiltType = {
    domain?: string
  }

  // State and setters for ...
  // Search term
  // API search results
  const [results, setResults] = useState<resuiltType>({})
  // Searching status (whether there is pending API request)
  const [isSearching, setIsSearching] = useState(false)
  const [typing, setTyping] = useState(false)
  // Debounce search term so that it only gives us latest value ...
  // ... if searchTerm has not been updated within last 500ms.
  // The goal is to only have the API call fire when user stops typing ...
  // ... so that we aren't hitting our API rapidly.
  const debouncedSearchTerm = useDebounce(searchTerm, 500)
  const [errorMessage, setErrorMessage] = useState('')
  const [now, setNow] = useState(new Date())

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
        setResults({})
        setTimeout(() => {
          setErrorMessage(error.response.data.message)
        }, 1000)
        setTyping(false)
      })
  }
  //Typing input to loading
  useEffect(() => {
    setTyping(true)
  }, [searchTerm])

  //release your hand from the keyboard then call api
  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsSearching(true)
        searchCharacters(debouncedSearchTerm).then((results: any) => {
          setTyping(false)
          setIsSearching(false)
        })
      } else {
        setResults({})
        setTyping(false)
        setIsSearching(false)
      }
    },
    [debouncedSearchTerm] // Only call effect if debounced search term changes
  )
  const [isShow, setIsShow] = useState(false)

  const { chains, ...domainInfo } = data

  const filteredTokenList = Object.keys(chains[0])
    .map((key) => {
      return {
        token: key,
        address: chains[0][key],
        tokenLogo: key,
        tokenNetworkLogo: key,
      }
    })
    .filter((item: any) => {
      return item?.token !== 'chainId'
    })

  useEffect(() => {
    setInterval(() => {
      setNow(() => new Date())
    }, 30000)

    return () => {
      clearInterval
    }
  }, [])

  return (
    <div className="relative grid justify-items-center items-center bg-zinc-300 h-[100vh]">
      <LayoutPage title={` ${data.domain} | Navara One`}></LayoutPage>
      <div className="hide-scrollbar bg-white dark:rounded-lg dark:px-2 h-[95%] w-[400px] overflow-y-scroll overflow-x-hidden px-7 rounded-[3rem] border-[10px] border-gray-800">
        <div className="sticky top-0 flex justify-between w-full z-30 bg-white">
          <p className="mt-2 font-bold">
            {now.toLocaleString('en-US', {
              hour: 'numeric',
              minute: 'numeric',
              hour12: false,
            })}
          </p>
          <div className="notch absolute left-1/2 -translate-x-1/2"></div>
          <div className="mt-1 flex gap-2">
            <Image src={wifiIcon} width="20px" height="20px" alt="wifi icon" />
            <Image src={batteryIcon} width="20px" height="20px" alt="baterry icon" />
          </div>
        </div>
        <div className="flex justify-center mb-5 ">
          <Image src={navaraLogo} width="30" height="30" className="mx-auto" alt="navara logo" />
          <span className="my-3 px-3 font-bold text-3xl dark:text-white">Navara</span>
          {/* <div className="flex justify-end">
            <ThemeToggler />
          </div> */}
        </div>
        <div className="rounded-lg border dark:border-black my-2">
          <SearchDropdown
            placeholder="Seach other address"
            className="p-2"
            onChange={handleSearch}
            value={searchTerm}
            searching={resultSearch}
          />
          <div className="  mb-1 ">
            {searchTerm === '' ? (
              <p className="my-2 text-center text-[13px]  px-3">Start typing to search for assets</p>
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
                  <div
                    className={`flex cursor-pointer hover:font-bold hover:bg-gray-50 py-2 hover:text-black px-12 my-1 rounded-2xl `}
                  >
                    <Link href={`${results.domain}`}>
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

        <Card tokenList={filteredTokenList} userInfo={domainInfo} />

        <Widget items={tempWidgetItems} />

        <Tabs tabList={categories} chains={filteredTokenList} />
        {/* <Modal isShow={isShow} handlOpen={handlOpen} /> */}
      </div>
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
