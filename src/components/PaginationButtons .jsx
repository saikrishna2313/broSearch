'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

export default function PaginationButtons() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('searchTerm');
  const startIndex = +searchParams.get('start') || 1;

  return (
    <div className='w-full flex justify-between items-center max-sm:px-5 max-sm:pl-0 max-ms:pr-0 pl-5 pr-10 py-4'>
      {startIndex >= 10 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}
        >
          <div className='flex flex-col justify-center items-center '>
            
            <p className='px-4 py-1   text-lg bg-blue-500 uppercase text-white rounded font-semibold'>Back</p>
          </div>
        </Link>
      )}
      {startIndex <= 90 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}
        >
          <div className='flex flex-col justify-center items-center '>
            
            <p className='px-4 py-1 text-lg 
 bg-blue-500 uppercase text-white rounded font-semibold'>Next</p>
          </div>
        </Link>
      )}
    </div>
  );
}
