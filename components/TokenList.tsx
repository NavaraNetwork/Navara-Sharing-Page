import React from 'react'
import { tokenListType } from '../types/types'
import Token from './Token'

const TokenList: React.FC<tokenListType> = ({ tokens }) => {
  tokens[0].isDefault = true
  const defaultToken = tokens[0].token
  return (
    <React.Fragment>
      <div className="flex flex-col gap-2">
        {tokens.map((token, index) => {
          token.tokenFrom = defaultToken
          return <Token {...token} key={index} />
        })}
      </div>
    </React.Fragment>
  )
}

export default TokenList
