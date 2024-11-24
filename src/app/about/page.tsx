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
        <div className="mt-24">
            <h1>About</h1>
            <p>This is about page</p>
        </div>
    );
}