import { useRouter } from 'next/router'

import Image from 'next/image'
import { useEffect, useState } from 'react'

/* Components */

import SearchDropdown from '../../components/UI/SearchDropdown'

/* Assets */
import navaraLogo from '../../assets/logos/icon-navara.svg'
import API from '../../services/api'

/* Constants */
import { SearchIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { setInterval, setTimeout } from 'timers'
import LogoETH from '../../assets/logos/logo-02.svg'
import LogoUNS from '../../assets/logos/logo-03.svg'
import LogoNavara from '../../assets/logos/logo-white-navara.svg'
import Card from '../../components/Card'
import LayoutPage from '../../components/commons/LayoutPage'
import Tabs from '../../components/Tabs'
import { SkeletonDomain } from '../../components/UI/SkeletonDomain'
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
  const [dataShow, setDataShow] = useState(false)
  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value)
  }

  type resultType = {
    domain?: string
  }
  type listDomain = [{ domainId?: string; domain?: string; expired?: string }]
  // State and setters for ...
  // Search term
  // API search results
  const [results, setResults] = useState<resultType>({})
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

  const [listDomains, setListDomains] = useState<listDomain>([] as any)
  // API search function

  const searchCharacters = async (search: any) => {
    return await API.get('domain/find', {
      params: {
        domain: search,
      },
    })
      .then((result: any) => {
        setResults(result)
        setListDomains(result)
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
    setDataShow(false)
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

  const [fakeLoad, setFakeLoad] = useState(false)
  const handleClick = (domain: any) => {
    setFakeLoad(true)
    setTimeout(() => {
      setFakeLoad(false)
    }, 2000)
    setSearchTerm('')
    setIsSearching(true)
  }
  var imageCards = [
    { name: '.nns.one', icon: LogoNavara },
    { name: '.uns', icon: LogoUNS },
    { name: '.eth', icon: LogoETH },
  ]
  const findItem = imageCards.find((item: { name: string; icon: any }) => domain?.includes(item?.name))
  return (
    <div className="flex justify-center bg-zinc-300 h-[95vh] p-7">
      <LayoutPage title={` ${data.domain} | Navara One`}></LayoutPage>
      <div className="hide-scrollbar bg-white dark:rounded-lg dark:px-2 w-[400px] overflow-y-scroll overflow-x-hidden p-7 rounded-xl">
        <div className="flex justify-center mb-5 ">
          <Image src={navaraLogo} width="30" height="30" className="mx-auto" alt="navara logo" />
          <span className="my-3 px-3 font-bold text-3xl dark:text-white">Navara</span>
          {/* <div className="flex justify-end">
            <ThemeToggler />
          </div> */}
        </div>
        <div className={`flex items-center gap-4 p-4  `}>
          <SearchIcon width="20" height="20" className="dark:text-white" />
          <SearchDropdown
            placeholder="Seach other address"
            onChange={handleSearch}
            value={searchTerm}
            searching={resultSearch}
          />
        </div>

        <div className="">
          <div className={` mb-1 overflow-y-auto  mx-2`}>
            {searchTerm === '' ? (
              <></>
            ) : // <p className="my-2 text-center text-[13px]  px-3">Start typing to search for assets</p>
            results ? (
              typing ? (
                <div className="my-3">
                  <Spinner />
                </div>
              ) : listDomains && listDomains.length <= 0 ? (
                <p className="my-3 text-center text-[13px] text-red-500 px-3">
                  We were unable to find any results for your search
                </p>
              ) : (
                !isSearching &&
                listDomains?.map((item, index) => {
                  return (
                    <div
                      className={`flex items-center gap-4 py-2 hover:bg-gray-200 rounded-lg cursor-pointer`}
                      onClick={() => handleClick(item?.domain)}
                    >
                      <div className="rounded-full h-6 w-6 bg-gray-900 mr-2 p-1">
                        <Image src={findItem?.icon} />
                      </div>

                      <Link href={`${item?.domain}`}>
                        <a>
                          <p>{item?.domain}</p>
                        </a>
                      </Link>
                    </div>
                  )
                })
              )
            ) : (
              <p className="my-3 text-center text-[13px] text-red-500 px-3">
                We were unable to find any results for your search
              </p>
            )}
          </div>
        </div>
        {fakeLoad ? (
          <SkeletonDomain />
        ) : (
          <>
            <Card tokenList={filteredTokenList} userInfo={domainInfo} />

            <Widget items={tempWidgetItems} />

            <Tabs tabList={categories} chains={filteredTokenList} />
          </>
        )}

        {/* <Modal isShow={isShow} handlOpen={handlOpen} /> */}
      </div>
    </div>
  )
}

export const getServerSideProps = async (context: any) => {
  // Fetch data from external API
  const domainName = context.params.username
  const res = await API.get(`domain/find?domain=${domainName}`)
  const data = await res

  // Pass data to the page via props

  return { props: { data: data } }
}

export default Profile
