import { SearchIcon } from '@heroicons/react/solid'
import React from 'react'
import { tokenListType } from '../types/types'
import Token from './Token'
import { Input } from './UI/Input'

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
        <SearchIcon width="20" height="20" className="dark:text-white" />
        <Input
          placeholder="Search token,NFT"
          value={searchText}
          onChange={({ target }) => setSearchText(target.value)}
        />
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
