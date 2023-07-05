"use client";

import { useEffect, useState } from "react";

import AttachmentFinderModal from "@/components/AttachmentFinderModal";

function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <AttachmentFinderModal />
    </>
  );
}

export default ModalProvider;