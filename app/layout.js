import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ellie's Portfolio",
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
      <head>
        <link rel="icon" href="..\cat-icon-white.png" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.image} />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
