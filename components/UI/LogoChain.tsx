import Image from 'next/image'
import React from 'react'
import { importFolder } from '../../utils/stringFunctions'

import bitcoin from '../../assets/logos/logo_bitcoin.svg'
import ethereum from '../../assets/logos/logo_ethereum.svg'
import xrp from '../../assets/logos/logo_ethereum.svg'
import binance from '../../assets/logos/logo_ethereum.svg'
import uniswap from '../../assets/logos/logo_ethereum.svg'
import liteCoin from '../../assets/logos/logo_ethereum.svg'

const logo = {
  ethereum: ethereum,
  bitcoin: bitcoin,
  xrp: xrp,
  binance: binance,
  uniswap: uniswap,
  liteCoin: liteCoin,
}

export default function LogoChainImage({ network }) {
  console.log(bitcoin)

  return <Image src={logo[network]} layout="fill" />
}
