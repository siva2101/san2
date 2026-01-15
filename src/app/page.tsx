import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home | Sanskriti Architects",
  description: "Explore the architectural vision of Sanskriti Architects. We design sustainable, modern spaces that redefine living and working environments in Kerala.",
};

import HomeBanner from "./components/HomeBanner";
import Projects from "./projects/page";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen px-4 md:px-8 lg:px-12">
      <div className="">
        <HomeBanner />
      </div>
      {/* We can add a preview of projects below if needed, or keeping it clean for now */}
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-sansGray mb-4">Crafting Sustainable Spaces1</h2>
        <p className="text-sansGray/60 max-w-2xl mx-auto">
          Sanskriti Architects is dedicated to designing environments that harmonize with nature while providing modern comfort and elegance.
        </p>
      </div>
    </div>
  );
}
