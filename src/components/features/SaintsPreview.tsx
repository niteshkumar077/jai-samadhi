"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const saints = [
    { id: 1, name: "Sain Maher Das Sahib", image: "/saint-maher-das.webp" },
    { id: 2, name: "Sain Ram Das Sahib", image: "/saint-ram-das.webp" },
    { id: 3, name: "Baba Garib Das Sahib", image: "/saint-garib-das.webp" },
    { id: 4, name: "Baba Prem Das Sahib", image: "/saint-prem-das.webp" },
    { id: 5, name: "Baba Gurdas Ram Sahib", image: "/saint-gurdas-ram.webp" },
];

export function SaintsPreview() {
    return (
        <Section className="bg-gradient-to-b from-white to-saffron-50 dark:from-black dark:to-gray-900">
            <div className="text-center mb-12 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-saffron-800 dark:text-saffron-500">
                    The Spiritual Lineage
                </h2>
                <div className="max-w-2xl mx-auto">
                    <p className="text-xl italic font-serif text-gray-600 dark:text-gray-300">
                        "Where there is love, there is God. The path of the saints is the path of love, service, and humility."
                    </p>
                    <div className="h-1 w-20 bg-saffron-400 mx-auto mt-4 rounded-full" />
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                {saints.map((saint, index) => (
                    <Link href="/saints" key={saint.id}>
                        <m.div
                            whileHover={{ y: -5 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow bg-white dark:bg-gray-800 group">
                                <div className="aspect-[3/4] relative bg-saffron-100 dark:bg-gray-700 overflow-hidden">
                                    <Image
                                        src={saint.image}
                                        alt={saint.name}
                                        fill
                                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                                        loading="lazy"
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                                    <div className="absolute bottom-0 left-0 w-full p-4 text-center">
                                        <p className="text-white font-medium text-sm md:text-base group-hover:text-saffron-300 transition-colors">
                                            {saint.name}
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </m.div>
                    </Link>
                ))}
            </div>

            <div className="mt-12 text-center">
                <Link
                    href="/saints"
                    className="inline-flex items-center gap-2 text-saffron-700 hover:text-saffron-900 font-medium group transition-colors"
                >
                    Read Detailed History
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </Section>
    );
}
