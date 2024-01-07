import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const metadata: Metadata = {
  title: 'whats my ip - Find Your Public IP Address Instantly',
  description: 'My tool helps you to instantly find your public IP address, an essential detail for networking, gaming, and security. Learn more about IP addresses and how to protect yours.',
  
  authors: [
      { name: "Niklas Bognar", url: "https://bognar-dev.vercel.app/" },
  ],
  generator: "Next.js",
  keywords: ["IP address", "network", "internet", "public IP", "private IP", "IPv4", "IPv6"],
  creator: "Bognar.dev",
  publisher: "Niklas Bognar",
  robots: "index, follow",
  icons: {
      icon: "",
      apple: "",
  },
  openGraph: {
      type: "website",
      url: "https://whats-my-ip-pi.vercel.app/",
      title: "What's My IP",
      description: "Find your current IP address with ease.",
      siteName: "IP Checker",
      images: [{ url: "" }],
  },
  twitter: {
      card: "summary_large_image",
      site: "@ipchecker",
      creator: "@ipchecker",
      images: "",
  },
  appleWebApp: {
      capable: true,
      title: "What's My IP",
      statusBarStyle: "black-translucent",
  },
  
  abstract: "Find your current IP address with ease."
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
