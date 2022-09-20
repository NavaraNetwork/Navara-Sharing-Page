import Image from 'next/image'
import React from 'react'
import { UserInfo } from '../types/types'

/* Components */
import Card from './Card'
import Search from './Search'
import Tabs from './Tabs'

/* Assets */
import navaraLogo from '../assets/logos/navara_logo.svg'
import logo from '../assets/logos/navara_logo_custom.svg'
import token from '../assets/icons/send_square.svg'
import nft from '../assets/icons/receive_square.svg'
import follow from '../assets/icons/follow.svg'
import share from '../assets/icons/share.svg'
import avatar from '../assets/images/lemon.jpg'

const items: { icon: any; text: string }[] = [
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
	},
	{
		icon: share,
		text: 'Share',
	},
]

const categories = ['Token', 'NFT']
const user: UserInfo = {
	name: 'Do Nam Trung',
	alias: '@trungdo',
	domain: 'trungdo.nns.one',
	address: '0x123.789',
	expirationDate: '09/27',
	isValid: true,
	avatar: avatar,
	logo: logo
}

const Mobile: React.FC = () => {
	return (
		<div className='max-w-xs mx-auto'>
			<div className='flex justify-center mb-5'>
				<Image
					src={navaraLogo}
					className='mx-auto'
				/>
			</div>

			<Search
				placeholder='Seach other address'
				className='mb-7'
			/>

			<Card {...user} />

			<div className='relative -top-11 mx-auto pt-3 px-5 w-4/5 h-16 bg-white rounded-t-2xl'>
				<div className='flex justify-between'>
					{items.map((item, index) => {
						return (
							<div
								key={index}
								className='divider relative flex flex-col items-center w-[50px]'
							>
								<Image
									src={item.icon}
									width='16px'
									height='16px'
								/>
								<p className='mt-2 text-xs'>{item.text}</p>
							</div>
						)
					})}
				</div>
			</div>

			<Tabs tabList={categories} />
		</div>
	)
}

export default Mobile
