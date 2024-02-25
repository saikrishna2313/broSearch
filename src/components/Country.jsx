'use client';

import { useEffect, useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
export default function Country() {
  const [country, setCountry] = useState('United States');

  useEffect(() => {
    const getCountry = async () => {
      const response = await fetch(
        `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => data.country);
      if (!response) return;
      setCountry(response);
    };
    getCountry();
  }, []);

  return <div className='flex justify-center items-center gap-2'>
    
    <FaLocationDot className='h-6 w-6 mr-1 text-slate-950'/> <p>{country}</p>
    </div>;
}