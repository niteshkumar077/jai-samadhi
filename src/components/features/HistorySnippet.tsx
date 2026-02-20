import { Section } from "@/components/ui/Section";
import Image from "next/image";

export function HistorySnippet() {
    return (
        <Section id="history-section" className="bg-saffron-50/30 dark:bg-black/20">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-saffron-800 dark:text-saffron-500">
                    Our Sacred Heritage
                </h2>
                <div className="prose prose-lg dark:prose-invert mx-auto mb-10">
                    <p className="text-xl md:text-2xl leading-relaxed font-serif italic text-gray-700 dark:text-gray-300">
                        "Baba Garib Das Temple in Kashmore (Ghouspur) is the oldest and most prestigious Hindu worship place in the district, with a global following."
                    </p>
                    <div className="my-8 h-px w-24 bg-saffron-400 mx-auto" />
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Established approximately 200 years ago, it features an ancient sacred well used by pilgrims. While modernized, it remains a pillar of faith under the sevadari of <strong className="text-saffron-700 dark:text-saffron-400">Dada Hikmat Rai</strong>.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="aspect-square relative rounded-xl overflow-hidden shadow-lg group">
                        <Image src="/temple-legacy.webp" alt="Historical Heritage" fill sizes="(max-width: 768px) 100vw, 300px" quality={75} loading="lazy" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="aspect-square relative rounded-xl overflow-hidden shadow-lg group">
                        <Image src="/temple-02.webp" alt="Temple Architecture" fill sizes="(max-width: 768px) 100vw, 300px" quality={75} loading="lazy" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="aspect-square relative rounded-xl overflow-hidden shadow-lg group">
                        <Image src="/temple-04.webp" alt="Pilgrim Area" fill sizes="(max-width: 768px) 100vw, 300px" quality={75} loading="lazy" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                </div>
            </div>
        </Section>
    );
}
