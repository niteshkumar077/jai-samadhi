"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen flex flex-col pt-16">
            <Navbar />

            <Section className="bg-saffron-50/50 dark:bg-black/20">
                <div className="max-w-3xl mx-auto space-y-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-saffron-800 mb-4">Privacy Policy</h1>
                        <p className="text-gray-500">Last Updated: February 20, 2026</p>
                    </div>

                    <div className="bg-white dark:bg-gray-900 p-8 md:p-12 rounded-3xl shadow-sm border border-saffron-100 dark:border-saffron-900/50 space-y-6 text-gray-700 dark:text-gray-300">
                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">1. Introduction</h2>
                            <p>
                                Welcome to Jai Samadhi. We respect your privacy and are committed to protecting any information you share with us through our website. This policy explains how we handle data when you visit our site or contact us.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">2. Information Collection</h2>
                            <p>
                                We do not require users to create accounts or provide personal data to browse the spiritual content, watch bhajans, or read sacred texts.
                            </p>
                            <p>
                                When you use our "Contact Us" form, we collect your name and email address solely to respond to your inquiries. This information is not shared with third parties or used for marketing purposes.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">3. Third-Party Services</h2>
                            <p>
                                Our website uses YouTube to host bhajan videos and Google Maps to show the location of Baba Garibdas Mandir. These services may collect information according to their own privacy policies when you interact with their embedded content.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">4. Cookies</h2>
                            <p>
                                We use minimal essential cookies to ensure the website functions correctly (such as maintaining your theme preference or ensuring spiritual media playback works smoothly).
                            </p>
                        </section>

                        <section className="space-y-3 border-t border-saffron-50 pt-6">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">5. Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us at:
                                <br />
                                <strong>jsofficial.bgd@gmail.com</strong>
                            </p>
                        </section>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
