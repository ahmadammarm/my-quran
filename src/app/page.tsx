"use client"

import HomeSurah from "@/components/HomeSurah";
import Loading from "@/components/Loading";
import { useState } from "react";


export default function Home() {

    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        setIsLoading(false);
    }, 2000);

    if (isLoading) {
        return (
            <Loading />
        )
    }

    return (
        <div>
            <HomeSurah nomor={""} nama="" namaLatin="" arti="" jumlahAyat={""} />
        </div>
    );
}
