import { create } from 'zustand'

interface AttachmentFinderModalStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const useAttachmentFinderModal = create<AttachmentFinderModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))