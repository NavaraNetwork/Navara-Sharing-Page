/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React, { useState } from 'react'
import Modal from '../commons/UI/Modal'

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
  }
  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div className="relative -top-6 mx-auto py-3 px-2 w-4/5  shadow-lg bg-white rounded-[10px] z-10">
      <div className="flex">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className="divider relative flex flex-col grow items-center w-[50px] cursor-pointer"
              onClick={() => handleClick(item.action)}
            >
              <span>
                <Image src={item.icon} width="25" height="25" alt="icon" />
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
