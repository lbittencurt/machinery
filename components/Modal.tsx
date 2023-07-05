import * as Dialog from '@radix-ui/react-dialog'
import { IoMdClose } from 'react-icons/io'

interface ModalProps {
  isOpen: boolean
  onChange: (open: boolean) => void
  children: React.ReactNode
}

function Modal({
  isOpen,
  onChange,
  children
}: ModalProps) {
  return (
    <Dialog.Root
      open={isOpen}
      defaultOpen={isOpen}
      onOpenChange={onChange}
    >
      <Dialog.Portal>
        <Dialog.Title />
        <Dialog.Description />
        <Dialog.Overlay
          className="
            bg-neutral-900/90
            backdrop-blur-sm
            fixed
            inset-0
          "
        />
        <Dialog.Content
          className="
            fixed
            drop-shadow-md
            border
            border-neutral-700
            top-[50%]
            left-[50%]
            max-h-full
            h-full
            md:h-auto
            md:max-h-[85vh]
            w-full
            md:w-[90vw]
            md:max-w-[800px]
            translate-x-[-50%]
            translate-y-[-50%]
            rounded-md
            bg-white
            p-[25px]
            focus:outline-none
          "
        >
          <div>
            {children}
          </div>
          <Dialog.Close asChild>
            <button
              className="
                text-neutral-400
                hover:opacity-70
                absolute
                top-[10px]
                right-[10px]
                inline-flex
                h-[30px]
                w-[30px]
                appearance-none
                items-center
                justify-center
                rounded-full
                focus:outline-none
              "
            >
              <IoMdClose />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default Modal;