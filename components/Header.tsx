import Image from "next/image";

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="
      bg-white
      h-[75px]
      max-w-6xl
      mx-auto
      flex
      gap-x-3
      px-3
    ">
      <div className="
        relative
        w-[50px]
        h-full
      ">
        <Image
          src="/mp-logo-symbol-black.svg"
          fill
          alt="Machinery Partner Icon"
        />
      </div>
      <div className="
        relative
        w-[100px]
        h-full
      ">
        <Image
          src="/mp-logo.svg"
          fill
          alt="Machinery Partner Brand"
        />
      </div>
    </header>
  );
}

export default Header;