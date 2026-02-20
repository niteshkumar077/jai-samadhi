import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { SaintsGrid } from "@/components/features/SaintsGrid";

export default function SaintsPage() {
    return (
        <main className="min-h-screen flex flex-col pt-16">
            <Navbar />

            <Section className="bg-gradient-to-b from-saffron-50/50 to-transparent">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-saffron-800">The Sacred Lineage</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Pay homage to the five illuminaries who have guided the spiritual journey of Baba Garib Das Temple.
                    </p>
                </div>

                <SaintsGrid />
            </Section>

            <Footer />
        </main>
    );
}
