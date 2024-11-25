"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SurahDetail } from '@/services/SurahService';
import { SurahHeader } from './SurahHeader';
import { AyahCard } from './AyahCard';
import { NavigationButtons } from './NavigationButtons';
import Loading from '../Loading';

interface SurahDetailViewProps {
    surah: SurahDetail;
}

export const SurahDetailView: React.FC<SurahDetailViewProps> = ({ surah }) => {
    const [selectedQori, setSelectedQori] = useState("01");
    const [, setCurrentlyPlaying] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        setIsLoading(false);
    }, 2000);

    if(isLoading) {
        return (
            <Loading />
        )
    }

    const handleAudioEnd = () => {
        setCurrentlyPlaying(null);
    };

    const currentNomor = parseInt(surah.nomor);
    const previousNomor = currentNomor > 1 ? currentNomor - 1 : null;
    const nextNomor = currentNomor < 114 ? currentNomor + 1 : null;

    return (
        <>
            <div className="container mx-auto mt-24 px-4 py-4">
                <Link href="/">
                    <Button className="mb-10 rounded-xl">Kembali ke menu utama</Button>
                </Link>
                <div className="bg-transparent">
                    <SurahHeader
                        surah={surah}
                        selectedQori={selectedQori}
                        onQoriChange={setSelectedQori}
                        onAudioEnd={handleAudioEnd}
                    />
                </div>
            </div>

            <div className="mt-6 container mb-9 px-11">
                <h3 className="text-2xl font-semibold mb-4">
                    {surah.namaLatin} ({surah.nama})
                </h3>
                <div className="space-y-6">
                    {surah.ayat.map((ayah) => (
                        <AyahCard
                            key={ayah.nomorAyat}
                            ayah={ayah}
                            selectedQori={selectedQori}
                            onAudioEnd={handleAudioEnd}
                        />
                    ))}
                </div>
            </div>

            <NavigationButtons
                previousNomor={previousNomor}
                nextNomor={nextNomor}
            />
        </>
    );
};