import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Nav from "@/components/Nav";
import { AuthProvider } from "@/contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { CompareProvider } from "@/contexts/CompareContext";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Project Secret",
  description: "Generated by create next app",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
        style={{ zIndex: 9999 }}
      />

        <AuthProvider>
      <CompareProvider>

        <Nav/>
        {children}
      </CompareProvider>
    
        </AuthProvider>
      </body>
    </html>
  );
}