import { Tab } from '@headlessui/react'
import React from 'react'

import Nftlayout from './Nftlayout'

import { TokenType } from '../types/types'

import Search from './UI/Search'

/* Assets */
import TokenList from './TokenList'

type TabsProps = {
  tabList: string[]
  panels?: any[]
  chains: any
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Tabs: React.FC<TabsProps> = ({ tabList, panels, chains }) => {
  const chainList = chains.map((chain) => {
    const data = Object.keys(chain).map((key) => {
      return {
        token: key,
        address: chain[key],
        tokenLogo: key,
        tokenNetworkLogo: key,
      }
    })
    return data
  })

  const tokenList = [].concat.apply([], chainList)
  const filteredTokenList = tokenList.filter((item) => {
    return item.token !== 'chainId'
  })

  return (
    <Tab.Group>
      <Tab.List className="flex space-x-1 rounded-2xl bg-[#F8FAFC] p-1">
        {tabList.map((tab, index) => (
          <Tab
            key={index}
            className={({ selected }) =>
              classNames(
                'w-full py-2.5 text-sm font-bold leading-5 text-blue-700',
                'ring-white ring-opacity-25 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-1',
                selected ? 'bg-white shadow' : 'text-[#8E9BAE] hover:bg-blue-100/20'
              )
            }
          >
            {tab}
          </Tab>
        ))}
      </Tab.List>
      {/* <Search placeholder="Seach token, NFT, ..." className="mb-7" /> */}
      <Tab.Panels>
        <Tab.Panel>
          <TokenList placeholder="Seach token, NFT, ..." tokens={filteredTokenList} />
        </Tab.Panel>
        <Tab.Panel>
          <Nftlayout />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}

export default Tabs
