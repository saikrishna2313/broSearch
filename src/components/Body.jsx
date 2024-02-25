'use client'
import { FaSearchengin } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import Link from "next/link";
const Body = () => {
    const [search,setSearch]=useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search.trim()) return;
        router.push(`/search/all?searchTerm=${search}`);
      };
    const router=useRouter()
    const randomSearch = async (e) => {
      
        const response = await fetch('https://random-word-api.herokuapp.com/word')
          .then((res) => res.json())
          .then((data) => data[0]);
        if (!response) return;
        router.push(`/search/all?searchTerm=${response}`);
   
      };
  return (
    <>
    <section className="h-screen">
    <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    <Navbar/>
    <section className=" h-screen flex flex-col gap-3 justify-center items-center w-full">
    
    <Image src="/searching.gif" width={400} height={400}/>
    <p>A Build by <Link href="/" className="text-blue-400 hover:underline">Sai Krishns Varma</Link></p>
    <form onClick={(e)=>{
        handleSubmit(e)
    }}  className="w-[60%] max-sm:w-[80%] text-center relative flex flex-col items-center justify-center">
     
        <input onChange={(e)=>{
            setSearch(e.target.value)
        }} className="px-5 w-[100%] text-slate-900 font-semibold py-2 text-lg  rounded shadow-lg  bg-slate-200 outline-none " type="text" placeholder="Search here for Free"/>
    <button className="absolute right-1" type="submit"><FaSearchengin className="w-8 h-8 text-slate-800 "/></button>
    </form>
    <section>
    <button onClick={()=>randomSearch()} className="px-4 mt-5 py-2 rounded text-sm captialize text-slate-200 bg-slate-900 uppercase font-semibold">Randome Search</button>
    
    </section>
<section className="px-20 max-sm:px-5 text-center text-slate-600">
<p className="max-sm:text-[13px]">Welcome to broSearch – your go-to search engine for finding images and content tailored to your queries! 🚀. With our user-friendly interface and advanced search algorithms, discovering the content you need has never been easier. Simply enter your query, hit search🚀</p>
</section>
    </section>
    </section>
    </>
  )
}

export default Body