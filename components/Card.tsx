import Image from 'next/image'
import React, { useState } from 'react'

import { UserInfo } from '../types/types'

// Assets
import creditCard from '../assets/images/credit_card.svg'
import checkMark from '../assets/icons/checkmark_round.svg'
import Logo01 from '../assets/logos/logo-01.svg'
import LogoETH from '../assets/logos/logo-02.svg'
import LogoUNS from '../assets/logos/logo-03.svg'
import LogoNavara from '../assets/logos/logo-white-navara.svg'

type CardProp = {
  data: UserInfo
}


const Card: React.FC<CardProp> = ({ data }) => {
  const { name, alias, domain, address, expired, isValid, avatar, logo } = data

  const expiredDate = new Date(expired)

  const expiredMonth = expiredDate.getMonth()
  const expiredYear = expiredDate.getFullYear().toString().slice(-2)

  // const check = imageCard.filter(t => t.name.includes('.nns.one'));

  // const ImageCard = imageCard.filter(t => t.name.includes('.nns.one')===domain)
  var imageCards = [
    { name: '.nns.one', icon: LogoNavara },
    { name: '.uns', icon: LogoUNS },
    { name: '.eth', icon: LogoETH },
  ]

  const findItem = imageCards.find((item) => domain.includes(item.name))

  return (
    <div className="relative min-h-[196px] pl-5 pt-5 pr-8 text-white">
      {/* Card Background */}
      <picture className="absolute top-0 left-0 w-full -z-10">
        <Image src={creditCard} layout="responsive" />
      </picture>
      {/* Card Background */}

      <div className="flex justify-between">
        <div className="flex gap-4">
          <div className="relative w-14 h-14 rounded-full overflow-clip">
            <Image src={avatar} layout="responsive" />
          </div>
          <div>
            <p className="mb-2 capitalize font-normal opacity-70">{name}</p>
            <p className="text-xs">{alias}</p>
          </div>
        </div>
        {/* <div className="w-50 h-50"> */}
        <Image src={findItem.icon} />
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
            <Image src={checkMark} />
          </div>
          <p className="text-[10px] font-normal text-[#F5F9FF]">{address}</p>
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
