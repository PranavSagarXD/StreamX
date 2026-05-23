import { FAQSectionClient } from "@/components/layout/sections/faq-client";
import { HeroSection } from "@/components/layout/sections/hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "StreamX | Watch Movies and TV Shows",
  description:
    "StreamX is an open-source, no-cost, and ad-free movie and tv show stream aggregator.",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": 0,
      "max-image-preview": "large",
      "max-snippet": 150,
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "StreamX | Watch Movies and TV Shows",
    description:
      "StreamX is an open-source, no-cost, and ad-free movie and tv show stream aggregator.",
    images: [
      {
        url: "https://StreamX-one.vercel.app/og.png",
        alt: "StreamX | Watch Movies and TV Shows",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "/",
    title: "StreamX | Watch Movies and TV Shows",
    description:
      "StreamX is an open-source, no-cost, and ad-free movie and tv show stream aggregator.",
    images: ["https://StreamX-one.vercel.app/og.png"],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <FAQSectionClient />
    </>
  );
}
