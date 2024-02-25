'use client'
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSearchengin } from "react-icons/fa6";
import { GiCancel } from "react-icons/gi";
import SearchOptions from "./SearchOptions";
const SearchHeader = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const searchTerm = searchParams.get('searchTerm');
    const [term, setTerm] = useState(searchTerm || '');

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!term.trim()) return;
      router.push(`/search/all?searchTerm=${term}`);
      
    };
  
  return (
<>
<section className='w-full text-slate-900 flex justify-center gap-6 items-center max-sm:px-5  px-20 py-3 '>
<div class="absolute top-0 z-[-2] h-full w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
<Link  href="/" className="text-xl font-semibold text-black">broSearch.</Link>

<form onSubmit={(e)=>handleSubmit(e)} className="relative   w-[80%]">
<input value={term} onChange={(e)=>setTerm(e.target.value)} type='text' className='px-3 rounded right-0 py-2 outline-none  text-slate-900 bg-slate-50 shadow-xl w-[100%]' placeholder='Search Anything'/>
{
  !term=="" &&<button onClick={()=>setTerm('')} className="absolute top-2 right-12"><GiCancel className="h-6 w-6 mx-2 text-slate-900"/></button>
}
<button  type="submit" className="absolute top-2 right-2"><FaSearchengin className="h-6 w-6 mx-2 text-slate-900"/></button>
</form>


    </section>
    
    <SearchOptions/>
   

    </>
  )
}

export default SearchHeader