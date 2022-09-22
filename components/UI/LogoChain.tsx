import Image from 'next/image'
import React from 'react'

import bitcoin from '../../assets/logos/logo_bitcoin.svg'
import ethereum from '../../assets/logos/logo_ethereum.svg'
import xrp from '../../assets/logos/logo_xrp.svg'
import binance from '../../assets/logos/logo_binance.svg'
import uniswap from '../../assets/logos/logo_uniswep.svg'
import liteCoin from '../../assets/logos/logo_litecoin.svg'
import near from '../../assets/logos/near.svg'
import polkadot from '../../assets/logos/polkadot.svg'
import solana from '../../assets/logos/solana.svg'

const logo = {
  ethereum,
  bitcoin,
  xrp,
  binance,
  uniswap,
  liteCoin,
  near,
  polkadot,
  solana
}

export default function LogoChainImage({ network }) {
  return <Image src={logo[network]} layout="fill" />
}
