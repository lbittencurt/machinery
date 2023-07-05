import { FiChevronRight } from 'react-icons/fi'

interface BreadcrumbProps {

}

const Breadcrumb: React.FC<BreadcrumbProps> = () => {
  return (
    <div className="
      h-[60px]
    ">
      <div className="
        flex
        items-center
        gap-x-2
        text-sm
        text-gray-500
        h-full
      ">
        <span>Home</span>
        <FiChevronRight />
        <span>Equipment</span>
        <FiChevronRight />
        <span>Breakers</span>
      </div>
      <div className="w-full h-[1px] bg-neutral-200" />
    </div>
  );
}

export default Breadcrumb;