import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import Image from 'next/image'
import icon_send from '../../assets/icons/send.svg'
function SendButton() {
  let [isOpen, setIsOpen] = useState(true)

  return (
    <div>
      <div className="flex flex-col items-center justify-between h-full">
        <Image src={icon_send} width="24px" height="24px" />
        <p>Send</p>
      </div>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
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
    </div>
  )
}
