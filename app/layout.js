import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ellie",
  description: "Ellie's portfolio site",
  openGraph: {
    type: 'website',
    url: 'https://elliez.netlify.app/',
    title: 'Ellie',
    description: 'Ellie\'s portfolio site',
    images: [
      {
        url: 'https://i.postimg.cc/GtsP0212/Screenshot-2024-05-24-173509.png',
        width: 800,
        height: 600,
        alt: 'Default Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@elliezub',
    title: 'Ellie',
    description: 'My portfolio site',
    image: 'https://i.postimg.cc/GtsP0212/Screenshot-2024-05-24-173509.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

