import { useRouter } from 'next/router'

import Image from 'next/image'
import { useEffect, useState } from 'react'

/* Components */

import SearchDropdown from '../../src/commons/UI/SearchDropdown'

/* Assets */
import navaraLogo from '../../assets/logos/icon-navara.svg'
import API from '../../services/api'

/* Constants */
import { SearchIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { setTimeout } from 'timers'
import LogoETH from '../../assets/logos/logo-02.svg'
import LogoUNS from '../../assets/logos/logo-03.svg'
import LogoNavara from '../../assets/logos/logo-white-navara.svg'
// import { useDebounce } from '../../hooks/useDebounce'
import { categories } from '../../constants/constants'
import { tempWidgetItems } from '../../constants/temporaryData'
import LayoutPage from '../../src/commons/LayoutPage'
import { SkeletonDomain } from '../../src/commons/UI/SkeletonDomain'
import { Spinner } from '../../src/commons/UI/Spinner'
import Card from '../../src/components/Card'
import Tabs from '../../src/components/Tabs'
import Widget from '../../src/components/Widget'
import { useDebounce } from '../../src/hooks/useDebounce'
import ThemeToggler from '../../ThemeToggle'
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
    setSearchTerm(event.target.value.toLowerCase())
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

  const [listDomains, setListDomains] = useState<listDomain>([] as any)
  // API search function
  const searchCharacters = async (search: any) => {
    return await API.get('domain/find', {
      params: {
        input: search,
      },
    })
      .then((result: any) => {
        setResults(result)
        setListDomains(result)
        setErrorMessage('')
        setTyping(false)
      })
      .catch((error) => {
        // router.push('/error')
        setResults({})

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
        searchCharacters(debouncedSearchTerm)
          .then((results: any) => {
            setTyping(false)
            setIsSearching(false)
          })
          .catch((error) => {
            router.push('/error')
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

  const filteredTokenList = chains
    ? Object.keys(chains[0])
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
    : []

  const [fakeLoad, setFakeLoad] = useState(false)
  const handleClick = () => {
    setFakeLoad(true)
    setTimeout(() => {
      setFakeLoad(false)
    }, 2000)
    setSearchTerm('')
    setIsSearching(true)
  }
  var imageCards = [
    { name: '', icon: LogoNavara },
    { name: '.uns', icon: LogoUNS },
    { name: '.eth', icon: LogoETH },
  ]

  //find item by images
  const findItem = imageCards.find((item: { name: string; icon: any }) => domain?.includes(item?.name))

  return (
    <div className="flex justify-center bg-[#F3F4F6] dark:bg-[#0F172A] h-[100vh] overflow-y-auto ">
      <LayoutPage title={` ${data.domain} | Navara One`}></LayoutPage>

      <div className="hide-scrollbar border dark:border-black bg-[#F9FAFB] dark:bg-[#151E31] pt-3 pb-5  w-[450px]  overflow-x-hidden p-7  rounded-xl">
        <div className="flex justify-center ">
          <Image src={navaraLogo} width="30" height="30" className="mx-auto" alt="navara logo" />
          <span className="my-3 px-3 font-bold text-3xl dark:text-white">Navara</span>
          <div className="flex justify-end">
            <ThemeToggler />
          </div>
        </div>
        <div className={`flex items-center gap-4 py-4`}>
          <SearchDropdown
            placeholder="Seach other address"
            onChange={handleSearch}
            value={searchTerm}
            searching={resultSearch}
            className="grow"
            icon={<SearchIcon width="20" height="20" className="dark:text-white" />}
          />
        </div>

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
              <p className="mb-3 text-center text-[12px] text-red-500 px-3 font-bold">
                We were unable to find any results for your search
              </p>
            ) : (
              !isSearching &&
              listDomains?.map((item: any, index) => {
                const subDomain = item?.domain.split('.nns.one')
                return (
                  <div
                    className={` items-center gap-4 py-2 hover:bg-gray-200 hover:text-black rounded-lg cursor-pointer`}
                    key={index}
                  >
                    <Link href={`${subDomain[0]}`}>
                      <a onClick={handleClick} className="flex">
                        <div className="rounded-full bg-black h-6 w-6  mr-2 p-1">
                          <Image src={findItem?.icon} width="20" height="20" />
                        </div>
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
        {fakeLoad ? (
          <SkeletonDomain />
        ) : (
          <>
            <Card tokenList={filteredTokenList} userInfo={domainInfo} />

            <Widget items={tempWidgetItems} />

            <Tabs tabList={categories} chains={filteredTokenList} />
          </>
        )}
      </div>
    </div>
  )
}

export const getServerSideProps = async (context: any) => {
  // Fetch data from external API
  const domainName = context.params.username

  const res = await API.get(`domain/find?input=${domainName}.nns.one`)
  // const errorCode = res ? false : res.statusCode
  const data = await res

  // Pass data to the page via props

  return { props: { data: data } }
}

export default Profile
