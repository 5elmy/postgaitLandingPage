import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Head from "next/head";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata = {
//   title: "POSTGAIT",
//   description: "POSTGAIT",
  
// };

export const metadata = {
  title: "POSTGAIT",
  description: "POSTGAIT",
  icons: {
    icon: "/src/app/images/NavbarImages/postgaitLogo.svg",
    apple: "/src/app/images/NavbarImages/postgaitLogo.svg",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Head>
        {/* Set the favicon */}
        <link rel="icon" href="/public/postgaitLogo.svg" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/public/postgaitLogo.svg" />
        <link rel="apple-touch-icon" href="/public/postgaitLogo.svg" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      

        <Navbar/>
        {children}
        <Footer/>

     
      </body>
    </html>
  );
}
