import type { Metadata } from "next";
import "./globals.css";


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
        {children}
      </body>
    </html>
  );
}
