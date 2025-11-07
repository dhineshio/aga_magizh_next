import type { Metadata } from "next";
import { Manrope, Caveat, Nunito } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import BaseLayout from "./components/BaseLayout";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aga Magizh Trust - Trusted Non-Profit Charity Organization",
  description: "Aga Magizh Trust is a trusted non-profit charity organization dedicated to creating positive change in our community. We provide essential resources, food support, education assistance, and shelter for those in need.",
  keywords: [
    "charity",
    "non-profit",
    "donation",
    "volunteer",
    "community support",
    "AGA MAGIZH TRUST",
    "food assistance",
    "education support",
    "homeless rescue",
    "tree plantation",
    "awareness programs",
    "grocery support",
    "humanitarian aid",
    "social welfare",
    "charity organization India"
  ],
  authors: [{ name: "AGA MAGIZH TRUST" }],
  creator: "AGA MAGIZH TRUST",
  publisher: "AGA MAGIZH TRUST",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://agamagiztrust.org',
    title: 'AGA MAGIZH TRUST - Trusted Non-Profit Charity Organization',
    description: 'Join our mission to support and uplift the needy. Your donation provides food, shelter, education, and hope for a better future.',
    siteName: 'AGA MAGIZH TRUST',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'AGA MAGIZH TRUST Logo - Charity Organization',
      },
      {
        url: '/slide_01.png',
        width: 1200,
        height: 630,
        alt: 'AGA MAGIZH TRUST - Helping Communities',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AGA MAGIZH TRUST - Trusted Non-Profit Charity Organization',
    description: 'Join our mission to support and uplift the needy. Your donation provides food, shelter, education, and hope for a better future.',
    images: ['/logo.png'],
    creator: '@agamagiztrust',
    site: '@agamagiztrust',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://agamagiztrust.org',
    languages: {
      'en-US': 'https://agamagiztrust.org',
      'ta-IN': 'https://agamagiztrust.org/ta',
    },
  },
  category: 'Non-Profit Organization',
  classification: 'Charity & Social Welfare',
  other: {
    'contact:phone_number': '+91 7824015120',
    'contact:email': 'agamagizhtrust2020@gmail.com',
    'organization:name': 'AGA MAGIZH TRUST',
    'organization:registration': 'Reg No: 47/20',
    'theme-color': '#fe5429',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${manrope.variable} ${caveat.variable} ${nunito.variable} antialiased`}
      >
        <BaseLayout>
          {children}
        </BaseLayout>
        <Script
          src="https://unpkg.com/aos@2.3.1/dist/aos.js"
          strategy="beforeInteractive"
        />
        <Script id="aos-init" strategy="afterInteractive">
          {`
            if (typeof AOS !== 'undefined') {
              AOS.init({
                duration: 1000,
                once: true,
                offset: 100
              });
            }
          `}
        </Script>
      </body>
    </html>
  );
}
