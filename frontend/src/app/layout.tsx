import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Annoucement from "@/components/Annoucement/Annoucement";
import "./global.css";

export const metadata = {
  title: "Aroma Casa - Premium Perfumes & Luxury Fragrances",
  description: "Discover exquisite luxury perfumes and fragrances at Aroma Casa. Shop our collection of premium scents including Amour, Nirvana, and Gentlemen.",
  keywords: "perfume, fragrance, luxury perfumes, premium scents, Aroma Casa, Amour, Nirvana, Gentlemen, luxury fragrances",
  icons: {
    icon: '/darkLogo.svg',
    shortcut: '/darkLogo.svg',
    apple: '/darkLogo.svg',
  },
  openGraph: {
    title: "Aroma Casa - Premium Perfumes & Luxury Fragrances",
    description: "Discover exquisite luxury perfumes and fragrances at Aroma Casa. Shop our collection of premium scents.",
    type: "website",
  },
  twitter: {
    title: "Aroma Casa - Premium Perfumes & Luxury Fragrances",
    description: "Discover exquisite luxury perfumes and fragrances at Aroma Casa. Shop our collection of premium scents.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Annoucement />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
