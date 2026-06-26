"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLlink = ({href,children}) => {
    const pathname = usePathname();
    const isActive = href === pathname;

    
    return (
        <Link href={href} className={` ${isActive ? "border-b-2 border-b-gray-800" : ""}`}>
            {
                children
            }
        </Link>
    );
};

export default NavLlink;