"use client"

import React, { useState, useRef, useEffect } from 'react';

interface AudioPlayerProps {
    src: string;
    onEnded: () => void;
    className?: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, onEnded, className = "" }) => {
    const [duration, setDuration] = useState<number>(0);
    const audioRef = useRef<HTMLAudioElement>(null);
    
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.addEventListener('loadedmetadata', () => {
                setDuration(audioRef.current?.duration || 0);
            });
        }
    }, [src]);

    const getControlWidth = () => {
        const baseWidth = 300;
        const widthPerMinute = 50;
        const minutes = duration / 60;
        const calculatedWidth = baseWidth + (minutes * widthPerMinute);
        
        return Math.min(calculatedWidth, window.innerWidth);
    };

    return (
        <div className="w-full flex justify-center">
            <audio 
                ref={audioRef}
                controls 
                className={`${className} border border-green-900 rounded-full`}
                src={src}
                onEnded={onEnded}
                style={{
                    width: `${getControlWidth()}px`,
                    maxWidth: '100%'
                }}
            >
                <source type="audio/mpeg"/>
            </audio>
        </div>
    );
};