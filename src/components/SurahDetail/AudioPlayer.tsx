"use client"

interface AudioPlayerProps {
    src: string;
    onEnded: () => void;
    className?: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, onEnded, className = "" }) => {
    return (
        <audio
            controls
            className={`w-full bg-transparent z-0 ${className}`}
            src={src}
            onEnded={onEnded}
        >
            <source type="audio/mpeg" />
        </audio>
    );
};