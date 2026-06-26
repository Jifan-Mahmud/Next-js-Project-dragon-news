import Image from "next/image";
import userAvatar from "@/assets/user.png";
import Link from "next/link";
import NavLink from "./NavLlink";

const Navbar = () => {
  return (
    <div className="mx-auto justify-between flex container mt-5">
        <div></div>
      <ul className="flex justify-between items-center gap-4 text-gray-700">
        <li>
          <NavLink href={'/'}>Home </NavLink>
        </li>
        <li>
          <NavLink href={'/about-us'}>About </NavLink>
        </li>
        <li>
          <NavLink href={'/career'}> Career </NavLink>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        <Image src={userAvatar} alt="userAvatar" height={30} width={30}/>
        <button className="btn btn-active">Log In </button>
      </div>
    </div>
  );
};

export default Navbar;
