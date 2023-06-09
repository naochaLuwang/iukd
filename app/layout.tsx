import Social from "@/components/Header/Social";
import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "../components/Footer";
import MobileHeader from "@/components/Header/MobileHeader";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={`${poppins.className} scrollbar-hide `}>
        <Social />
        <Header />
        <MobileHeader />

        <Navbar />
        <div className="flex flex-col w-full overflow-hidden h-fit ">
          {children}
        </div>

        <Footer />
        {/* <ScrollToTop /> */}
      </body>
    </html>
  );
}
