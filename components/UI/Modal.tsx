import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/solid'
import React, { Fragment } from 'react'
type ModalProps = {
  titleModal?: string
  className?: string
  handleClose?: (event: any) => void
  handleOpen?: (event: any) => void
  valueModal?: string
  isShow?: boolean
}
const Modal: React.FC<ModalProps> = ({ isShow, handleOpen, handleClose, titleModal, valueModal }) => {
  //   let [isOpen, setIsOpen] = useState(isShow)
  //   console.log(isOpen)
  return (
    <>
      <Transition appear show={isShow} as={Fragment}>
        <Dialog as="div" className="relative z-10 " onClose={() => {}}>
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
                <Dialog.Panel className="w-full max-w-xs transform overflow-hidden rounded-2xl bg-white dark:bg-gray-900 p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex">
                    <button className="ml-auto" onClick={handleClose}>
                      <XIcon className="h-5 w-5 text-gray-500" />
                    </button>
                  </div>
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900 dark:text-white ">
                    {titleModal}
                  </Dialog.Title>

                  <div className="mt-2">
                    <p className="text-sm text-gray-500 dark:text-white ">{valueModal}</p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
export default Modal
