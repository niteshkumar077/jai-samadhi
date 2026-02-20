"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { SingleAudioPlayer } from "@/components/features/SingleAudioPlayer";
import { PDFViewer } from "@/components/features/PDFViewer";
import { Music, BookOpen } from "lucide-react";

export default function NaamPage() {
    // Shared state for mutual exclusion
    const [activePlayerId, setActivePlayerId] = useState<string | null>(null);

    const handleToggle = (id: string, playing: boolean) => {
        if (playing) {
            setActivePlayerId(id);
        } else if (activePlayerId === id) {
            setActivePlayerId(null);
        }
    };

    return (
        <main className="min-h-screen flex flex-col pt-16">
            <Navbar />

            <Section className="bg-gradient-to-b from-saffron-50/50 to-transparent">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-saffron-800">Naam Simran</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Immerse yourself in the divine vibrations of the Akhand Dhuni Sahib. Listen to the sacred recordings or read the holy texts.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Listen Section */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-3 border-b border-saffron-100 pb-4">
                            <div className="p-2 bg-saffron-100 rounded-lg text-saffron-600">
                                <Music className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                                Listen to Dhuni
                            </h2>
                        </div>

                        <div className="grid gap-6">
                            <SingleAudioPlayer
                                title="Akhand Dhuni Sahib (Full Version)"
                                artist="Baba Garib Das Temple"
                                src="/akhand-dhuni-sahib.mp3"
                                isPlaying={activePlayerId === "full"}
                                onToggle={(playing) => handleToggle("full", playing)}
                            />

                            <SingleAudioPlayer
                                title="Akhand Dhuni Sahib (Short Version)"
                                artist="Baba Garib Das Temple"
                                src="/short-akhand-dhuni-sahib.mp3"
                                isPlaying={activePlayerId === "short"}
                                onToggle={(playing) => handleToggle("short", playing)}
                            />
                        </div>

                        <div className="p-6 bg-saffron-50 dark:bg-saffron-900/10 border-l-4 border-saffron-400 rounded-r-lg shadow-sm">
                            <p className="text-lg text-saffron-800 dark:text-saffron-300 font-serif italic text-center">
                                "The Naam is the bridge between the soul and the Divine, a sacred vibration that transcends time and space."
                            </p>
                        </div>
                    </div>

                    {/* Read Section */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-3 border-b border-saffron-100 pb-4">
                            <div className="p-2 bg-saffron-100 rounded-lg text-saffron-600">
                                <BookOpen className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                                Read Akhand Dhuni Sahib
                            </h2>
                        </div>
                        <PDFViewer />
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
