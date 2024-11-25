"use client";

import { useState } from 'react';
import SurahList from '../../components/SurahList';
import Loading from '@/components/Loading';



export default function Surah() {

    const [isLoading, setIsloading] = useState(true);

    setTimeout(() => {
        setIsloading(false);
    }, 2000);

    if(isLoading) {
        return (
            <Loading />
        )
    }

    return (
        <div className= "mt-16 px-4">
            
           {/* <SurahList nomor={''} nama={''} namaLatin={''} arti={''} jumlahAyat={''} /> */}
        </div>
    )
}