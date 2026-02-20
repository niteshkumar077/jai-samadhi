import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/features/Hero";
import { HistorySnippet } from "@/components/features/HistorySnippet";
import { SaintsPreview } from "@/components/features/SaintsPreview";
import { AppDownloadBanner } from "@/components/features/AppDownloadBanner";
import { ChatbotRedirect } from "@/components/features/ChatbotRedirect";

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
