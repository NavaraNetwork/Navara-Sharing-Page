/* eslint-disable react/no-unescaped-entities */
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import React, { Fragment, useRef, useState } from 'react'
import { WidgetButtonAction } from '../constants/enums'

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
    if (action === WidgetButtonAction.OpenModal) {
      setIsOpen(true)
    }
  }

  return (
    <div className="relative -top-11 mx-auto pt-3 px-5 w-4/5 h-16 bg-white rounded-t-2xl">
      <div className="flex justify-between">
        {items.map((item, index) => {
          return (
            <div key={index} className="divider relative flex flex-col items-center w-[50px]">
              <span onClick={() => handleClick(item.action)}>
                <Image src={item.icon} width="16px" height="16px" />
              </span>
              <p className="mt-2 text-xs">{item.text}</p>
            </div>
          )
        })}
      </div>

      {/* Modal */}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xs transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    Coming soon
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Thank you for using our service. We'll annouce you as soon as we complete this feature.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

export default Widget
