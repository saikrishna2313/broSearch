import Link from 'next/link';
import Parser from 'html-react-parser';
import PaginationButtons from './PaginationButtons ';

export default function WebSearchResults({ results }) {
  return (
    <div className='w-full text-slate-900 px-32 max-sm:px-5'>
      <p className='text-slate-900 text-sm mb-5 mt-3'>
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results.items?.map((result) => (
        <div className='mb-8 w-full px-4 py-3 overflow-hidden shadow-md' key={result.link}>
          <div className='group flex flex-col'>
            <Link href={result.link}>{result.formattedUrl}</Link>
            <Link
              href={result.link}
              className='group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800'
            >
              {result.title}
            </Link>
          </div>
          <p className='text-slate-800'>{Parser(result?.htmlSnippet)}</p>
        </div>
      ))}
       <div className='ml-16'>
        <PaginationButtons />
      </div>
    </div>
  );
}