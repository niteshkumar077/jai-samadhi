"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle, Home, AudioLines, Users, Music, Info, ChevronRight } from "lucide-react";
import { m, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/naam", label: "Naam", icon: AudioLines },
    { href: "/saints", label: "Saints", icon: Users },
    { href: "/bhajan", label: "Bhajan", icon: Music },
    { href: "/about", label: "About Us", icon: Info },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);
    const pathname = usePathname();
    const navRef = React.useRef<HTMLDivElement>(null);

    // Handle scroll effect
    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        handleScroll(); // Initial check on mount
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    React.useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Click outside to close
    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    // Handle scroll lock
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const isHome = pathname === "/";

    return (
        <>
            <header
                ref={navRef}
                className={cn(
                    "fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ease-in-out",
                    isScrolled
                        ? "bg-white/80 dark:bg-black/95 backdrop-blur-xl border-b border-saffron-100/50 dark:border-white/10 shadow-lg py-2"
                        : "bg-transparent border-transparent py-4 md:py-6"
                )}
            >
                <div className="container mx-auto px-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className={cn(
                            "group relative z-[102] transition-all duration-500",
                            isOpen ? "opacity-20 pointer-events-none md:opacity-100 md:pointer-events-auto" : "opacity-100"
                        )}
                    >
                        <div className="relative flex items-center gap-2">
                            {/* Logo Image with Glow */}
                            <div className="relative h-12 w-12 md:h-16 md:w-16 transition-transform duration-500 group-hover:scale-110">
                                <Image
                                    src="/logo.webp"
                                    alt="Jai Samadhi Logo"
                                    fill
                                    priority
                                    className={cn(
                                        "object-contain filter drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]",
                                        !isScrolled && isHome ? "brightness-0 invert opacity-90" : ""
                                    )}
                                    sizes="(max-width: 768px) 48px, 64px"
                                />
                                {/* Optional additional glow layer on hover */}
                                <div className="absolute inset-0 bg-saffron-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Text Logo - Keeping it simple but elegant next to image */}
                            <span className={cn(
                                "text-xl md:text-2xl font-bold tracking-tight transition-all duration-300",
                                !isScrolled && isHome ? "text-white" : "text-gray-900 dark:text-white"
                            )}>
                                Jai Samadhi
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="flex items-center gap-3 md:gap-10">
                        {/* Desktop Only Links */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "text-sm font-semibold transition-all duration-300 hover:text-saffron-600 relative py-1",
                                        pathname === link.href ? "text-saffron-600" : "text-gray-700 dark:text-gray-200",
                                        !isScrolled && isHome && pathname !== link.href ? "text-white/90 hover:text-white" : ""
                                    )}
                                >
                                    {link.label}
                                    {pathname === link.href && (
                                        <m.span
                                            layoutId="underline"
                                            className="absolute left-0 top-full block h-0.5 w-full bg-saffron-600"
                                        />
                                    )}
                                </Link>
                            ))}
                        </div>

                        {/* Always Visible Chat Button */}
                        <Button
                            className={cn(
                                "gap-2 transition-all duration-300 shadow-xl font-bold rounded-full px-4 md:px-6 h-10 md:h-12",
                                !isScrolled && isHome
                                    ? "bg-saffron-600 hover:bg-saffron-700 text-white border border-saffron-400/30"
                                    : "bg-saffron-600 hover:bg-saffron-700 text-white"
                            )}
                            onClick={() => window.open('https://example.com/chatbot', '_blank')}
                        >
                            <MessageCircle size={18} className="animate-pulse" />
                            <span className="hidden xs:inline">Chat</span>
                            <span className="hidden md:inline">with AI</span>
                        </Button>

                        {/* Mobile Menu Toggle */}
                        <button
                            className={cn(
                                "md:hidden p-2 rounded-full transition-all duration-300 active:scale-90",
                                !isScrolled && isHome ? "text-white" : "text-saffron-700"
                            )}
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsOpen(true);
                            }}
                            aria-label="Open Menu"
                        >
                            <Menu size={28} />
                        </button>
                    </nav>


                </div>
            </header>

            {/* Mobile Navigation Overlay - Outside Header for Stacking Integrity */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <m.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[1500] md:hidden"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Menu Panel */}
                        <m.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white dark:bg-gray-950 z-[1600] shadow-2xl md:hidden overflow-y-auto"
                        >
                            {/* Close Button Inside Panel */}
                            <button
                                className="absolute top-6 right-6 p-3 rounded-full bg-saffron-50 text-saffron-600 dark:bg-white/5 dark:text-saffron-400"
                                onClick={() => setIsOpen(false)}
                            >
                                <X size={24} />
                            </button>
                            <div className="flex flex-col h-full pt-28 px-6 pb-12">
                                <div className="space-y-3">
                                    <p className="text-xs uppercase tracking-widest text-saffron-600 font-bold mb-6 px-4 italic">Navigation</p>
                                    {navLinks.map((link) => {
                                        const Icon = link.icon;
                                        const isActive = pathname === link.href;
                                        return (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                className={cn(
                                                    "group flex items-center justify-between p-4 rounded-2xl transition-all duration-300",
                                                    isActive
                                                        ? "bg-saffron-50 dark:bg-saffron-900/20 text-saffron-700 dark:text-saffron-400"
                                                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5"
                                                )}
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className={cn(
                                                        "p-2 rounded-xl transition-colors",
                                                        isActive ? "bg-saffron-600 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-400 group-hover:text-saffron-500"
                                                    )}>
                                                        <Icon size={18} />
                                                    </div>
                                                    <span className="font-bold text-lg">{link.label}</span>
                                                </div>
                                                <ChevronRight size={16} className={cn(
                                                    "transition-transform",
                                                    isActive ? "text-saffron-600" : "text-gray-300 group-hover:translate-x-1"
                                                )} />
                                            </Link>
                                        );
                                    })}
                                </div>

                                <div className="mt-auto pt-10 border-t border-gray-100 dark:border-white/5" onClick={(e) => e.stopPropagation()}>
                                    <Button
                                        className="w-full gap-3 bg-saffron-600 hover:bg-saffron-700 text-white h-16 rounded-2xl shadow-xl font-bold transition-all active:scale-95"
                                        onClick={() => window.open('https://example.com/chatbot', '_blank')}
                                    >
                                        <div className="bg-white/20 p-2 rounded-lg">
                                            <MessageCircle size={20} />
                                        </div>
                                        <span>Chat with Divine AI</span>
                                    </Button>

                                    <p className="text-center text-[10px] text-gray-400 mt-6 tracking-widest uppercase">
                                        Jai Samadhi Official Platform
                                    </p>
                                </div>
                            </div>
                        </m.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
