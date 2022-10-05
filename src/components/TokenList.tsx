import Image from 'next/image'
import React from 'react'
import IconSearch from '../../assets/icons/search.svg'
import { tokenListType } from '../../types/types'
import { Input } from '../commons/UI/Input'
import Token from './Token'
const TokenList: React.FC<tokenListType> = ({ placeholder, className, tokens }) => {
  tokens.length === 0 ? tokens.push({ isDefault: true }) : (tokens[0].isDefault = true)

  const defaultToken = tokens[0]?.token
  const [searchText, setSearchText] = React.useState('')

  const filteredTokens = tokens.filter(({ token, address }: any) =>
    token?.toLowerCase().includes(searchText.toLowerCase())
  )
  return (
    <div>
      <div className={`  p-4 `}>
        <Input
          icon={<Image src={IconSearch} />}
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
