import Image from 'next/image'
import React from 'react'

import { TokenType } from '../types/types'

/* assets */
import icon_copy from '../assets/icons/copy.svg'
import icon_send from '../assets/icons/send.svg'
import checkMark from '../assets/icons/checkmark.svg'

const Token: React.FC<TokenType> = ({ tokenLogo, tokenNetworkLogo, token, symbol, address, isVerified, isDefault }) => {
  return (
    <div className="grid grid-flow-col-dense py-3">
      <div>
        <div className="relative w-10 h-10 rounded-full">
          <Image src={tokenLogo} layout="fill" />
          <div className="absolute w-4 h-4 bottom-0 right-0 border border-white rounded-full">
            <Image src={tokenNetworkLogo} layout="fill" />
          </div>
        </div>
      </div>
      <div>
        <div>
          <span className="inline-block font-bold mr-2">{token}</span>
          <span className="text-[10px]">({address})</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#8E9BAE]">{symbol}</span>
          <span className={`${isVerified ? 'inline' : 'hidden'}`}>
            <Image src={checkMark} />
          </span>
          {isDefault ? (
            <div className="flex items-center max-h-4 bg-[#F0F9FF] px-1 py-2 rounded-sm ">
              <span className="text-[10px] text-[#165CDD] font-bold">Default</span>
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex flex-col items-center justify-between h-full">
        <div className="tooltip">
          <span className="tooltiptext">Copy token address</span>
          <Image src={icon_copy} width="24px" height="24px" />
        </div>
        <p>Copy</p>
      </div>
      <div className="flex flex-col items-center justify-between h-full">
        <Image src={icon_send} width="24px" height="24px" />
        <p>Send</p>
      </div>
    </div>
  )
}

export default Token
