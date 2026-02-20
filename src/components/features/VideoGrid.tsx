"use client";

import React, { useEffect, useRef } from "react";
import { Card } from "@/components/ui/Card";

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

declare global {
    interface Window {
        onYouTubeIframeAPIReady: () => void;
        YT: any;
    }
}

export function VideoGrid() {
    const playersRef = useRef<any[]>([]);
    const [mounted, setMounted] = React.useState(false);

    useEffect(() => {
        setMounted(true);
        // Load YouTube IFrame API if not already present
        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
        }

        window.onYouTubeIframeAPIReady = () => {
            const currentOrigin = typeof window !== 'undefined' ? window.location.origin : '';
            videos.forEach((video, index) => {
                const player = new window.YT.Player(`youtube-player-${video.id}`, {
                    host: 'https://www.youtube.com',
                    playerVars: {
                        origin: currentOrigin,
                        enablejsapi: 1,
                    },
                    events: {
                        onStateChange: (event: any) => {
                            // YT.PlayerState.PLAYING is 1
                            if (event.data === 1) {
                                pauseOtherVideos(index);
                            }
                        }
                    }
                });
                playersRef.current[index] = player;
            });
        };

        // If API is already ready, initialize players
        if (window.YT && window.YT.Player) {
            window.onYouTubeIframeAPIReady();
        }

        return () => {
            // Cleanup: No easy way to remove the global callback, but we can clear references
            playersRef.current = [];
        };
    }, []);

    const pauseOtherVideos = (currentIndex: number) => {
        playersRef.current.forEach((player, index) => {
            if (index !== currentIndex && player && typeof player.pauseVideo === 'function') {
                player.pauseVideo();
            }
        });
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
                <Card key={video.id} className="overflow-hidden bg-black/5 dark:bg-black/40 border-0 shadow-lg">
                    <div className="aspect-video w-full relative">
                        <iframe
                            id={`youtube-player-${video.id}`}
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${video.videoId}?enablejsapi=1${mounted ? `&origin=${window.location.origin}` : ''}&playsinline=1&rel=0`}
                            title={video.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; unload"
                            allowFullScreen
                            className="absolute inset-0"
                        />
                    </div>
                    <div className="p-4 bg-white dark:bg-gray-900">
                        <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 line-clamp-2">
                            {video.title}
                        </h3>
                    </div>
                </Card>
            ))}
        </div>
    );
}
