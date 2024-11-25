"use client";

import Loading from "@/components/Loading";
import SearchInput from "@/components/SearchInput";
import SurahList from "@/components/SurahList";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <SearchInput onSearch={(query) => setSearchQuery(query)} />
      <SurahList searchQuery={searchQuery} />
    </div>
  );
}
