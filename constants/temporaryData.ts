import { WidgetButtonAction } from './enums'

import follow from '../assets/icons/follow.svg'
import nft from '../assets/icons/receive_square.svg'
import token from '../assets/icons/send_square.svg'
import share from '../assets/icons/share.svg'

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
