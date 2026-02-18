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
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 py-5">
                {filteredSurah.map((item) => (
                    <div key={item.nomor}>
                        <Link href={`/surah/${item.nomor}`}>
                            <Card className="bg-white border-2 border-green-100 hover:border-green-400 hover:shadow-xl hover:shadow-green-100 transition-all duration-300 cursor-pointer group overflow-hidden">
                                <CardHeader className="pb-2">
                                    <div className="flex justify-between items-center">
                                        <CardTitle className="text-lg font-bold bg-gradient-to-br from-green-500 to-green-600 text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                                            {item.nomor}
                                        </CardTitle>
                                        <CardTitle className="text-3xl md:text-4xl text-green-600 group-hover:text-green-500 transition-colors font-arabic">
                                            {item.nama}
                                        </CardTitle>
                                    </div>
                                    <CardDescription className="text-gray-800 text-lg md:text-xl font-semibold mt-3">
                                        {item.namaLatin}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="pb-3">
                                    <p className="text-sm text-gray-500 italic">{item.arti}</p>
                                </CardContent>
                                <CardFooter className="pt-0">
                                    <div className="flex items-center gap-1 text-green-600 font-medium">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        <p className="text-sm">{item.jumlahAyat} Ayat</p>
                                    </div>
                                </CardFooter>
                            </Card>
                        </Link>
                    </div>
                ))}
            </div>

            {/* Scroll to Top Button */}
            <Button
                onClick={scrollToTop}
                className={`fixed bottom-6 right-6 w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg shadow-green-200 transition-all duration-300 ${showScrollButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                aria-label="Scroll to Top"
            >
                <ArrowUp size={20} />
            </Button>
        </>
    );
};

export default SurahList;
