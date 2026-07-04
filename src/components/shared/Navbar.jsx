"use client";

import Image from "next/image";
import userAvatar from "@/assets/user.png";
import Link from "next/link";
import NavLink from "./NavLlink";
import { authClient } from "@/lib/auth-client"; 

const Navbar = () => {
  

const { data: session,isPending } = authClient.useSession()
const user = session?.user;
console.log(user);

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
      {isPending ? <span className="loading loading-dots loading-xl"></span> :user ?
      <div className="flex items-center gap-4">
        <h2 className="font-semibold">{user?.name}</h2>
        <Image src={user?.image || userAvatar} alt="userAvatar" height={30} width={30}/>
        <button className="btn btn-active"  onClick={async()=>await authClient.signOut()}>
          <Link href={'/login'}>
          Log Out
          </Link>
          </button>
      </div> :
      <div className="flex items-center gap-4">
        <Image src={userAvatar} alt="userAvatar" height={30} width={30}/>
        <button className="btn btn-active">
          <Link href={'/login'}>
          Log In
          </Link>
          </button>
          
      </div>
      }
    </div>
  );
};

export default Navbar;
