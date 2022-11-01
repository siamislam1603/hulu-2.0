import Image from "next/image";
import {
  HiOutlineBadgeCheck,
  HiOutlineCollection,
  HiOutlineHome,
  HiOutlineSearch,
  HiOutlineUser,
} from "react-icons/hi";
import { HiOutlineBolt } from "react-icons/hi2";
import HeaderItem from "./HeaderItem";
const Header = () => {
  return (
    <header className="p-5 flex flex-col items-center justify-between sm:flex-row">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem Icon={HiOutlineHome} title="Home" />
        <HeaderItem Icon={HiOutlineBolt} title="Trending" />
        <HeaderItem Icon={HiOutlineBadgeCheck} title="Verified" />
        <HeaderItem Icon={HiOutlineCollection} title="Collections" />
        <HeaderItem Icon={HiOutlineSearch} title="Search" />
        <HeaderItem Icon={HiOutlineUser} title="Account" />
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        alt=""
      />
    </header>
  );
};

export default Header;
