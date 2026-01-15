import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import BackToTop from "./components/BackToTop";
import QuickContact from "./components/QuickContact";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Sanskriti Architects | Sustainable Architectural Excellence",
    template: "%s | Sanskriti Architects"
  },
  description: "Sanskriti Architects is a leading architectural firm in Kochi, Kerala, specializing in sustainable residential and commercial designs that harmonize with nature.",
  keywords: ["Sanskriti Architects", "Architecture Kochi", "Sustainable Design Kerala", "Residential Architects Ernakulam", "Commercial Architects Kochi"],
  robots: {
    index: false,
    follow: false,
  },
  themeColor: "#E35336",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Sanskriti",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#E35336",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Load Roboto and Playfair Display fonts from Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <Navigation />
        <main>
          {children}
        </main>
        <BackToTop />
        {/* <QuickContact /> */}
        <Footer />
      </body>
    </html>
  );
}
