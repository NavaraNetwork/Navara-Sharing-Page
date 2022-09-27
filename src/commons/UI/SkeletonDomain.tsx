import { Tab } from '@headlessui/react'
import Link from 'next/link'
import { categories } from '../../../constants/constants'
import { classNames } from '../../../utils/common'

const nftTemplate = (
  <Link href={''}>
    <a
      className="cursor-pointer single-about-us  flex items-center justify-center flex-col"
      target="_blank"
      rel="noreferrer"
    >
      <div className="icon mb-5">
        <svg
          className="w-full h-12 text-gray-200"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 640 512"
        >
          <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
        </svg>
      </div>
      <h3>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
      </h3>
      <div className="flex justify-center items-center mb-5">
        <h3 className="my-1">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-9 mb-2"></div>
        </h3>
      </div>
      <p />
    </a>
  </Link>
)

const tokenSkeleton = (
  <div>
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-[40px_minmax(0,_1fr)_40px_40px] gap-4 py-3 border-b last:border-b-0">
        <div className="-translate-y-2">
          <svg
            className="w-14 h-14 text-gray-200 dark:text-gray-700"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div>
          <div className="h-2 bg-gray-200 animate-pulse rounded-full dark:bg-gray-700 w-3/4 mb-2"></div>
          <div className="w-full h-2.5 animate-pulse bg-gray-200 rounded-full dark:bg-gray-700 mb-2"></div>
          <div className="w-3/4 h-2 animate-pulse bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div className="flex flex-col items-center justify-between  cursor-pointer">
          {/* <Image src={icon_copy} width="24px" height="24px" alt="icon_copy" /> */}
          <div className="icon mb-5">
            <svg
              className="w-full h-12 text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between  cursor-pointer">
          <div className="icon mb-5">
            <svg
              className="w-full h-12 text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
            </svg>
          </div>
          {/* <p className="text-[14px]">Send</p> */}
        </div>
      </div>
    </div>
  </div>
)

export const SkeletonDomain = () => {
  return (
    <div>
      <div role="status" className="relative min-h-[196px] pl-5 pt-5 pr-8 text-white z-10 space-y-8 animate-pulse">
        <div className="absolute top-0 left-0 flex justify-center items-center w-full h-48 bg-gray-300 rounded dark:bg-gray-700"></div>
        {/* Card Background */}
      </div>
      {/* <Widget items={tempWidgetItems} /> */}
      <Tab.Group>
        <Tab.List className="flex mt-5 space-x-1 rounded-2xl bg-[#F8FAFC] p-1">
          {categories.map((tab, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                classNames(
                  'w-full  py-2.5 text-sm font-bold leading-5 text-blue-700 rounded-2xl',
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
            <div>
              <div className={`flex items-center gap-4 p-4`}>
                <div className="h-2 animate-pulse bg-gray-200 rounded-full dark:bg-gray-700 w-full py-4 mb-2"></div>

                {/* <SearchIcon width="20" height="20" className="dark:text-white" /> */}
                {/* <Input placeholder="Search token,NFT" /> */}
              </div>
              {tokenSkeleton}
              {tokenSkeleton}
              {tokenSkeleton}
              {tokenSkeleton}
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="grid grid-cols-2 gap-4 mt-5">
              {nftTemplate}
              {nftTemplate}
              {nftTemplate}
              {nftTemplate}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
