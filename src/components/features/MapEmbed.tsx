import { Card } from "@/components/ui/Card";
import { MapPin } from "lucide-react";

export function MapEmbed() {
    return (
        <Card className="w-full h-[400px] overflow-hidden relative border-0 shadow-lg">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3518.2253810290813!2d69.0815815!3d28.1396263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3936a2a683ae87b9%3A0x2c221b8b3dddf7db!2sBaba%20Garibdas%20Mandir%20Ghouspur!5e0!3m2!1sen!2s!4v1771527694255!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                allow="unload"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Temple Location"
                className="filter grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-md flex items-center gap-2">
                <MapPin className="text-saffron-600 w-5 h-5" />
                <span className="font-medium text-gray-800">Ghouspur, Kashmore</span>
            </div>
        </Card>
    );
}
