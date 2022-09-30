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

  const handleChange = (e: any) => {
    setSearchText(e.target.value)
  }

  return (
    <div>
      <div className={`grid grid-flow-row-dense grid-cols-3 gap-1 py-4`}>
        <div className="col-span-2">
          <Input
            icon={<Image src={IconSearch} />}
            placeholder="Search token,NFT"
            value={searchText}
            onChange={({ target }) => setSearchText(target.value)}
          />
        </div>

        <div className=" ">
          <select
            id="countries"
            className="bg-[#061154] border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-4 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            onChange={handleChange}
          >
            <option value="">All chains</option>
            {tokens &&
              tokens?.map((item: any, index: any) => {
                return (
                  <option value={item?.token} key={index}>
                    {item?.token}
                  </option>
                )
              })}
          </select>
        </div>
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
