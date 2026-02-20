import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full py-6 mt-12 border-t border-black/5 dark:border-white/10 bg-saffron-50/50 dark:bg-black/20 backdrop-blur-sm">
            <div className="container mx-auto px-4 flex flex-col items-center mb-4">
                <div className="relative group">
                    <div className="relative w-12 h-12">
                        <Image
                            src="/logo.webp"
                            alt="Jai Samadhi"
                            fill
                            className="object-contain filter drop-shadow-[0_0_8px_rgba(249,115,22,0.4)] opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                            sizes="48px"
                        />
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <p>&copy; {new Date().getFullYear()} Jai Samadhi. All rights reserved.</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <div className="flex items-center gap-3 mr-4 pr-4 border-r border-black/10 dark:border-white/10">
                        <a
                            href="https://www.facebook.com/share/1D5wG4LtLD/?mibextid=wwXIfr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-600 transition-colors"
                            title="Facebook"
                        >
                            <Facebook size={18} />
                        </a>
                        <a
                            href="https://www.instagram.com/jai_samadhi_official"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-pink-600 transition-colors"
                            title="Instagram"
                        >
                            <Instagram size={18} />
                        </a>
                        <a
                            href="https://whatsapp.com/channel/0029Van5CHH3wtazrGneuL2r"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-green-600 transition-colors"
                            title="WhatsApp Channel"
                        >
                            <MessageCircle size={18} />
                        </a>
                    </div>
                    <Link href="/about" className="hover:text-saffron-600 transition-colors">
                        About Us
                    </Link>
                    <Link href="/privacy" className="hover:text-saffron-600 transition-colors">
                        Privacy
                    </Link>
                    <Link href="/terms" className="hover:text-saffron-600 transition-colors">
                        Terms
                    </Link>
                </div>
            </div>
        </footer>
    );
}
