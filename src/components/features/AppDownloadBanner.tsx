"use client";

import { Section } from "@/components/ui/Section";


export function AppDownloadBanner() {
    return (
        <Section className="bg-gradient-to-r from-saffron-600 to-saffron-800 text-white relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/5" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Jai Samadhi App</h2>
                    <p className="text-saffron-100 text-lg max-w-xl">
                        Our official mobile app is currently in development. Soon you will be able to take the divine blessings with you everywhere.
                    </p>
                </div>

                <div className="flex flex-col items-center md:items-end gap-2">
                    <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/30 text-white font-bold text-xl animate-pulse">
                        Coming Soon
                    </div>
                    <p className="text-saffron-200 text-sm italic">Stay tuned for the official launch!</p>
                </div>
            </div>
        </Section>
    );
}
