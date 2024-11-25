"use client";

import Loading from "@/components/Loading";
import { useState } from "react";

export default function About() {

    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        setIsLoading(false);
    }, 2000);

    if(isLoading) {
        return (
            <Loading />
        )
    }

    return (
        <div className="flex justify-center items-center min-h-screen">
            <h1 className="font-bold text-xl text-center">
                Halaman ini masih dalam tahap pengembangan
            </h1>
        </div>
    );
}