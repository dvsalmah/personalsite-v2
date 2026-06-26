import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { ThemeToggleFloating } from "@/components/ui/theme-toggle-floating";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dealova Nabila",
  description:
    "Portfolio of Dealova Nabila — Product Manager & CS student at Brawijaya University. Showcasing PM case studies, front-end projects, and product thinking.",
  keywords: ["Product Manager", "Portfolio", "Dealova Nabila", "Brawijaya University"],
  openGraph: {
    title: "Dealova Nabila",
    description:
      "Product Manager & CS student passionate about turning complex ideas into user-centered products.",
    type: "website",
    siteName: "Dealova Nabila",
    
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`min-h-screen bg-background text-text antialiased ${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ThemeToggleFloating />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
