import useAttachmentFinderStore from "@/store/useAttachmentFinderStore";

interface AttachmentFinderStepTwoProps {

}

const AttachmentFinderStepTwo: React.FC<AttachmentFinderStepTwoProps> = () => {
  const { setData, stepTwo } = useAttachmentFinderStore()

  return (
    <div>
      <h1
        className="
          font-medium
          text-2xl
        "
      >Attachment Finder - Step 2</h1>
      <p>What is the Hydraulic Flow of your skid steer in GPM (Gallons per Minute)?</p>
      <div className="
        flex
        items-baseline
        my-10 gap-x-8
      ">
        <div className="
          flex
          flex-col
          items-center
        ">
          <button className={`
              flex
              flex-col
              items-center
              justify-center
              border
              rounded-2xl
              px-5
              py-5
              ${stepTwo?.hydraulicFlow === 'Standard'
                ? 'border-yellow-600 bg-yellow-50 hover:border-yellow-400'
                : 'bg-slate-50 hover:border-gray-300 border-gray-600'
              }
            `}
            onClick={() => setData({ step: 2, data: { hydraulicFlow: 'Standard' }})}
          >
            <span>Standard Flow</span>
            <span>(17-25 GPM)</span>
          </button>
        </div>
        <div className="
          flex
          flex-col
          items-center
        ">
          <button className={`
              flex
              flex-col
              items-center
              justify-center
              border
              rounded-2xl
              px-5
              py-5
              ${stepTwo?.hydraulicFlow === 'High'
                ? 'border-yellow-600 bg-yellow-50 hover:border-yellow-400'
                : 'bg-slate-50 hover:border-gray-300 border-gray-600'
              }
            `}
            onClick={() => setData({ step: 2, data: { hydraulicFlow: 'High' }})}
          >
            <span>High Flow</span>
            <span>(30-45 GPM)</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AttachmentFinderStepTwo;