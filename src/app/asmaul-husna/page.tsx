"use client"

import AsmaulHusnaList from "@/components/AsmaulHusnaList";
import Loading from "@/components/Loading";
import SearchAsmaulHusnaInput from "@/components/SearchAsmaulHusnaInput";
import SourceAsmaulHusnaButton from "@/components/SourceAsmaulHusnaButton";
import { useState } from "react";

export default function Page() {

    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    setTimeout(() => {
        setIsLoading(false);
    }, 2000);

    if (isLoading) {
        return (
            <Loading />
        )
    }

    return (
        <div className="mt-24">
            <h1 className="text-center text-xl md:text-2xl font-bold">
                Asmaul Husna
            </h1>
            <p className="text-center mt-2 text-md md:text-lg">
                Mari belajar 99 Nama-nama Allah yang indah
            </p>
            <SourceAsmaulHusnaButton />
            <SearchAsmaulHusnaInput onSearch={(query) => setSearchQuery(query)} />
            <AsmaulHusnaList searchQuery={searchQuery} />
        </div>
    )
}