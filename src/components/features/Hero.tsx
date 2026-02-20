"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowDown } from "lucide-react";

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image with Overlay - Optimized with next/image */}
            <m.div
                className="absolute inset-0 z-0"
                initial={{ scale: 1.02, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <Image
                    src="/hero-bg.webp"
                    alt="Jai Samadhi Background"
                    fill
                    priority
                    quality={75}
                    className="object-cover"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
            </m.div>

            {/* Content - Ultra-Fast Animations */}
            <m.div
                className="relative z-10 text-center text-white px-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
            >
                <h1 className="text-6xl md:text-9xl font-bold mb-4 tracking-tighter bg-gradient-to-b from-saffron-100 to-saffron-500 bg-clip-text text-transparent drop-shadow-lg">
                    Jai Samadhi
                </h1>
                <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto mb-8 text-saffron-50/90">
                    Experience the divine heritage of Baba Garib Das Temple
                </p>

                <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                >
                    <Button
                        size="lg"
                        className="rounded-full bg-saffron-600 hover:bg-saffron-700 text-white px-8 py-6 text-lg shadow-[0_0_20px_rgba(255,193,7,0.5)] border border-saffron-400/30"
                        onClick={() => {
                            document.getElementById('history-section')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Explore History
                    </Button>
                </m.div>
            </m.div>

            {/* Scroll Indicator */}
            <m.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <ArrowDown size={32} />
            </m.div>
        </section>
    );
}
