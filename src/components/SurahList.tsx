"use client"

import React, { useEffect } from 'react'

interface Surah {
    nomor: string,
    nama: string,
    namaLatin: string,
    arti: string
}

const SurahList: React.FC<Surah> = () => {

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
    <div className="mt-24">
        {surah.map((item) => (
            <div key={item.nomor}>
                <p>{item.nomor}</p>
                <p>{item.nama}</p>
                <p>{item.namaLatin}</p>
                <p>{item.arti}</p>
            </div>
        ))}
    </div>
  )
}

export default SurahList
