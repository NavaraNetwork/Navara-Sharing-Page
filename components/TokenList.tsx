import Image from 'next/image'
import React from 'react'
import { tokenListType } from '../types/types'
import search from '../assets/icons/search.svg'
import Token from './Token'

const TokenList: React.FC<tokenListType> = ({ placeholder, className, tokens }) => {
  tokens[0].isDefault = true
  const defaultToken = tokens[0].token
  const [searchText, setSearchText] = React.useState('')

  const filteredTokens = tokens.filter(({ token, address }: any) =>
    token.toLowerCase().includes(searchText.toLowerCase())
  )
  return (
    <div>
      <div className={`flex items-center gap-4 p-4 ${className}`}>
        <Image src={search} />
        <input
          className=" w-64 border text-gray-900 text-sm rounded-lg block  p-2.5"
          type="search"
          placeholder={placeholder}
          value={searchText}
          onChange={({ target }) => setSearchText(target.value)}
        />{' '}
      </div>
      <React.Fragment>
        <div className="flex flex-col gap-2">
          {filteredTokens.map((token, index) => {
            token.tokenFrom = defaultToken
            return <Token {...token} key={index} />
          })}
        </div>
      </React.Fragment>
    </div>
  )
}

export default TokenList
