"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { MapEmbed } from "@/components/features/MapEmbed";
import { Instagram, Mail, Phone, Send, Facebook, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function AboutPage() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Construct mailto link
        const subject = encodeURIComponent(`Message from ${formData.name} - Jai Samadhi Website`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Message:\n${formData.message}`
        );

        // Trigger email client
        window.location.href = `mailto:jsofficial.bgd@gmail.com?subject=${subject}&body=${body}`;

        // Success state
        alert("Your email client will now open. Please send the email to complete your message.");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <main className="min-h-screen flex flex-col pt-16">
            <Navbar />

            {/* Hero / History Section */}
            <Section className="bg-saffron-50 dark:bg-black/20">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-saffron-800">Our Story</h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-serif italic">
                        &quot;Baba Garib Das Temple in Kashmore (Ghouspur) is the oldest and most prestigious Hindu worship place in the district, with a global following.&quot;
                    </p>
                    <div className="text-left bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-saffron-100 dark:border-saffron-900/50 mt-8">
                        <p className="mb-4 text-gray-600 dark:text-gray-400">
                            Established approximately 200 years ago, this sacred sanctuary has stood as a beacon of hope and faith through centuries. It features an ancient sacred well whose waters are believed to have healing properties for pilgrims.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                            While the temple has been modernized to accommodate the growing number of devotees, it remains a pillar of faith under the devoted sevadari of <strong>Dada Hikmat Rai</strong>, continuing the legacy of service and spirituality.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Location & Contact Section */}
            <Section>
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info & Map */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Visit Us</h2>
                            <MapEmbed />
                        </div>

                        <div className="bg-saffron-50/50 dark:bg-white/5 p-6 rounded-xl border border-saffron-100">
                            <h3 className="text-xl font-semibold mb-4 text-saffron-700">Connect With Us</h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-gray-600">
                                    <Mail className="w-5 h-5 text-saffron-500" />
                                    <span>jsofficial.bgd@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-600">
                                    <Phone className="w-5 h-5 text-saffron-500" />
                                    <span>+92 308 7678391</span>
                                </div>
                            </div>

                            <div className="space-y-4 mt-6">
                                <a
                                    href="https://www.facebook.com/share/1D5wG4LtLD/?mibextid=wwXIfr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-3 p-3 rounded-lg border border-blue-100 bg-blue-50/30 hover:bg-blue-50 transition-colors group"
                                >
                                    <div className="bg-blue-600 text-white p-2 rounded-lg">
                                        <Facebook className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-800 text-sm">Official Facebook Page (Verified)</p>
                                        <p className="text-xs text-gray-500">Pooj Baba Garibdas Mandirs Pakistan</p>
                                    </div>
                                </a>

                                <a
                                    href="https://www.instagram.com/jai_samadhi_official"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-3 p-3 rounded-lg border border-pink-100 bg-pink-50/30 hover:bg-pink-50 transition-colors group"
                                >
                                    <div className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white p-2 rounded-lg">
                                        <Instagram className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-800 text-sm">Official Instagram Account (Verified)</p>
                                        <p className="text-xs text-gray-500">@jai_samadhi_official</p>
                                    </div>
                                </a>

                                <a
                                    href="https://whatsapp.com/channel/0029Van5CHH3wtazrGneuL2r"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-3 p-3 rounded-lg border border-green-100 bg-green-50/30 hover:bg-green-50 transition-colors group"
                                >
                                    <div className="bg-green-600 text-white p-2 rounded-lg">
                                        <MessageCircle className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-800 text-sm">Official WhatsApp Channel</p>
                                        <p className="text-xs text-gray-500">Jai Samadhi Sahib Official Update</p>
                                    </div>
                                </a>

                                <a
                                    href="https://chat.whatsapp.com/FdW4p9S5ZoPKYN5dBz5NaL"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-3 p-3 rounded-lg border border-green-100 bg-green-50/30 hover:bg-green-50 transition-colors group"
                                >
                                    <div className="bg-green-500 text-white p-2 rounded-lg">
                                        <MessageCircle className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-800 text-sm">Official Bhajan Community</p>
                                        <p className="text-xs text-gray-500">♥️ BGD DARBAR BAJANS ♥️</p>
                                    </div>
                                </a>

                                <div className="p-3 rounded-lg border border-gray-100 bg-gray-50/50">
                                    <p className="font-bold text-gray-800 text-sm text-center">Baba Garib Das Ja Shewadari</p>
                                    <p className="text-xs text-gray-500 text-center">Contact admins for joining link</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-saffron-100 rounded-bl-full opacity-50 -mr-16 -mt-16" />

                        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 relative z-10">Send a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-saffron-500 focus:border-transparent outline-none transition-all"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-saffron-500 focus:border-transparent outline-none transition-all"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-saffron-500 focus:border-transparent outline-none transition-all resize-none"
                                    placeholder="How can we help you?"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <Button type="submit" className="w-full bg-saffron-600 hover:bg-saffron-700 text-white h-12 text-lg">
                                <Send className="w-5 h-5 mr-2" />
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
