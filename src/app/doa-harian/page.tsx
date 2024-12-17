
"use client"

import DoaList from "@/components/DoaList";
import SearchDoaInput from "@/components/SearchDoaInput";
import SourceDoaButton from "@/components/SourceDoaButton";
import { useState } from "react";

export default function Page() {

    const [searchQuery, setSearchQuery] = useState("")

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