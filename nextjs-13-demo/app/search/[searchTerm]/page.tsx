import React from "react";
import { resourceLimits } from "worker_threads";

type pageProps = {
  params: {
    searchTerm: string;
  };
};

type SearchResults = {
  organic_results: [
    {
      position: number;
      title: string;
      link: string;
      thumbnail: string;
      snippet: string;
    }
  ];
};

const search = async (searchTerm: string) => {
  const response = await fetch(
    `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`
  );
  const data: SearchResults = await response.json();
  return data;
};

async function SearchResults({ params: { searchTerm } }: pageProps) {
  const searchResults = await search(searchTerm);

  return (
    <div>
      <p className="text-gray-500 text-sm">You Searched For " {searchTerm} "</p>

      <ol className="space-y-5 p-5">
        {searchResults.organic_results.map((result) => (
          <li key={result.position} className="list-decimal">
            <p className="font-bold">{result.title}</p>
            <p>{result.snippet}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default SearchResults;
