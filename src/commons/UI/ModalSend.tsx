import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React, { Fragment } from 'react'
import IconArrowRight from '../../../assets/icons/icon-arrow-right.svg'
import IconCoinBase from '../../../assets/logos/icon-coinbase.svg'
import IconMetaMask from '../../../assets/logos/icon-metamask.svg'
import IconNavara from '../../../assets/logos/icon-navara.svg'
import IconTrustWallet from '../../../assets/logos/icon-trustwallet.svg'
import { shortenAddress } from '../../../utils/stringFunctions'

type ModalProps = {
  titleModal?: string
  className?: string
  handleClose?: (event: any) => void
  handleOpen?: (event: any) => void
  valueModal?: string
  isShow?: boolean
  tokenFrom?: string | boolean
  tokenTo?: string
  fromAddress?: string
}
const listWalletConnect = [
  { nameWallet: 'NavaraWallet', iconWallet: IconNavara },
  { nameWallet: 'MetaMask', iconWallet: IconMetaMask },
  { nameWallet: 'TrustWallet', iconWallet: IconTrustWallet },
  { nameWallet: 'Coinbase', iconWallet: IconCoinBase },
]
const ModalSend: React.FC<ModalProps> = ({
  isShow,
  handleOpen,
  handleClose,
  titleModal,
  valueModal,
  tokenFrom,
  tokenTo,
  fromAddress,
}) => {
  return (
    <>
      <Transition appear show={isShow} as={Fragment}>
        <Dialog as="div" className="relative w-96 z-10" onClose={() => {}}>
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
                <Dialog.Panel className="w-full max-w-lg transform rounded-2xl dark:bg-gray-900 bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex">
                    <button className="ml-auto" onClick={handleClose}>
                      <XIcon className="h-5 w-5 text-gray-500" />
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold text-center font-medium leading-6 dark:text-white text-gray-900 "
                  >
                    {titleModal}
                  </Dialog.Title>

                  <div className=" my-2">
                    <p className="text-center text-[13px] text-gray-500">
                      Send <b className="uppercase">{tokenFrom}</b> to <b className="uppercase">{tokenTo}</b> at address{' '}
                    </p>
                    <div className="flex">
                      <p className="tooltip mx-auto text-center text-sm text-blue-400 font-bold my-2">
                        <span className="text-center text-sm text-blue-400 font-bold my-2">
                          {fromAddress && shortenAddress(fromAddress, 20)}
                        </span>
                        <span className="tooltiptext text-[10px]">{fromAddress}</span>
                      </p>
                    </div>
                  </div>
                  <p className="text-center text-[12px] text-gray-400">
                    You will be redirected to selected wallet when clicking
                  </p>
                  {listWalletConnect.map((item, index) => {
                    return (
                      <div
                        className="cursor-pointer hover:bg-gray-200 hover:text-black  flex py-3 rounded-lg my-2 "
                        key={index}
                      >
                        <div className="mr-2 mx-10  ">
                          <Image src={item.iconWallet} />
                        </div>
                        <div>
                          <p className="my-1">{item.nameWallet}</p>
                        </div>
                        <div className="ml-auto">
                          <Image src={IconArrowRight} />
                        </div>
                      </div>
                    )
                  })}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
export default ModalSend
