import Image from 'next/image'
import React from 'react'
import { Tab } from '@headlessui/react'

/* Components */
import Card from './Card'

/* Assets */
import navaraLogo from '../assets/navara_logo.svg'
import token from '../assets/send_square.svg'
import nft from '../assets/receive_square.svg'
import follow from '../assets/follow.svg'
import share from '../assets/share.svg'
import Search from './Search'

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

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
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

			<Tab.Group>
				<Tab.List className='flex space-x-1 rounded-2xl bg-[#F8FAFC] p-1'>
					{categories.map((category) => (
						<Tab
							key={category}
							className={({ selected }) =>
								classNames(
									'w-full py-2.5 text-sm font-bold leading-5 text-blue-700',
									'ring-white ring-opacity-25 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-1',
									selected
										? 'bg-white shadow'
										: 'text-[#8E9BAE] hover:bg-blue-100/20'
								)
							}
						>
							{category}
						</Tab>
					))}
				</Tab.List>
			</Tab.Group>
		</div>
	)
}

export default Mobile
