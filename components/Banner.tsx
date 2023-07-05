"use client";

import Image from 'next/image';
import { FiCheck } from 'react-icons/fi'

import { useAttachmentFinderModal } from '@/hooks/useAttachmentFinderModal';
import Button from './Button';

const Banner = () => {

  const attachmentFinderModal = useAttachmentFinderModal()

  return (
    <section className="
      flex
      items-center
      pt-6
      flex-col-reverse
      md:flex-row
      mb-4
    ">
      <div className="
        w-full
        md:w-[60%]
      ">
        <h1 className="
          text-[2rem]
          leading-[2rem]
          md:leading-[6rem]
          md:text-[3rem]
          font-bold
          mb-[1.25rem]
        ">
          New Breakers For Sale
        </h1>
        <p className="text-gray-500">
          We have a full range of the best and most affordable excavator breakers. Perfect for processing aggregates like concrete, asphalt, gravel and more. Our wide range of equipment is designed to support everyone and every budget, from small to growing businesses. We also offer a large range of crushers, screeners, and conveyors.
        </p>
        <div className="
          flex
          items-center
          gap-x-5
          font-medium
          mt-9
        ">
          <div className="
            flex
            items-center
            gap-x-1
          ">
            <FiCheck color="#67BC63" size={24} />
            <span>Expert advice</span>
          </div>
          <div className="
            flex
            items-center
            gap-x-1
          ">
            <FiCheck color="#67BC63" size={24} />
            <span>Fast & easy financing</span>
          </div>
          <div className="
            flex
            items-center
            gap-x-1
          ">
            <FiCheck color="#67BC63" size={24} />
            <span>24/7 support</span>
          </div>
        </div>
        <div
          className="
            flex
            mt-9
            gap-x-4
            gap-y-2
            flex-col
            md:flex-row
            w-full
          "
        >
          <Button>Talk to an expert today</Button>
          <Button
            secondary
            onClick={attachmentFinderModal.onOpen}
          >Attachment Finder</Button>
        </div>
      </div>
      <div className="
        w-full
        md:w-[40%]
        mb-4
        md:mb-0
      ">
        <div className="
          flex
          md:relative
          justify-center
          items-center
        ">
          <div className="
            w-[200px]
            md:w-[400px]
          ">
            <Image
              src="/images/category-breakers.png"
              width={400}
              height={400}
              alt="Machinery Partner Brand"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;