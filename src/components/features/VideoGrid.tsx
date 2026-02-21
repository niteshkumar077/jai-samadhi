"use client";

import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/Card";
import Image from "next/image";
import { Play } from "lucide-react";

interface Video {
    id: string;
    videoId: string;
    title: string;
}

const videos: Video[] = [
    { id: "1", videoId: "eqDhioHCCYs", title: "SHUKRANA || JAI SAMADHI ||" },
    { id: "2", videoId: "pyNa1yFhoUU", title: "JAI SAMADHI GARIBDAS JI NAGRI ZINDABAD NEW BHAJAN QAWALI | JAI SAMADHI |" },
    { id: "3", videoId: "8UKb1QMbPQo", title: "Per dhoe piyn mn ta un insaan ja holi waro melo 2k22" },
    { id: "4", videoId: "JEb1rSoqOSU", title: "Lakh thora samadhi wary ja 2k22 Holi waro melo | JAI SAMADHI |" },
    { id: "5", videoId: "sNyv8uUFbRw", title: "Tuhnji suhini samadhi sahib jadhn chumando ayn |JAI SAMADHI|" },
    { id: "6", videoId: "B863fvoRwFc", title: "Asn bachran ji tokhy parat aa sain | JAI SAMADHI |" },
];

export function VideoGrid() {
    const [playingId, setPlayingId] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    const handlePlay = (id: string) => {
        setPlayingId(id);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
                <Card key={video.id} className="overflow-hidden bg-black/5 dark:bg-black/40 border-0 shadow-lg group">
                    <div className="aspect-video w-full relative bg-gray-200 dark:bg-gray-800">
                        {playingId === video.id ? (
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1${mounted ? `&origin=${window.location.origin}` : ''}`}
                                title={video.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="absolute inset-0 border-0"
                            />
                        ) : (
                            <button
                                onClick={() => handlePlay(video.id)}
                                className="absolute inset-0 w-full h-full cursor-pointer overflow-hidden group/btn"
                                aria-label={`Play ${video.title}`}
                            >
                                <Image
                                    src={`https://i.ytimg.com/vi/${video.videoId}/sddefault.webp`}
                                    alt={video.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover/btn:bg-black/30 transition-colors duration-300">
                                    <div className="w-16 h-16 bg-saffron-600 rounded-full flex items-center justify-center text-white transform transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:bg-saffron-500 shadow-xl">
                                        <Play className="w-8 h-8 fill-current" />
                                    </div>
                                </div>
                                {/* Duration Placeholder or subtle shadow */}
                                <div className="absolute bottom-4 right-4 bg-black/80 text-white text-xs px-2 py-1 rounded">
                                    Click to watch
                                </div>
                            </button>
                        )}
                    </div>
                    <div className="p-5 bg-white dark:bg-gray-900 border-t border-saffron-100 dark:border-saffron-900/30">
                        <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100 line-clamp-2 leading-snug group-hover:text-saffron-700 dark:group-hover:text-saffron-400 transition-colors">
                            {video.title}
                        </h3>
                    </div>
                </Card>
            ))}
        </div>
    );
}
