import { Dialog } from '@headlessui/react'
import React, { useState } from 'react'
type ModalProps = {
  placeholder?: string
  className?: string
  onChange?: (event: any) => void
  handlOpen?: (event: any) => void
  value?: string
  isShow?: boolean
}
const Modal: React.FC<ModalProps> = ({ isShow, handlOpen }) => {
  let [isOpen, setIsOpen] = useState(isShow)
  console.log(!isOpen)
  return (
    <>
      <button onClick={handlOpen} type="button" className="bg-red-500 py-2.5 px-5 mr-2 mb-2 text-sm font-medium">
        Alternative
      </button>
      <Dialog
        open={isOpen}
        onClose={() => {
          setIsOpen(!isShow)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>Deactivate account</Dialog.Title>
          <Dialog.Description>This will permanently deactivate your account</Dialog.Description>

          <p>
            Are you sure you want to deactivate your account? All of your data will be permanently removed. This action
            cannot be undone.
          </p>

          <button onClick={() => setIsOpen(false)}>Deactivate</button>
          <button onClick={() => setIsOpen(false)}>Cancel</button>
        </Dialog.Panel>
      </Dialog>
    </>
  )
}
export default Modal
