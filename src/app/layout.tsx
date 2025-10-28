import type { Metadata } from "next";
import { Chakra_Petch, Geist, Geist_Mono, Unbounded,Mona_Sans ,Poppins} from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const chakraPetch=Chakra_Petch({
  variable:"--font-chakraPetch",
  weight:["300","400","500","600","700"],
  subsets:["latin"],

})

const mona=Mona_Sans({
   variable:"--font-mona",
  weight:["300","400","500","600"],
  subsets:["latin"],
})

const poppins=Poppins({
   variable:"--font-poppins",
  weight:["300","400","500","600","700","800","900"],
  subsets:["latin"],
})
const unbounded=Unbounded({
   variable:"--font-unbounded",
  weight:["300","400","500","600","700"],
  subsets:["latin"],
})

export const metadata: Metadata = {
  title: "Modern Business Website",
  description: "Fast, sleek and responsive business website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${chakraPetch.variable} ${mona.variable} ${poppins.variable} ${unbounded.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
