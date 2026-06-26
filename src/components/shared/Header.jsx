import logo from "@/assets/logo.png";
import Image from "next/image";
import { compareAsc, format } from "date-fns";

const Header = () => {
    return (
        <div className="text-center py-8">
            <Image src={logo} alt="logo"  height={300} width={300} className="mx-auto"/> 
            <p>Journalism Without Fear or Favour</p>
            <p>{format(new Date(), "EEEE,MMMM dd,yyyy")}</p>
        </div>
    );
};

export default Header;