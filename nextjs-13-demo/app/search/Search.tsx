"use client"; // this will make the component client side
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
function Search() {
  const [Search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/search/${Search}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={Search}
        placeholder="Enter Keyword!"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="bg-purple-500 text-white font-bold py-2 px-4 rounded-lg"
      >
        Search!
      </button>
    </form>
  );
}
export default Search;
