"use client";

import HaditsList from "@/components/HaditsList";
import Loading from "@/components/Loading";
import SearchHaditsInput from "@/components/SearchHaditsInput";
import { useState } from "react";

export default function About() {

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
        <div className="px-5">
            <SearchHaditsInput onSearch={(query) => setSearchQuery(query)} />
            <HaditsList
                searchQuery={searchQuery}
             />
        </div>
    );
}