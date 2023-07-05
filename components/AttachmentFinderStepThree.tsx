import Image from 'next/image';
import { RxChevronLeft, RxChevronRight, RxDotsHorizontal } from 'react-icons/rx'

import useAttachmentFinderStore from "@/store/useAttachmentFinderStore";

interface AttachmentFinderStepThreeProps {

}

const AttachmentFinderStepThree: React.FC<AttachmentFinderStepThreeProps> = () => {
  const { setData, stepThree } = useAttachmentFinderStore()

  return (
    <div>
      <h1
        className="
          font-medium
          text-2xl
        "
      >Attachment Finder - Step 3</h1>
      <p>What is the length of the material you want to split?</p>
      <div className="
        flex
        items-baseline
        my-10 gap-x-8
        justify-between
      ">
        <div className="
          flex
          flex-col
          items-center
        ">
          <Image
            src="/images/wood-pile.svg"
            width={64}
            height={64}
            alt="Skid steer icon"
          />
          <div className="flex flex-col items-center mb-2">
            <div className="flex">
              <RxChevronLeft />
              <RxDotsHorizontal />
              <RxChevronRight />
            </div>
            <p>6ft max</p>
          </div>
          <button className={`
              flex
              flex-col
              items-center
              justify-center
              border
              rounded-2xl
              px-10
              py-5
              ${stepThree?.length === 'Short'
                ? 'border-yellow-600 bg-yellow-50 hover:border-yellow-400'
                : 'bg-slate-50 hover:border-gray-300 border-gray-600'
              }
            `}
            onClick={() => setData({ step: 3, data: { length: 'Short' }})}
          >
            <span>Short</span>
            <span>(ex: small trunks...)</span>
          </button>
        </div>
        <div className="
          flex
          flex-col
          items-center
        ">
          <Image
            src="/images/wood-pile.svg"
            width={64}
            height={64}
            alt="Skid steer icon"
          />
          <div className="flex flex-col items-center mb-2">
            <div className="flex">
              <RxChevronLeft />
              <RxDotsHorizontal />
              <RxChevronRight />
            </div>
            <p>6 to 12 ft</p>
          </div>
          <button className={`
              flex
              flex-col
              items-center
              justify-center
              border
              rounded-2xl
              px-10
              py-5
              ${stepThree?.length === 'Medium'
                ? 'border-yellow-600 bg-yellow-50 hover:border-yellow-400'
                : 'bg-slate-50 hover:border-gray-300 border-gray-600'
              }
            `}
            onClick={() => setData({ step: 3, data: { length: 'Medium' }})}
          >
            <span>Medium</span>
            <span>(ex: small trees)</span>
          </button>
        </div>
        <div className="
          flex
          flex-col
          items-center
        ">
          <Image
            src="/images/wood-pile.svg"
            width={64}
            height={64}
            alt="Skid steer icon"
          />
          <div className="flex flex-col items-center mb-2">
            <div className="flex">
              <RxChevronLeft />
              <RxDotsHorizontal />
              <RxChevronRight />
            </div>
            <p>12ft and more</p>
          </div>
          <button className={`
              flex
              flex-col
              items-center
              justify-center
              border
              rounded-2xl
              px-10
              py-5
              ${stepThree?.length === 'Large'
                ? 'border-yellow-600 bg-yellow-50 hover:border-yellow-400'
                : 'bg-slate-50 hover:border-gray-300 border-gray-600'
              }
            `}
            onClick={() => setData({ step: 3, data: { length: 'Large' }})}
          >
            <span>Large</span>
            <span>(ex: large trees)</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AttachmentFinderStepThree;