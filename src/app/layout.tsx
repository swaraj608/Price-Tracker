import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "Price Tracker",
  description: "Track and visualize product price trends easily.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0b0c10] text-gray-100 font-inter antialiased">
        <ToastContainer/>
        {children}
      </body>
    </html>
  );
}
