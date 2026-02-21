"use client";

import { Apple, Play, Smartphone, Wifi, BookOpen, Music } from "lucide-react";
import Link from "next/link";

export default function AppRedirectPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-saffron-50 to-white dark:from-gray-900 dark:to-black text-gray-900 dark:text-white flex flex-col">
            <div className="container mx-auto px-4 py-8 flex-1 flex flex-col items-center justify-center text-center">
                {/* Logo/Brand */}
                <Link href="/" className="mb-8">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-saffron-700 to-saffron-500 bg-clip-text text-transparent">
                        Jai Samadhi Mobile
                    </h1>
                </Link>

                {/* Hero Content */}
                <div className="max-w-md w-full space-y-8">
                    <div className="relative mx-auto w-64 h-64 bg-saffron-100 rounded-full flex items-center justify-center mb-8">
                        <Smartphone className="w-32 h-32 text-saffron-600" />
                        <div className="absolute top-0 right-0 bg-saffron-600 text-white text-xs font-bold px-3 py-1 rounded-full animate-bounce shadow-lg">
                            SOON
                        </div>
                    </div>

                    <h2 className="text-4xl font-bold tracking-tight">
                        Coming Soon to Mobile
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        We are currently building the Jai Samadhi app to bring you daily darshan, audio bhajans, and sacred texts directly to your device.
                    </p>

                    {/* Future Download Indicators */}
                    <div className="space-y-4">
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border-2 border-dashed border-saffron-200 text-center">
                            <p className="text-saffron-700 font-bold text-xl mb-1">Under Development</p>
                            <p className="text-gray-500 text-sm">Follow our social media for launch updates</p>
                        </div>

                        <div className="flex gap-4 justify-center opacity-40">
                            <Apple className="w-8 h-8" />
                            <Play className="w-8 h-8" />
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-4 mt-12 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex flex-col items-center gap-2 p-4 bg-white/50 dark:bg-white/5 rounded-lg border border-saffron-100 dark:border-white/10">
                            <Wifi className="w-6 h-6 text-saffron-500" />
                            <span>Live Darshan</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-4 bg-white/50 dark:bg-white/5 rounded-lg border border-saffron-100 dark:border-white/10">
                            <Music className="w-6 h-6 text-saffron-500" />
                            <span>Audio Bhajans</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-4 bg-white/50 dark:bg-white/5 rounded-lg border border-saffron-100 dark:border-white/10">
                            <BookOpen className="w-6 h-6 text-saffron-500" />
                            <span>Sacred Texts</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-4 bg-white/50 dark:bg-white/5 rounded-lg border border-saffron-100 dark:border-white/10">
                            <Smartphone className="w-6 h-6 text-saffron-500" />
                            <span>Daily Hukam</span>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="py-6 text-center text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} Jai Samadhi. All rights reserved.</p>
                <Link href="/" className="text-saffron-600 hover:underline mt-2 inline-block">
                    Back to Website
                </Link>
            </footer>
        </main>
    );
}
