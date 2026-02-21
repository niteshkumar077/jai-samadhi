import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/features/Hero";
import { HistorySnippet } from "@/components/features/HistorySnippet";

// Dynamic imports for below-the-fold components
const SaintsPreview = dynamic(() => import("@/components/features/SaintsPreview").then(mod => mod.SaintsPreview), { ssr: true });
const AppDownloadBanner = dynamic(() => import("@/components/features/AppDownloadBanner").then(mod => mod.AppDownloadBanner), { ssr: true });
const ChatbotRedirect = dynamic(() => import("@/components/features/ChatbotRedirect").then(mod => mod.ChatbotRedirect), { ssr: true });

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <Hero />
      <HistorySnippet />
      <SaintsPreview />
      <AppDownloadBanner />
      <ChatbotRedirect />

      <Footer />
    </main>
  );
}
