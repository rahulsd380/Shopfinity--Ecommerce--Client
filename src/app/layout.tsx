import type { Metadata } from "next";
import "./globals.css";
import ClientProvider from "@/providers/ClientProvider";


export const metadata: Metadata = {
  title: "Shopfinity",
  description: "Find - Pick and Shop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased `}
        suppressHydrationWarning
      >
        <ClientProvider> {children}</ClientProvider>
      </body>
    </html>
  );
}
