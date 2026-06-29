import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Mukta, Poppins } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mukta = Mukta({
  subsets: ["latin", "devanagari"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "मेरा बच्चा, मेरी शान ❤️ | भारत का AI पेरेंटिंग समुदाय",
    template: "%s | मेरा बच्चा, मेरी शान",
  },
  description:
    "बेहतर परवरिश • बेहतर भविष्य। AI, विशेषज्ञों और एक मजबूत समुदाय के साथ अपनी Parenting Journey को आसान बनाएं। India's largest AI powered Hindi parenting community.",
  keywords: [
    "parenting", "हिंदी पेरेंटिंग", "परवरिश", "AI parenting", "पालन-मित्र AI",
    "बच्चों की परवरिश", "Indian parenting", "child development",
  ],
  openGraph: {
    title: "मेरा बच्चा, मेरी शान ❤️",
    description: "बेहतर परवरिश • बेहतर भविष्य — India's AI Powered Parenting Community",
    type: "website",
  },
  metadataBase: new URL("https://merabachhamerishaan.in"),
};

export const viewport: Viewport = {
  themeColor: "#4f46e5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="hi" suppressHydrationWarning>
      <body className={`${mukta.variable} ${poppins.variable} antialiased`}>
        <ThemeProvider>
          <I18nProvider>
            <Navbar />
            <main className="pt-[88px]">{children}</main>
            <Footer />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
