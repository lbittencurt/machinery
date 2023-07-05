import Image from 'next/image';

import useAttachmentFinderStore from "@/store/useAttachmentFinderStore";
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

interface AttachmentFinderLoadingProps {
}

const AttachmentFinderLoading: React.FC<AttachmentFinderLoadingProps> = (
) => {
  return (
    <div className="
      flex
      flex-col
      items-center
      py-24
    ">
      <AiOutlineLoading3Quarters size={100} className="animate-spin opacity-20" />
      <h2
        className="
          font-bold
          text-2xl
          pt-5
          pb-3
        "
      >Loading the attachments...</h2>
      <p>We are selecting the best attachments for your equipment</p>
    </div>
  );
}

export default AttachmentFinderLoading;