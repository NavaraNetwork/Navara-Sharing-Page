/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React, { useState } from 'react'
import Modal from './UI/Modal'

type widgetProps = {
  items: {
    icon: any
    text: string
    action?: string
  }[]
}

const Widget: React.FC<widgetProps> = ({ items }) => {
  let [isOpen, setIsOpen] = useState(false)

  const handleClick = (action?: string) => {
    setIsOpen(true)

    // if (action === WidgetButtonAction.OpenModal) {
    //   setIsOpen(true)
    // }
  }
  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div className="relative -top-11 mx-auto py-2 px-5 w-4/5 h-16 bg-white rounded-t-2xl">
      <div className="flex justify-between">
        {items.map((item, index) => {
          return (
            <div key={index} className="divider relative flex flex-col items-center w-[50px] cursor-pointer">
              <span onClick={() => handleClick(item.action)}>
                <Image src={item.icon} width="25" height="25" />
              </span>
              <p className="mt-2 text-xs dark:text-black">{item.text}</p>
            </div>
          )
        })}
      </div>
      <Modal
        isShow={isOpen}
        handleOpen={handleClick}
        handleClose={handleClose}
        valueModal="Thank you for using our service. We'll annouce you as soon as we complete this feature."
        titleModal="Coming soon"
      />
    </div>
  )
}

export default Widget
