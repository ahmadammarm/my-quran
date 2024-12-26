"use client";

import React, { useEffect, useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowUp } from "lucide-react";

interface Surah {
    nomor: string;
    nama: string;
    namaLatin: string;
    arti: string;
    jumlahAyat: string;
}

interface SurahListProps {
    searchQuery: string;
}

const SurahList: React.FC<SurahListProps> = ({ searchQuery }) => {
    const [surah, setSurah] = useState<Surah[]>([]);
    const [showScrollButton, setShowScrollButton] = useState(false);

    const fetchData = async () => {
        try {
            const response = await fetch("https://equran.id/api/v2/surat");
            const data = await response.json();
            setSurah(data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();

        const handleScroll = () => {
            setShowScrollButton(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const filteredSurah = surah.filter(
        (item) =>
            item.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.namaLatin.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-5">
                {filteredSurah.map((item) => (
                    <div key={item.nomor}>
                        <Link href={`/surah/${item.nomor}`}>
                            <Card className="bg-green-300 text-green-900">
                                <CardHeader>
                                    <div className="flex justify-between items-center mb-5">
                                        <CardTitle className="text-xl md:text-2xl bg-green-50 shadow-md rounded-xl p-3 dark:text-green-900">
                                            {item.nomor}
                                        </CardTitle>
                                        <CardTitle className="text-2xl md:text-3xl">{item.nama}</CardTitle>
                                    </div>
                                    <CardDescription className="text-black dark:text-white text-xl md:text-2xl font-bold">
                                        {item.namaLatin}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-lg italic font-mono font-semibold">{item.arti}</p>
                                </CardContent>
                                <CardFooter>
                                    <p className="font-bold">Jumlah ayat : {item.jumlahAyat} ayat</p>
                                </CardFooter>
                            </Card>
                        </Link>
                    </div>
                ))}
            </div>

            {/* Tombol Kembali ke Atas */}
            <Button
                onClick={scrollToTop}
                className={`fixed bottom-5 right-0 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-transform duration-300 ${showScrollButton ? "translate-x-0" : "translate-x-full"
                    }`}
                aria-label="Scroll to Top"
            >
                <ArrowUp size={24} />
            </Button>
        </>
    );
};

export default SurahList;
