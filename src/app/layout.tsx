"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import ToastProvider from "@/components/toastProvider/ToastProvider";

// ফন্ট কনফিগারেশন
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Query Client তৈরি
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <div
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <div className="max-w-7xl mx-auto bg-white h-full">
              <Navbar />
              {children}
              <ToastProvider />
            </div>
          </div>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </body>
    </html>
  );
}
