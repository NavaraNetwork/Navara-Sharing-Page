import Image from 'next/image'

import bitcoin from '../../assets/logos/logo_bitcoin.svg'
import {
  default as binance,
  default as ethereum,
  default as liteCoin,
  default as uniswap,
  default as xrp,
} from '../../assets/logos/logo_ethereum.svg'

const logo = {
  ethereum: ethereum,
  bitcoin: bitcoin,
  xrp: xrp,
  binance: binance,
  uniswap: uniswap,
  liteCoin: liteCoin,
}

export default function LogoChainImage({ network }) {
  return <Image src={logo[network]} layout="fill" />
}
