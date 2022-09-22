/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import React from 'react'

import search from '../../assets/icons/search.svg'

type SearchProps = {
  placeholder?: string
  className?: string
}
const tokens = [
  { author: 'Dang Hai', title: '0xf...b0fd', pageNumber: 123 },
  { author: 'James Joyce', title: '0xt...b0fd', pageNumber: 123 },
  { author: 'Miguel de Cervantes', title: '0xa...b0fd', pageNumber: 123 },
  { author: 'Herman Melville', title: '0xb...b0fd', pageNumber: 123 },
  { author: 'William Shakespeare', title: '0xv...b0fd', pageNumber: 123 },
  { author: 'Dang Hai', title: '0xm...b0fd', pageNumber: 123 },
  { author: 'James Joyce', title: '0xn...b0fd', pageNumber: 123 },
]

const Search: React.FC<SearchProps> = ({ placeholder, className }) => {
  const [searchText, setSearchText] = React.useState('')

  const filteredTokens = tokens.filter(
    ({ author, title }) =>
      author.toLowerCase().includes(searchText.toLowerCase()) || title.toLowerCase().includes(searchText.toLowerCase())
  )
  return (
    <div>
      {/* <div className={`flex items-center gap-4 pt-4 ${className}`}>
        <Image src={search} />
        <input
          className=" w-64 border text-gray-900 text-sm rounded-lg block  p-2.5"
          type="search"
          placeholder={placeholder}
          value={searchText}
          onChange={({ target }) => setSearchText(target.value)}
        />{' '}
      </div> */}
      {/* <ul>
        {filteredTokens.map(({ author, title }) => (
          <li key={title}>
            <strong>{title}</strong> by {author}
          </li>
        ))}
      </ul> */}
    </div>
  )
}

export default Search
