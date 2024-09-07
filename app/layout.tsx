import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "../providers/theme-provider";
import ModalProvider from "../providers/modal-provider";
import { Toaster } from "../components/ui/sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { BillingProvider } from "../providers/billing-ptovider";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "fuzzy",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      publishableKey={`${process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}`}
    >
      <html lang="en">
        <body className={font.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <BillingProvider>
              <ModalProvider>
                {children}
                <SpeedInsights />
                <Toaster />
              </ModalProvider>
            </BillingProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
