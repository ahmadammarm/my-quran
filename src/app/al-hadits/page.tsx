"use client";

import HaditsList from "@/components/HaditsList";
import Loading from "@/components/Loading";
import SearchHaditsInput from "@/components/SearchHaditsInput";
import { useState } from "react";

export default function Page() {

    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    setTimeout(() => {
        setIsLoading(false);
    }, 2000);

    if(isLoading) {
        return (
            <Loading />
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white px-5">
            <div className="text-center pt-28 pb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                    <span className="text-green-600">Al-Hadits</span>
                </h1>
                <p className="mt-3 text-gray-600 text-base md:text-lg max-w-md mx-auto">
                    Kumpulan kitab hadits dari berbagai sumber terpercaya
                </p>
            </div>
            <SearchHaditsInput onSearch={(query) => setSearchQuery(query)} />
            <HaditsList
                searchQuery={searchQuery}
             />
        </div>
    );
}