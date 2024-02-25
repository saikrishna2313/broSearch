"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

const SearchOptions = () => {
 
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname=usePathname()

    const searchTerm = searchParams.get('searchTerm');
    
     const selectOption=(tab)=>{
        router.push(`/search/${tab}?searchTerm=${searchTerm}`);

    }

  return (
    <section className="flex ml-28 justify-start items-center gap-4 py-3">
    <button  onClick={()=>{
        selectOption('all')
        
    }} className={`${pathname=="/search/all"? 'text-blue-400':'text-slate-950'}`}>All</button>
    <button onClick={()=>{
        
        selectOption('image')
        
    }} className={`${pathname=="/search/image"? 'text-blue-400':'text-slate-950'}`}>Images</button>
        </section>
  )
}

export default SearchOptions