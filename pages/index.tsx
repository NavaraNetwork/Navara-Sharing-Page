import type { NextPage } from 'next'

import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect } from 'react'
import navaraLogo from '../assets/logos/icon-navara.svg'
import LayoutPage from '../src/commons/LayoutPage'
import { SkeletonDomain } from '../src/commons/UI/SkeletonDomain'
import ThemeToggler from '../ThemeToggle'

const Home: NextPage = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hostname.split('.nns.one').length <= 0) {
      window.location.href = `/navara`
    } else {
      window.location.href = `/${window.location.hostname.split('.nns.one')[0]}`
    }
  }, [])
  return (
    <React.Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex justify-center bg-[#F3F4F6] dark:bg-[#0F172A] h-[100vh] overflow-y-auto ">
        <LayoutPage title={`  Navara One`}></LayoutPage>

        <div className="hide-scrollbar border dark:border-black bg-[#F9FAFB] dark:bg-[#151E31] pt-3 pb-5  w-[450px]  overflow-x-hidden p-7  rounded-xl">
          <div className="flex justify-center ">
            <Image src={navaraLogo} width="30" height="30" className="mx-auto" alt="navara logo" />
            <span className="my-3 px-3 font-bold text-3xl dark:text-white">Navara</span>
            <div className="flex justify-end">
              <ThemeToggler />
            </div>
          </div>
          {/* <ThemeToggler /> */}
          <SkeletonDomain />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home
