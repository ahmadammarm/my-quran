"use client"

import { Ayah } from "@/services/SurahService";
import { AudioPlayer } from "./AudioPlayer";

interface AyahCardProps {
    ayah: Ayah;
    selectedQori: string;
    onAudioEnd: () => void;
}

export const AyahCard: React.FC<AyahCardProps> = ({ ayah, selectedQori, onAudioEnd }) => {
    return (
        <div className="p-4 border rounded-xl shadow-sm dark:shadow-white">
            <div className="flex justify-between items-center mb-10 mt-5">
                <h5 className="text-base font-medium pr-5 rounded-lg border-gray-100">
                    {ayah.nomorAyat}.
                </h5>
                <p className="text-2xl text-right md:text-3xl font-semibold tracking-wide">{ayah.teksArab}</p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: ayah.teksLatin }} className="italic font-bold mb-5" />
            <div className="mb-5">Artinya  : &quot;{ayah.teksIndonesia}&quot;</div>
            <AudioPlayer
                src={ayah.audio[selectedQori]}
                onEnded={onAudioEnd}
            />
        </div>
    );
};