import Image from 'next/image'
import React, { useRef, useState } from 'react'

import { UserInfo } from '../types/types'

// Assets
import checkMark from '../assets/icons/checkmark.svg'
import checkMarkRound from '../assets/icons/checkmark_round.svg'
import icon_copy from '../assets/icons/copy.svg'
import avatar from '../assets/images/avatar.png'
import creditCard from '../assets/images/credit_card.svg'
import LogoETH from '../assets/logos/logo-02.svg'
import LogoUNS from '../assets/logos/logo-03.svg'
import LogoNavara from '../assets/logos/logo-white-navara.svg'
import useCopyToClipBoard from '../hooks/useCopyToClipBoard'
import { shortenAddress } from '../utils/stringFunctions'

type CardProp = {
  data: UserInfo
}

const Card: React.FC<CardProp> = ({ data }) => {
  const { alias, domain, address, expired, logo, chains } = data

  const addressRef = useRef<HTMLParagraphElement>(null)
  const [toolTipText, setToolTipText] = useState<string>('Copy token address')
  const [copyIcon, setCopyIcon] = useState(icon_copy)

  const [, copy] = useCopyToClipBoard()

  const handleToolTipClick = () => {
    console.log(addressRef.current?.innerText)

    null !== addressRef.current && copy(addressRef.current?.innerText)

    setToolTipText('Copied')
    setCopyIcon(checkMark)

    setTimeout(() => {
      setToolTipText('Copy token address')
      setCopyIcon(icon_copy)
    }, 3000)
  }

  const chainList = chains.map((chain) => {
    const data = Object.keys(chain).map((key) => {
      return {
        token: key,
        address: chain[key],
        tokenLogo: key,
        tokenNetworkLogo: key,
      }
    })
    return data
  })

  const tokenList = [].concat.apply([], chainList)
  const filteredTokenList = tokenList.filter((item) => {
    return item.token !== 'chainId'
  })

  const expiredDate = new Date(expired)
  const today = new Date()
  const isValid = expiredDate.getTime() > today.getTime()
  const expiredMonth = expiredDate.getMonth()
  const expiredYear = expiredDate.getFullYear().toString().slice(-2)

  var imageCards = [
    { name: '.nns.one', icon: LogoNavara },
    { name: '.uns', icon: LogoUNS },
    { name: '.eth', icon: LogoETH },
  ]

  const findItem = imageCards.find((item) => domain?.includes(item.name))

  return (
    <div className="relative min-h-[196px] pl-5 pt-5 pr-8 text-white">
      {/* Card Background */}
      <picture className="absolute top-0 left-0 w-full -z-10">
        <Image src={creditCard} layout="responsive" alt="cardBackground" />
      </picture>
      {/* Card Background */}

      <div className="flex justify-between">
        <div className="flex gap-4">
          <div className="relative w-14 h-14 rounded-full overflow-clip">
            <Image src={avatar} layout="responsive" alt="user avatar" />
          </div>
          <div className="">
            <p className="mb-1 capitalize font-normal">Navara One</p>
            <p className="text-xs">@{domain?.replace('.nns.one', '')}</p>
          </div>
        </div>
        {/* <div className="w-50 h-50"> */}
        <Image src={findItem.icon} alt="" />
        {/* {
          {
            '.nns.one': <Image src={LogoNavara} />,
            '.eth': <Image src={LogoETH} />,
            '.uns': <Image src={LogoUNS} />,
          }[findItem.name]
        } */}

        {/* </div> */}
      </div>

      <div className="flex justify-between  mt-2">
        <div>
          <div className="flex gap-3">
            <p className="font-medium">{domain}</p>
            <Image src={checkMarkRound} alt="checkmark" />
          </div>

          <div className="flex items-center gap-3">
            <span className="tooltip">
              <p className="text-[10px] font-normal text-[#F5F9FF]">
                {shortenAddress(filteredTokenList[0].address, 8)}
              </p>
              <p className="hidden" ref={addressRef}>
                {filteredTokenList[0].address}
              </p>
              <p className="tooltiptext">{filteredTokenList[0].address}</p>
            </span>
            <div className="tooltip" onClick={handleToolTipClick}>
              <span className="tooltiptext">{toolTipText}</span>
              <Image src={copyIcon} width="16px" height="16px" alt="copy icon" />
            </div>
          </div>
        </div>
        <div>
          <p className="text-xs font-bold leading-6">
            {expiredMonth}/{expiredYear}
          </p>
          <p className="text-[10px]">{isValid ? 'Valid' : 'Invalid'}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
