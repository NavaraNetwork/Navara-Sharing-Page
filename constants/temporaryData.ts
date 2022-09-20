import { UserInfo } from '../types/types'
import { WidgetButtonAction } from './enums'

import follow from '../assets/icons/follow.svg'
import nft from '../assets/icons/receive_square.svg'
import token from '../assets/icons/send_square.svg'
import share, { default as IconTest } from '../assets/icons/share.svg'
import avatar from '../assets/images/lemon.jpg'
import logo from '../assets/logos/navara_logo_custom.svg'

export const tempWidgetItems: { icon: any; text: string; action?: string }[] = [
  {
    icon: token,
    text: 'Token',
  },
  {
    icon: nft,
    text: 'NFT',
  },
  {
    icon: follow,
    text: 'Follow',
    action: WidgetButtonAction.OpenModal,
  },
  {
    icon: share,
    text: 'Share',
  },
]

export const tempUser: UserInfo = {
  name: 'Do Nam Trung',
  alias: '@trungdo',
  domain: 'trungdo.nns.one',
  address: '0x123.789',
  expirationDate: '09/27',
  isValid: true,
  avatar: avatar,
  logo: logo,
}
