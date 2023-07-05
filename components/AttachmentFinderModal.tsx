"use client";

import { useEffect, useState } from "react";

import { useAttachmentFinderModal } from "@/hooks/useAttachmentFinderModal";
import useAttachmentFinderStore, { AttachmentFinderStore } from "@/store/useAttachmentFinderStore";
import getAttachments from "@/actions/getAttachments";
import AttachmentFinderMachineStep from "./AttachmentFinderMachineStep";
import AttachmentFinderStepOne from "./AttachmentFinderStepOne";
import AttachmentFinderStepTwo from "./AttachmentFinderStepTwo";
import AttachmentFinderStepThree from "./AttachmentFinderStepThree";
import AttachmentFinderLoading from "./AttachmentFinderLoading";
import AttachmentFinderResults from "./AttachmentFinderResults";
import Modal from "./Modal";
import Button from "./Button";

function AttachmentFinderModal() {
  const { onClose, isOpen } = useAttachmentFinderModal()
  const store = useAttachmentFinderStore()
  const [disabled, setDisabled] = useState(true)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    handleNextDisabled(store)
  }, [store])

  function onChange(open: boolean) {
    if (!open) {
      store.clear()
      onClose()
    }
  }

  function handleStep(currentStep: number) {
    switch (currentStep) {
      case 4:
        return <AttachmentFinderResults />
      case 3:
        return <AttachmentFinderStepThree />
      case 2:
        return <AttachmentFinderStepTwo />
      case 1:
        return <AttachmentFinderStepOne />
      case 0:
        return <AttachmentFinderMachineStep />
      default:
        store.clear()
        onClose()
        break
    }
  }

  async function searchAttachments() {
    setLoading(true)
    const attachments = await getAttachments()
    setLoading(false)
    store.setAttachments(attachments)
    store.next()
  }

  function handleNext() {
    if (store.stepThree?.length && store.currentStep === 3) {
      searchAttachments()
    } else {
      store.next()
    }
  }

  function handleBack() {
    store.back()
  }

  function handleNextDisabled(store: AttachmentFinderStore) {
    switch (store.currentStep) {
      case 3:
        setDisabled(!store.stepThree?.length)
        break
      case 2:
        setDisabled(!store.stepTwo?.hydraulicFlow)
        break
      case 1:
        setDisabled(!store.stepOne?.weight)
        break
      case 0:
        setDisabled(!store.machineStep?.machine)
        break
      default:
        break
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onChange={onChange}
    >
      <>
        {
          isLoading ? (
            <AttachmentFinderLoading />
          ) : (
            <>
              { handleStep(store.currentStep) }
              {
                store.currentStep <=3 && (
                  <div
                    className="
                      flex
                      justify-center
                      md:justify-between
                      items-center
                      flex-col
                      md:flex-row
                    "
                  >
                    <a className="min-w-fit">Not sure? Talk to an expert!</a>
                    <div
                      className="
                        flex
                        flex-col
                        md:flex-row
                        gap-x-2
                        gap-y-2
                        md:gap-y-0
                        mt-4
                        md:mt-0
                        w-full
                        px-8
                        md:px-0
                        md:justify-end
                      "
                    >
                      {
                        store.currentStep > 0 && (
                          <Button secondary onClick={handleBack}>Back</Button>
                        )
                      }
                      <Button onClick={handleNext} disabled={disabled}>Next</Button>
                    </div>
                  </div>
                )
              }
            </>
          )
        }
      </>
    </Modal>
  );
}

export default AttachmentFinderModal;