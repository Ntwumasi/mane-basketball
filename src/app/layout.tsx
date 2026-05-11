import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mane Basketball Training Center",
  description:
    "Elite basketball training for all ages. Build fundamentals, sharpen skills, and elevate your game at Mane Training Center.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
