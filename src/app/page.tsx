"use client";

import Loading from "@/components/Loading";
import SearchInput from "@/components/SearchInput";
import SourceButton from "@/components/SourceButton";
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
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        <div className="text-center pt-28 pb-6 px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                <span className="text-green-600">Al-Qur&#39;an</span> Al-Karim
            </h1>
            <p className="mt-3 text-gray-600 text-base md:text-lg max-w-md mx-auto">
                Mari Membaca Al-Qur&#39;an beserta terjemahannya
            </p>
        </div>
        <SourceButton />
      <SearchInput onSearch={(query) => setSearchQuery(query)} />
      <SurahList searchQuery={searchQuery} />
    </div>
  );
}
