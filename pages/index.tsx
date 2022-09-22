import type { NextPage } from 'next'
import Mobile from '../components/Mobile'

import Head from 'next/head'
import React from 'react'
import ThemeToggler from '../ThemeToggle'

const Home: NextPage = () => {
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
      <div className="pt-8 ">
        <ThemeToggler />
        <Mobile />
      </div>
    </React.Fragment>
  )
}

export default Home
