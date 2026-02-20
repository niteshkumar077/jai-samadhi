import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { VideoGrid } from "@/components/features/VideoGrid";
import { Button } from "@/components/ui/Button";
import { MessageCircle } from "lucide-react";

export default function BhajanPage() {
    return (
        <main className="min-h-screen flex flex-col pt-16">
            <Navbar />

            <Section className="bg-gradient-to-b from-saffron-50/50 to-transparent">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-saffron-800">Bhajan & Kirtan</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Experience the divine through visual storytelling. Watch recorded bhajans, live events, and special discourses.
                    </p>
                </div>

                <VideoGrid />

                <div className="mt-16 max-w-3xl mx-auto text-center bg-green-50/50 dark:bg-green-900/10 p-8 md:p-12 rounded-[2rem] border border-green-100 dark:border-green-900/30">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-800 rounded-full mb-6">
                        <MessageCircle className="w-8 h-8 text-green-600 dark:text-green-300" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-3">Join Our Bhajan Community</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto">
                        Connect with the Sangat and receive the latest authentic bhajans directly on WhatsApp.
                    </p>
                    <a
                        href="https://chat.whatsapp.com/FdW4p9S5ZoPKYN5dBz5NaL"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold h-12 px-8 rounded-full transition-all shadow-lg hover:shadow-green-500/20 active:scale-95"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Join ♥️ BGD DARBAR BAJANS ♥️
                    </a>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
