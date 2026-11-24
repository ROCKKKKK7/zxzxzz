import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VYRA — A Smarter Look at Tomorrow",
  description: "AI glasses for a more connected, open world.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
