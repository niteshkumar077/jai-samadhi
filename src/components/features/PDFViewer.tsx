"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FileText, Download, Maximize, Minimize } from "lucide-react";
import { cn } from "@/lib/utils";

export function PDFViewer() {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const pdfUrl = "/akhand-dhuni-sahib.pdf";

    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
    };

    return (
        <>
            <Card className={cn(
                "w-full flex flex-col bg-white dark:bg-black/50 border border-saffron-200 transition-all duration-300",
                isFullScreen
                    ? "fixed inset-0 z-[2000] h-screen rounded-none border-0"
                    : "h-[600px] overflow-hidden rounded-xl"
            )}>
                {/* PDF Toolbar */}
                <div className="p-4 bg-saffron-50 dark:bg-white/5 border-b border-saffron-100 flex items-center justify-between sticky top-0 z-10 backdrop-blur-md">
                    <div className="flex items-center gap-2 text-saffron-800 dark:text-saffron-200 font-medium">
                        <FileText className="w-5 h-5" />
                        <span className="hidden sm:inline">Akhand Dhuni Sahib</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="gap-2 text-saffron-700 hover:bg-saffron-100"
                            onClick={toggleFullScreen}
                        >
                            {isFullScreen ? (
                                <><Minimize className="w-4 h-4" /> Exit</>
                            ) : (
                                <><Maximize className="w-4 h-4" /> Full Screen</>
                            )}
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            className="gap-2 border-saffron-200 text-saffron-700 hover:bg-saffron-50"
                            onClick={() => window.open(pdfUrl, '_blank')}
                        >
                            <Download className="w-4 h-4" />
                            <span className="hidden sm:inline">Download</span>
                        </Button>
                    </div>
                </div>

                {/* PDF Content Area */}
                <div
                    className={cn(
                        "flex-1 w-full h-full bg-gray-100 dark:bg-gray-900/50",
                        isFullScreen ? "mx-auto" : ""
                    )}
                >
                    <object
                        data={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                        type="application/pdf"
                        className="w-full h-full"
                    >
                        <iframe
                            src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                            className="w-full h-full border-0"
                            title="Akhand Dhuni Sahib PDF"
                        >
                            <div className="flex flex-col items-center justify-center h-full p-8 text-center text-gray-500">
                                <FileText className="w-12 h-12 mb-4 text-saffron-300" />
                                <p className="mb-4 text-lg">Your browser does not support inline PDFs.</p>
                                <Button
                                    onClick={() => window.open(pdfUrl, '_blank')}
                                    className="bg-saffron-600 hover:bg-saffron-700 text-white"
                                >
                                    Download PDF to View
                                </Button>
                            </div>
                        </iframe>
                    </object>
                </div>
            </Card>
        </>
    );
}
