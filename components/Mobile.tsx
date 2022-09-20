import Image from 'next/image'
import React from 'react'

/* Components */
import Card from './Card'

/* Assets */
import navaraLogo from '../assets/navara_logo.svg'
import token from '../assets/send_square.svg'
import nft from '../assets/receive_square.svg'
import follow from '../assets/follow.svg'
import share from '../assets/share.svg'
import Search from './Search'
import TokensAndNfts from './Tabs'
import Tabs from './Tabs'

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
const user = {
	name: 'Do Nam Trung',
	alias: '@trungdo',
	domain: 'trungdo.nns.one',
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

			<Card />

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

			<Tabs />
		</div>
	)
}

export default Mobile
