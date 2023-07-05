import useAttachmentFinderStore from "@/store/useAttachmentFinderStore";

interface AttachmentFinderMachineStepProps {
}

const AttachmentFinderMachineStep: React.FC<AttachmentFinderMachineStepProps> = (
) => {
  const { setData, machineStep } = useAttachmentFinderStore()

  return (
    <div>
      <h1
        className="
          font-medium
          text-2xl
        "
      >Attachment Finder - Step 1</h1>
      <p>What type of machine this attachment will be installed on?</p>
      <div
        className="
          flex
          items-center
          my-10
          gap-x-8
          flex-col
          md:flex-row
          gap-y-4
          md:gap-y-0
        "
      >
        <button className={
          `
          w-full
          md:w-44
          border
          font-medium
          text-lg
          rounded-3xl
          px-10
          py-14
          hover:opacity-70
          transition
          ${machineStep?.machine === 'Excavator'
            ? 'border-yellow-600 bg-yellow-50 hover:border-yellow-400'
            : 'bg-slate-50 hover:border-gray-300 border-gray-600'
          }
          `
        }
        onClick={() => setData({ step: 0, data: { machine: 'Excavator' }})}
        >
          Excavator
        </button>
        <button className={
          `
          w-full
          md:w-44
          border
          font-medium
          text-lg
          rounded-3xl
          px-10
          py-14
          hover:opacity-70
          transition
          ${machineStep?.machine === 'Skid Steer'
            ? 'border-yellow-600 bg-yellow-50 hover:border-yellow-400'
            : 'bg-slate-50 hover:border-gray-300 border-gray-600'
          }
          `
        }
        onClick={() => setData({ step: 0, data: { machine: 'Skid Steer' }})}
        >
          Skid Steer
        </button>
      </div>
    </div>
  );
}

export default AttachmentFinderMachineStep;