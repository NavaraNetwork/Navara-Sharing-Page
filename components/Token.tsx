import Image from 'next/image'
import React, { useRef, useState } from 'react'

import { TokenType } from '../types/types'

/* assets */
import icon_copy from '../assets/icons/copy.svg'
import icon_send from '../assets/icons/send.svg'
import checkMarkRound from '../assets/icons/checkmark_round.svg'
import checkMark from '../assets/icons/checkmark.svg'
import useCopyToClipBoard from '../hooks/useCopyToClipBoard'
import { shortenAddress } from '../utils/stringFunctions'
import LogoChainImage from './UI/LogoChain'
import ModalSend from './UI/ModalSend'

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
  const [isSend, setIsSend] = useState(false)
  const handleOpenModal = () => {
    setIsSend(true)
  }
  const handleClose = () => {
    setIsSend(false)
  }
  return (
    <div className="grid grid-cols-[40px_minmax(0,_1fr)_40px_40px] gap-4 py-3">
      <div>
        <div className="relative w-10 h-10 rounded-full">
          <LogoChainImage network={tokenLogo} />
          <div className="absolute w-4 h-4 bottom-0 right-0 border border-white rounded-full">
            <LogoChainImage network={tokenLogo} />
          </div>
        </div>
      </div>
      <div>
        <div className="my-2">
          <span className="inline-block font-bold mr-2 capitalize">{token}</span>
          <span className="tooltip">
            (<span className="text-[10px]">{address && shortenAddress(address, 8)}</span>)
            <span className="tooltiptext">{address}</span>
            <span className="hidden" ref={addressRef}>
              {address}
            </span>
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
      <div className="flex flex-col items-center justify-between h-full cursor-pointer">
        <div className="tooltip" onClick={handleToolTipClick}>
          <span className="tooltiptext">{toolTipText}</span>
          <Image src={copyIcon} width="24px" height="24px" />
        </div>
        <p className="text-[14px] ">Copy</p>
      </div>
      <div className="flex flex-col items-center justify-between h-full cursor-pointer" onClick={handleOpenModal}>
        <Image src={icon_send} width="24px" height="24px" />
        <p className="text-[14px]">Send</p>
      </div>
      <ModalSend
        handleOpen={handleOpenModal}
        handleClose={handleClose}
        titleModal="Send With"
        tokenFrom="ETH"
        tokenTo={token}
        fromAddress={address}
        isShow={isSend}
      />
    </div>
  )
}

export default Token
