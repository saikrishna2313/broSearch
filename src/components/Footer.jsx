import Link from "next/link"
import Country from "./Country"
const Footer = () => {
  return (
    <footer className="w-full max-sm:flex max-sm:flex-col  relative flex justify-between text-slate-950 items-center max-sm:px-5 px-20 py-2">
      
<Country/>
<div>
                <p>&copy; 2024 broSearch. All rights reserved.</p>
            </div>
</footer>
  )
}

export default Footer