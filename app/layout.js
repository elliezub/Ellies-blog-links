import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ellie",
  description: "Ellie's portfolio site",
  openGraph: {
    type: "website",
    url: "https://elliez.netlify.app/",
    title: "Ellie",
    description: "Ellie's portfolio site",
    images: [
      {
        url: "https://i.postimg.cc/pXJCPmFh/Untitled-design-9.jpg",
        alt: "My portfolio site",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@elliezub",
    title: "Ellie",
    description: "My portfolio site",
    image: "https://i.postimg.cc/pXJCPmFh/Untitled-design-9.jpg",
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
