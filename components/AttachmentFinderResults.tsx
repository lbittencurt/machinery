import Image from 'next/image';


import useAttachmentFinderStore from "@/store/useAttachmentFinderStore";
import { FiTool } from 'react-icons/fi';

interface AttachmentFinderResultsProps {
}

const AttachmentFinderResults: React.FC<AttachmentFinderResultsProps> = (
) => {
  const { attachments } = useAttachmentFinderStore()

  return (
    <div className="mb-4">
      <h1
        className="
          font-medium
          text-2xl
        "
      >3 Wood Splitters match your equipment</h1>
      <div className="
        flex
        my-10
        gap-x-6
        mx-auto
        justify-center
      ">
        {
          attachments?.map(attachment => (
            <div
              key={attachment.name}
              className="
                border
                border-slate-400
                rounded-2xl
                px-8
                py-4
                flex
                flex-col
                items-center
                gap-y-4
                flex-1
                md:flex-none
              "
            >
              <div className="flex flex-col items-center pt-2">
                <FiTool size={34} />
                <h2 className="font-bold mt-3">{attachment.name}</h2>
                <p>{attachment.type}</p>
                <p className="font-bold pt-2">${attachment.value}</p>
              </div>
              <div className="flex gap-x-3 justify-center">
                <button
                  className="
                  bg-[#FFB432]
                    px-2
                    py-1
                    rounded-[4px]
                    font-medium
                    text-sm
                  "
                >Buy Now</button>
                <a className="
                  mt-[2px]
                  underline
                text-gray-500
                  underline-offset-4
                  text-sm
                ">Details</a>
              </div>
            </div>
          ))
        }
      </div>
      <div className="flex flex-col justify-center items-center">
        <button
          className="
            py-3
            min-w-[120px]
            rounded-[4px]
            font-medium
            disabled:cursor-not-allowed
            disabled:opacity-40
            disabled:bg-slate-300
            bg-[#FFB432]
            w-60
            mb-3
          "
        >Compare models</button>
        <a className="underline underline-offset-4 text-gray-600">Not sure? Talk to an expert!</a>
      </div>
    </div>
  );
}

export default AttachmentFinderResults;