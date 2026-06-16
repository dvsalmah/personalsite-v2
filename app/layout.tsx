import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dealova Nabila | Product Manager Portfolio",
  description:
    "Portfolio of Dealova Nabila — Product Manager & CS student at Brawijaya University. Showcasing PM case studies, front-end projects, and product thinking.",
  keywords: ["Product Manager", "Portfolio", "Dealova Nabila", "Brawijaya University"],
  openGraph: {
    title: "Dealova Nabila | Product Manager Portfolio",
    description:
      "Product Manager & CS student passionate about turning complex ideas into user-centered products.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-[#0F172A] text-[#F8FAFC] antialiased">{children}</body>
    </html>
  );
}
