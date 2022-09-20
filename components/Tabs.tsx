import { Tab } from '@headlessui/react'
import React from 'react'
import { TokenType } from '../types/types'

/* Components */
import Search from './Search'

/* Assets */
import logoBitcoin from '../assets/logos/logo_bitcoin.svg'
import logoEthereum from '../assets/logos/logo_ethereum.svg'
import TokenList from './TokenList'

type TabsProps = {
	tabList: string[]
	panels?: any[]
}

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

const tokenBitcoin: TokenType = {
	tokenLogo: logoBitcoin,
	tokenNetworkLogo: logoBitcoin,
	token: 'Bitcoin',
	symbol: 'BTC',
	address: '0x123...789',
	isVerified: true,
	isDefault: false,
}

const tokenEthereum: TokenType = {
	tokenLogo: logoEthereum,
	tokenNetworkLogo: logoEthereum,
	token: 'Ethereum',
	symbol: 'ETH',
	address: '0x123...789',
	isVerified: true,
	isDefault: true,
}

const tokenList: TokenType[] = [tokenEthereum, tokenBitcoin, tokenBitcoin]

const Tabs: React.FC<TabsProps> = ({ tabList, panels }) => {
	return (
		<Tab.Group>
			<Tab.List className='flex space-x-1 rounded-2xl bg-[#F8FAFC] p-1'>
				{tabList.map((tab, index) => (
					<Tab
						key={index}
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
						{tab}
					</Tab>
				))}
			</Tab.List>
			<Search
				placeholder='Seach token, NFT, ...'
				className='mb-7'
			/>
			<Tab.Panels>
				<Tab.Panel>
					<TokenList tokens={tokenList} />
				</Tab.Panel>
				<Tab.Panel>NFT</Tab.Panel>
			</Tab.Panels>
		</Tab.Group>
	)
}

export default Tabs
