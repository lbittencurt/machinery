import Image from 'next/image';

import useAttachmentFinderStore from "@/store/useAttachmentFinderStore";

interface AttachmentFinderStepOneProps {
}

const AttachmentFinderStepOne: React.FC<AttachmentFinderStepOneProps> = (
) => {
  const { setData, stepOne } = useAttachmentFinderStore()

  return (
    <div>
      <h1
        className="
          font-medium
          text-2xl
        "
      >Attachment Finder - Step 1</h1>
      <p>What is the weight category of the skid steer?</p>
      <div className="
        flex
        items-end
        my-10 gap-x-8
        justify-center
        md:justify-base
        flex-col
        md:flex-row
        gap-y-4
        md:gap-y-0
      ">
        <div className="
          flex
          flex-col
          items-center
          w-full
        ">
          <div className="w-0 md:w-full flex justify-center">
            <Image
              src="/images/skid-steer.svg"
              width={64}
              height={64}
              alt="Skid steer icon"
            />
          </div>
          <button className={`
              w-full
              md:w-50
              flex
              flex-col
              items-center
              justify-center
              border
              rounded-2xl
              px-5
              py-5
              ${stepOne?.weight === 'Mini'
                ? 'border-yellow-600 bg-yellow-50 hover:border-yellow-400'
                : 'bg-slate-50 hover:border-gray-300 border-gray-600'
              }
            `}
            onClick={() => setData({ step: 1, data: { weight: 'Mini' }})}
          >
            <span>Mini - Standon</span>
            <span>(less than x lbs)</span>
          </button>
        </div>
        <div className="
          flex
          flex-col
          items-center
          w-full
        ">
          <div className="w-0 md:w-full flex justify-center">
            <Image
              src="/images/skid-steer.svg"
              width={100}
              height={100}
              alt="Skid steer icon"
            />
          </div>
          <button className={`
              w-full
              md:w-50
              flex
              flex-col
              items-center
              justify-center
              border
              rounded-2xl
              px-5
              py-5
              ${stepOne?.weight === 'Medium'
                ? 'border-yellow-600 bg-yellow-50 hover:border-yellow-400'
                : 'bg-slate-50 hover:border-gray-300 border-gray-600'
              }
            `}
            onClick={() => setData({ step: 1, data: { weight: 'Medium' }})}
          >
            <span>Medium</span>
            <span>(between x lbs and y lbs)</span>
          </button>
        </div>
        <div className="
          flex
          flex-col
          items-center
          justify-center
          w-full
        ">
          <div className="w-0 md:w-full flex justify-center">
            <Image
              src="/images/skid-steer.svg"
              width={130}
              height={130}
              alt="Skid steer icon"
            />
          </div>
          <button className={`
              w-full
              md:w-50
              flex
              flex-col
              items-center
              justify-center
              border
              rounded-2xl
              px-5
              py-5
              ${stepOne?.weight === 'Large'
                ? 'border-yellow-600 bg-yellow-50 hover:border-yellow-400'
                : 'bg-slate-50 hover:border-gray-300 border-gray-600'
              }
            `}
            onClick={() => setData({ step: 1, data: { weight: 'Large' }})}
          >
            <span>Large</span>
            <span>(between x lbs and y lbs)</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AttachmentFinderStepOne;