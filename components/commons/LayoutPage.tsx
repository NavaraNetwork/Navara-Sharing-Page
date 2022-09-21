import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

type LayoutPageProps = {
  children?: React.ReactNode
  title?: any
}
const LayoutPage = ({ children, title }: LayoutPageProps) => {
  return (
    <div>
      <Head>
        <title>
          {title ||
            'Navara Sharing Page'}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </div>
  )
}

export default LayoutPage
