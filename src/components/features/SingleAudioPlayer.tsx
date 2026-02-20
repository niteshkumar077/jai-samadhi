"use client";

import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

interface SingleAudioPlayerProps {
    title: string;
    artist: string;
    src: string;
    isPlaying: boolean;
    onToggle: (playing: boolean) => void;
}

export function SingleAudioPlayer({ title, artist, src, isPlaying, onToggle }: SingleAudioPlayerProps) {
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isMuted, setIsMuted] = useState(false);

    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play().catch(e => {
                    console.error("Playback failed", e);
                    onToggle(false);
                });
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying]);

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            const current = audioRef.current.currentTime;
            const total = audioRef.current.duration || 0;
            setCurrentTime(current);
            setDuration(total);
            if (total > 0) {
                setProgress((current / total) * 100);
            }
        }
    };

    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration);
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (audioRef.current) {
            const seekTime = (Number(e.target.value) / 100) * (audioRef.current.duration || 0);
            audioRef.current.currentTime = seekTime;
            setProgress(Number(e.target.value));
        }
    };

    const formatTime = (seconds: number) => {
        if (!seconds || isNaN(seconds)) return "0:00";
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    return (
        <Card className={cn(
            "w-full overflow-hidden transition-all duration-500 border",
            isPlaying
                ? "bg-saffron-50/50 dark:bg-saffron-900/10 border-saffron-300 shadow-lg shadow-saffron-200/20"
                : "bg-white/50 dark:bg-black/20 border-gray-100 dark:border-gray-800"
        )}>
            <div className="p-5 space-y-4">
                <div className="flex items-center justify-between">
                    <div className="space-y-1">
                        <h3 className={cn(
                            "font-bold transition-colors",
                            isPlaying ? "text-saffron-800 dark:text-saffron-400" : "text-gray-700 dark:text-gray-300"
                        )}>
                            {title}
                        </h3>
                        <p className="text-xs text-gray-400 uppercase tracking-widest">{artist}</p>
                    </div>

                    {/* Visual Status Indicator */}
                    {isPlaying && (
                        <div className="flex gap-1 items-center">
                            <span className="w-1 h-3 bg-saffron-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                            <span className="w-1 h-5 bg-saffron-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                            <span className="w-1 h-4 bg-saffron-500 rounded-full animate-bounce" />
                        </div>
                    )}
                </div>

                {/* Progress Bar */}
                <div className="space-y-1">
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={progress}
                        onChange={handleSeek}
                        className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg appearance-none cursor-pointer accent-saffron-500 focus:outline-none"
                    />
                    <div className="flex justify-between text-[10px] text-gray-400 font-mono">
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Button
                            size="icon"
                            className={cn(
                                "h-12 w-12 rounded-full transition-all duration-300",
                                isPlaying
                                    ? "bg-saffron-600 hover:bg-saffron-700 text-white shadow-md shadow-saffron-500/30 active:scale-90"
                                    : "bg-gray-100 hover:bg-gray-200 text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700"
                            )}
                            onClick={() => onToggle(!isPlaying)}
                        >
                            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                        </Button>

                        <div className="text-xs font-medium text-gray-500">
                            {isPlaying ? "Playing..." : "Paused"}
                        </div>
                    </div>

                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMuted(!isMuted)}
                        className="h-8 w-8 text-gray-400 hover:text-saffron-500"
                    >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </Button>
                </div>

                <audio
                    ref={audioRef}
                    src={src}
                    preload="none"
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onEnded={() => onToggle(false)}
                    muted={isMuted}
                />
            </div>
        </Card>
    );
}
