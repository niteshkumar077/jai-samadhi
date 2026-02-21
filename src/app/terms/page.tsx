"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";

export default function TermsPage() {
    return (
        <main className="min-h-screen flex flex-col pt-16">
            <Navbar />

            <Section className="bg-saffron-50/50 dark:bg-black/20">
                <div className="max-w-3xl mx-auto space-y-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-saffron-800 mb-4">Terms of Use</h1>
                        <p className="text-gray-500">Last Updated: February 20, 2026</p>
                    </div>

                    <div className="bg-white dark:bg-gray-900 p-8 md:p-12 rounded-3xl shadow-sm border border-saffron-100 dark:border-saffron-900/50 space-y-6 text-gray-700 dark:text-gray-300">
                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">1. Acceptance of Terms</h2>
                            <p>
                                By accessing and using the Jai Samadhi website, you agree to comply with and be bound by these Terms of Use. These terms are designed to maintain the sanctity and respectful nature of our spiritual platform.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">2. Content and Sacred Media</h2>
                            <p>
                                The content provided on this website, including but not limited to the sacred &quot;Akhand Dhuni Sahib&quot; text, recorded bhajans, and spiritual successions, is for personal and spiritual use only.
                            </p>
                            <p>
                                Redistribution, commercial use, or modification of this sacred content without explicit permission from the temple administration is prohibited.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">3. User Conduct</h2>
                            <p>
                                We ask all members of the Sangat to use our platform respectfully. Any interaction with the temple, whether via contact forms or social media links, should be conducted in a manner consistent with spiritual values.
                            </p>
                        </section>

                        <section className="space-y-3 border-t border-saffron-50 pt-6">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">4. Disclaimer</h2>
                            <p>
                                Jai Samadhi provides this spiritual content for the benefit of devotees. While we strive for absolute accuracy in historical records and spiritual texts, the information is provided for spiritual guidance and community awareness.
                            </p>
                        </section>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
