
"use client"

import DoaList from "@/components/DoaList";
import SearchDoaInput from "@/components/SearchDoaInput";
import SourceDoaButton from "@/components/SourceDoaButton";
import { useState } from "react";
import Loading from "@/components/Loading";

export default function Page() {

    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        setIsLoading(false)
    }, 2000)

    if(isLoading) {
        return (
            <Loading />
        )
    }

    return (
        <div className="mt-24">
            <h1 className="text-center text-xl md:text-2xl font-bold">
                Doa Sehari-hari
            </h1>
            <p className="text-center mt-2 text-md md:text-lg">
               Mari mengawali setiap kegiatan dengan membaca doa
            </p>
            <SourceDoaButton />
            <SearchDoaInput onSearch={(query) => setSearchQuery(query)} />
            <DoaList searchQuery={searchQuery} />
        </div>
    )
}