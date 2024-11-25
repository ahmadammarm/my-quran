"use client";

import React, { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface AudioPlayerProps {
  src: string;
  onEnded: () => void;
  className?: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  src,
  onEnded,
  className = "",
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      const updateTime = () => setCurrentTime(audio.currentTime);
      const setAudioDuration = () =>
        setDuration(audio.duration || 0);

      audio.addEventListener("timeupdate", updateTime);
      audio.addEventListener("loadedmetadata", setAudioDuration);

      return () => {
        audio.removeEventListener("timeupdate", updateTime);
        audio.removeEventListener("loadedmetadata", setAudioDuration);
      };
    }
  }, [src]);

  const togglePlayPause = () => {
    const audio = audioRef.current;

    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    const value = parseFloat(e.target.value);

    if (audio) {
      audio.currentTime = value;
      setCurrentTime(value);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className={`flex flex-col items-center w-full mt-10 mb-5 ${className}`}>
      <div className="flex items-center space-x-4 w-full">
        <Button
          onClick={togglePlayPause}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-600 shadow-md focus:outline-none"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </Button>

        <div className="flex items-center space-x-2 w-full">
          <span className="text-gray-600 dark:text-white text-sm ">{formatTime(currentTime)}</span>
          <Input
            type="range"
            min={0}
            max={duration}
            step="0.1"
            value={currentTime}
            onChange={handleProgressChange}
            className="w-full h-2 bg-gray-300 rounded-full appearance-none focus:outline-none focus:ring-2 focus:ring-green-500"
            style={{
              accentColor: "green",
            }}
            title="Audio progress slider"
          />
          <span className="text-gray-600 dark:text-white text-sm">{formatTime(duration)}</span>
        </div>
      </div>

      <audio
        ref={audioRef}
        src={src}
        onEnded={() => {
          setIsPlaying(false);
          onEnded();
        }}
        className="hidden"
      />
    </div>
  );
};
