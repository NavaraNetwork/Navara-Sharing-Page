import { Tab } from '@headlessui/react'
import React from 'react'

import Nftlayout from './Nftlayout'

/* Assets */
import TokenList from './TokenList'

type TabsProps = {
  tabList: string[]
  chains: any
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Tabs: React.FC<TabsProps> = ({ tabList, chains }) => {
  return (
    <Tab.Group>
      <Tab.List className="flex space-x-1 rounded-2xl bg-[#F8FAFC] p-1">
        {tabList.map((tab, index) => (
          <Tab
            key={index}
            className={({ selected }) =>
              classNames(
                'w-full py-2.5 text-sm font-bold leading-5 text-blue-700 rounded-2xl',
                'ring-white ring-opacity-25 ring-offset-2 ring-offset-blue-400 focus:outline-none',
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
          <TokenList placeholder="Seach token, NFT, ..." tokens={chains} />
        </Tab.Panel>
        <Tab.Panel>
          <Nftlayout />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}

export default Tabs
