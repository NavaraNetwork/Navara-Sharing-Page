import React from 'react'
import { tokenListType } from '../types/types'
import Token from './Token'

const TokenList: React.FC<tokenListType> = ({ tokens }) => {
  return (
    <React.Fragment>
      <div className="flex flex-col gap-2">
        {tokens.map((token, index) => {
          return <Token {...token} key={index} />
        })}
      </div>
    </React.Fragment>
  )
}

export default TokenList
