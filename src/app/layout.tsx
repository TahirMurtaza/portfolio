import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/bundle';
import 'react-modal-video/css/modal-video.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-photo-view/dist/react-photo-view.css';

import 'animate.css';
import '@/assets/css/animate.css';
import '@/assets/css/font-awesome.min.css';

import '@/assets/css/validnavs.css';
import '@/assets/css/helper.css';
import '@/assets/css/unit-test.css';
import '@/assets/css/style.css';

import type { Metadata } from "next";
import { ToastContainer } from 'react-toastify';
import Dependency from '@/components/utilities/Dependency';
import ThemeDetector from '@/components/classes/ThemeDetector';

import { Barlow } from "next/font/google";

const barlow = Barlow({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Tahir Murtaza — Full Stack AI Engineer",
  description: "Full Stack AI Engineer building AI-powered products — voice AI agents, LLM workflows, and scalable full-stack applications with Python, React, and cloud platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlow.className}`} style={{ overflowX: 'hidden' }}>
        <ToastContainer />
        <ThemeDetector />
        <Dependency />
        {children}
      </body>
    </html>
  );
}
