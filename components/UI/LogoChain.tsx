import Image from 'next/image'
import { FileExtension } from '../../constants/enums'

import { importFolder } from '../../utils/folderFunction'

export default function LogoChainImage(network: any) {
  const images = importFolder(require.context('../../assets/logos/tokens', false, /\.(png|jpe?g|svg)$/))
  const svg = network + FileExtension.svg

  return <Image src={images[svg]} layout="fill" />
}
