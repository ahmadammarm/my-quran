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
        <div className="p-4 border rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-2">
                <h5 className="text-base font-medium pr-5 rounded-lg border-gray-100">
                    {ayah.nomorAyat}
                </h5>
                <p className="text-xl text-right">{ayah.teksArab}</p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: ayah.teksLatin }} className="italic font-bold" />
            <div className="mb-2">Arti: {ayah.teksIndonesia}</div>
            <AudioPlayer
                src={ayah.audio[selectedQori]}
                onEnded={onAudioEnd}
            />
        </div>
    );
};