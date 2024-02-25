import Link from "next/link"
import Image from "next/image"
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { CgMail } from "react-icons/cg";
const Navbar = () => {
  return (
    <nav className="w-full flex justify-between  items-center max-sm:px-5 overflow-hidden px-20  py-5">

     <div className="flex gap-1 justify-center items-center">
     <MdOutlineScreenSearchDesktop className="h-8 w-8 max-sm:h-6 max-sm:w-6"/>
     <Link  href="/" className="text-3xl max-sm:text-xl font-semibold text-black">broSearch.</Link>
     
     </div>

<div className="text-sm flex justify-center items-center gap-1 font-semibold ">
    <Link className="uppercase hover:text-blue-400" href="https://gmail.com">Gmail</Link>
    <CgMail className="h-8 w-8 max-sm:h-6 max-sm:w-6"/>
</div>
    </nav>
  )
}

export default Navbar