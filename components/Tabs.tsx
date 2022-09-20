import { Tab } from '@headlessui/react'
import { type } from 'os'
import React from 'react'
import Search from './Search'

type TabsProps<T> = {
	tabList: string[]
	panels: T[]
}

const categories = ['Token', 'NFT']

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

const Tabs: React.FC = () => {
	return (
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
			<Search
				placeholder='Seach token, NFT, ...'
				className='mb-7'
			/>
			<Tab.Panels>
				<Tab.Panel>Tokens</Tab.Panel>
				<Tab.Panel>NFT</Tab.Panel>
			</Tab.Panels>
		</Tab.Group>
	)
}

export default Tabs
