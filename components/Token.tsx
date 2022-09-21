import Image from 'next/image'
import React, { useRef, useState } from 'react'

import { TokenType } from '../types/types'

/* assets */
import icon_copy from '../assets/icons/copy.svg'
import icon_send from '../assets/icons/send.svg'
import checkMarkRound from '../assets/icons/checkmark_round.svg'
import checkMark from '../assets/icons/checkmark.svg'
import useCopyToClipBoard from '../hooks/useCopyToClipBoard'

const Token: React.FC<TokenType> = ({ tokenLogo, tokenNetworkLogo, token, symbol, address, isVerified, isDefault }) => {
  const addressRef = useRef<HTMLSpanElement>(null)
  const [toolTipText, setToolTipText] = useState<string>('Copy token address')
  const [copyIcon, setCopyIcon] = useState(icon_copy)

  const [, copy] = useCopyToClipBoard()

  const handleToolTipClick = () => {
    null !== addressRef.current && copy(addressRef.current?.innerText)
    setToolTipText('Copied')
    setCopyIcon(checkMark)

    setTimeout(() => {
      setToolTipText('Copy token address')
      setCopyIcon(icon_copy)
    }, 3000)
  }

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
          <span>
            (
            <span className="text-[10px]" ref={addressRef}>
              {address}
            </span>
            )
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#8E9BAE]">{symbol}</span>
          <span className={`${isVerified ? 'inline' : 'hidden'}`}>
            <Image src={checkMarkRound} />
          </span>
          {isDefault ? (
            <div className="flex items-center max-h-4 bg-[#F0F9FF] px-1 py-2 rounded-sm ">
              <span className="text-[10px] text-[#165CDD] font-bold">Default</span>
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex flex-col items-center justify-between h-full">
        <div className="tooltip" onClick={handleToolTipClick}>
          <span className="tooltiptext">{toolTipText}</span>
          <Image src={copyIcon} width="24px" height="24px" />
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
