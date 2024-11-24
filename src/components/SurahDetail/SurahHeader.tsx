"use client"

import { SurahDetail } from "@/services/SurahService";
import { QoriSelector } from "./QoriSelector";
import { AudioPlayer } from "./AudioPlayer";

interface SurahHeaderProps {
    surah: SurahDetail;
    selectedQori: string;
    onQoriChange: (value: string) => void;
    onAudioEnd: () => void;
}

export const SurahHeader: React.FC<SurahHeaderProps> = ({
    surah,
    selectedQori,
    onQoriChange,
    onAudioEnd
}) => {
    return (
        <div className="justify-text mb-20">
            <h1 className="text-2xl font-bold">
                {surah.namaLatin} ({surah.nama})
            </h1>
            <p className="italic mb-4">Arti: {surah.arti}</p>
            <div
                dangerouslySetInnerHTML={{ __html: surah.deskripsi }}
                className="mb-5"
            />

            <div className="space-y-4">
                <div className="flex items-center space-x-4">
                    <p className="font-bold">
                        Pilih Qori:
                    </p>
                    <QoriSelector
                        selectedQori={selectedQori}
                        onQoriChange={onQoriChange}
                    />
                </div>

                <div>
                    <AudioPlayer
                        src={surah.audioFull[selectedQori]}
                        onEnded={onAudioEnd}
                    />
                </div>
            </div>
        </div>
    );
};