"use client"

import React, { useEffect } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'
import { Button } from './ui/button'

interface Surah {
    nomor: string,
    nama: string,
    namaLatin: string,
    arti: string,
    jumlahAyat: string,
}

const HomeSurah: React.FC<Surah> = () => {

    const [surah, setSurah] = React.useState<Surah[]>([]);

    const fetchData = async () => {
        try {
            const response = await fetch('https://equran.id/api/v2/surat');
            const data = await response.json();
            setSurah(data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-5">
                {surah.slice(0, 9).map((item) => (
                    <div key={item.nomor}>
                        <Link href={`/surah/${item.nomor}`}>
                            <Card className="bg-green-300 dark:bg-green-900 text-green-900 dark:text-green-300">
                                <CardHeader>
                                    <div className="flex justify-between items-center mb-5">
                                        <CardTitle className="text-xl md:text-2xl bg-green-50 shadow-md rounded-xl p-3 dark:text-green-900">{item.nomor}</CardTitle>
                                        <CardTitle className="text-2xl md:text-3xl">{item.nama}</CardTitle>
                                    </div>
                                    <CardDescription className="text-black dark:text-white text-xl md:text-2xl font-bold">{item.namaLatin}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className='text-lg italic font-mono font-semibold'>{item.arti}</p>
                                </CardContent>
                                <CardFooter>
                                    <p className="font-bold">Jumlah ayat : {item.jumlahAyat}</p>
                                </CardFooter>
                            </Card>
                        </Link>
                    </div>
                ))}
            </div>
            <div className='flex items-center justify-center mb-5'>
                <Link href="/surah">
                    <Button className="rounded-xl">
                        Lihat Semua Surah
                    </Button>
                </Link>
            </div>
        </>
    )
}

export default HomeSurah
