"use client";

import React, { useState } from "react";
import { m } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Modal } from "@/components/ui/Modal";
import { Info } from "lucide-react";
import Image from "next/image";

interface Saint {
    id: number;
    name: string;
    title: string;
    description: string;
    image: string;
}

const saints: Saint[] = [
    {
        id: 1,
        name: "Sain Maher Das Sahib",
        title: "Patshahi I",
        description: "Born in 1796 as Bhai Sawai Ram in Jacobabad, he entered the spiritual path after seeking guidance from Baba Pirb Das Sahib. He established the sacred foundation in Shaid Mari, Balochistan, spreading divine love and self-knowledge.",
        image: "/saint-maher-das.webp"
    },
    {
        id: 2,
        name: "Sain Ram Das Sahib",
        title: "Patshahi II",
        description: "Originally known as Bhai Ramu, his unwavering devotion to Sain Maher Das earned him the spiritual light of the lineage. He carried forward the mission, expanding the message of true wisdom and spiritual awakening.",
        image: "/saint-ram-das.webp"
    },
    {
        id: 3,
        name: "Baba Garib Das Sahib",
        title: "Patshahi III",
        description: "A devoted successor who was declared as the very soul of the lineage by Sain Ram Das. He institutionalized the sacred service, guiding the sangat with compassion and ensuring the light of spirituality reached every heart.",
        image: "/saint-garib-das.webp"
    },
    {
        id: 4,
        name: "Baba Prem Das Sahib",
        title: "Patshahi IV",
        description: "Born in Sukkur as Bhai Heera Ram, he was blind from birth but possessed deep inner vision. He was famous for his humble service of filling water pots (matko) for the community, eventually chosen by Baba Garib Das as the fourth spiritual light.",
        image: "/saint-prem-das.webp"
    },
    {
        id: 5,
        name: "Baba Gurdas Ram Sahib",
        title: "Patshahi V",
        description: "Born into a spiritual family in 1931, he ascended the Gadi at the age of 16 in 1947. Over 28 years of service, he established numerous spiritual centers across India, including Haridwar and Nandurbar, leaving an eternal legacy of faith.",
        image: "/saint-gurdas-ram.webp"
    }
];

export function SaintsGrid() {
    const [selectedSaint, setSelectedSaint] = useState<Saint | null>(null);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                {saints.map((saint, index) => (
                    <m.div
                        key={saint.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={index === 3 || index === 4 ? "lg:col-span-1.5" : ""}
                    >
                        <Card
                            className="h-full cursor-pointer group hover:border-saffron-400 hover:shadow-2xl hover:shadow-saffron-500/10 overflow-hidden transition-all duration-300 relative border-2 border-transparent"
                            onClick={() => setSelectedSaint(saint)}
                        >
                            <div className="aspect-[4/5] relative overflow-hidden bg-saffron-100">
                                <Image
                                    src={saint.image}
                                    alt={saint.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    priority={index === 0}
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Interactive Overlay (Desktop - Hidden on Mobile) */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center">
                                    <div className="bg-saffron-600/90 text-white px-5 py-2.5 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl backdrop-blur-sm border border-white/20">
                                        <Info size={20} className="animate-pulse" />
                                        <span className="font-bold tracking-wide">VIEW HISTORY</span>
                                    </div>
                                </div>

                                {/* Mobile Interaction Hint (Visible only on Mobile) */}
                                <div className="absolute top-3 right-3 md:hidden z-10">
                                    <div className="bg-saffron-600/90 text-white p-2 rounded-full shadow-lg backdrop-blur-sm border border-white/20 animate-bounce">
                                        <Info size={16} />
                                    </div>
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />

                                <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                                    <h3 className="text-2xl font-bold mb-1 group-hover:text-saffron-300 transition-colors uppercase tracking-tight">{saint.name}</h3>
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm text-saffron-100 opacity-90 font-medium tracking-wide">{saint.title}</p>
                                        <span className="text-[10px] md:hidden bg-saffron-500/20 px-2 py-0.5 rounded border border-saffron-400/30 uppercase tracking-widest font-bold text-saffron-200">Tap to read</span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </m.div>
                ))}
            </div>

            <Modal
                isOpen={!!selectedSaint}
                onClose={() => setSelectedSaint(null)}
                title={selectedSaint?.name}
            >
                <div className="space-y-4">
                    <div className="aspect-[4/5] relative rounded-lg overflow-hidden bg-saffron-50 mb-4 shadow-inner">
                        {selectedSaint?.image && (
                            <Image
                                src={selectedSaint.image}
                                alt={selectedSaint.name}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                            />
                        )}
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <div className="h-0.5 w-8 bg-saffron-500 rounded-full" />
                        <h4 className="text-xl font-bold text-saffron-700 uppercase tracking-tighter">{selectedSaint?.title}</h4>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg font-serif italic">
                        {selectedSaint?.description}
                    </p>
                </div>
            </Modal>
        </>
    );
}
