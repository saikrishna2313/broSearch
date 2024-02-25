import Link from 'next/link';
import PaginationButtons from './PaginationButtons ';
import Image from 'next/image';

export default function ImageSearchResults({ results }) {
  return (
    <div className='sm:pb-24 text-slate-900 pb-40 mt-4'>
      <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4'>
        {results.items.map((result) => (
          <div className=' relative px-3 py-4 '  key={result.link}>
            <div className='group '>
            
              <Link href={result.image.contextLink}>
                <Image
                  src={result.link}
                  alt={result.title}
                  className=' group-hover:shadow-xl max-sm:w-[150px] h-[200px] w-[300px] rounded-md shadow-lg  object-cover transition-shadow duration-300'
                 width={300} height={300}
                 />
              </Link>
              <Link href={result.image.contextLink}>
                <h1 className='group-hover:underline truncate text-lg'>
                  {result.title}
                </h1>
              </Link>
              <Link href={result.image.contextLink}>
                <p className='group-hover:underline truncate text-gray-600'>
                  {result.displayLink}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className='ml-16'>
        <PaginationButtons />
      </div>
    </div>
  );
}