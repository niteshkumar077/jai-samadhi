"use client";

import { m } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { MessageSquareText, Sparkles } from "lucide-react";

export function ChatbotRedirect() {
    return (
        <Section className="bg-background">
            <div className="max-w-5xl mx-auto glass-card rounded-3xl p-8 md:p-12 border border-saffron-200 dark:border-saffron-900/30 shadow-xl overflow-hidden relative">
                {/* Animated Background Blob */}
                <m.div
                    className="absolute -top-24 -right-24 w-64 h-64 bg-saffron-300/30 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 5, repeat: Infinity }}
                />

                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <div className="w-full md:w-1/2 flex justify-center">
                        <m.div
                            className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center bg-gradient-to-br from-saffron-100 to-saffron-50 rounded-full shadow-inner"
                            whileHover={{ scale: 1.05 }}
                        >
                            <MessageSquareText className="w-16 h-16 md:w-24 md:h-24 text-saffron-600" />
                            <m.div
                                className="absolute top-4 right-4"
                                animate={{ rotate: [0, 15, -15, 0] }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                            >
                                <Sparkles className="w-8 h-8 text-saffron-400 fill-saffron-400" />
                            </m.div>
                        </m.div>
                    </div>

                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-saffron-700 to-saffron-500 bg-clip-text text-transparent">
                            Guidance at Your Fingertips
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                            Have questions about the temple history, rituals, or upcoming events? Our AI assistant is here to help you 24/7 with instant answers.
                        </p>
                        <Button
                            size="lg"
                            className="w-full md:w-auto bg-saffron-600 hover:bg-saffron-700 text-white shadow-lg shadow-saffron-500/20"
                            onClick={() => window.open('https://example.com/chatbot', '_blank')}
                        >
                            Start Chat Now
                        </Button>
                    </div>
                </div>
            </div>
        </Section>
    );
}
