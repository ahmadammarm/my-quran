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
        <h1 className="text-center mt-24 text-xl md:text-2xl font-bold">
            Al-Qur&#39;an Al-Karim
        </h1>
        <p className="text-center mt-2 text-md md:text-lg">
            Mari Membaca Al-Qur&#39;an beserta terjemahannya
        </p>
      <SearchInput onSearch={(query) => setSearchQuery(query)} />
      <SurahList searchQuery={searchQuery} />
    </div>
  );
}
