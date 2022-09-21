import Image from 'next/image'
import React, { useEffect, useState } from 'react'

/* Components */
import Card from './Card'
import Tabs from './Tabs'
import SearchDropdown from './UI/SearchDropdown'
import { Spinner } from './UI/Spinner'
import Widget from './Widget'

/* Assets */
import navaraLogo from '../assets/logos/navara_logo.svg'
import { useDebounce } from '../hooks/useDebounce'
import API from '../services/api'

/* Constants */
import Link from 'next/link'
import { categories } from '../constants/constants'
import { tempUser, tempWidgetItems } from '../constants/temporaryData'

const Mobile: React.FC = () => {
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

  const [data, setData] = useState([])
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
      console.log(result)
      setResults(result)
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
      {isSearching && (
        <div className="my-3">
          <Spinner />
        </div>
      )}
      {/* {results &&
        results?.map((result) => ( */}
      {/* {results && ( */}
      {/* <Transition
        show={results}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      > */}
      <div className="flex cursor-pointer hover:bg-gray-200">
        {/* <div className="p-2">
          <Image src={token} width="15" height="15" />
        </div> */}
        <Link href={`/${results?.domain}`}>
          <div className={`flex cursor-pointer hover:font-bold rounded-2xl mb-2`}>
            <a href={`/${results?.domain}`}>
              <div className="flex px-2 my-3 flex-col ">
                <p>{results?.domain}</p>
              </div>
            </a>
          </div>
        </Link>
      </div>
      {/* </Transition> */}
      {/* )} */}

      <Card {...tempUser} />

      <Widget items={tempWidgetItems} />

      <Tabs tabList={categories} />
    </div>
  )
}

export default Mobile
