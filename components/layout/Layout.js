import Head from "next/head";
import { useState, useEffect } from "react";
import { Footer } from "../ui/Footer";
import { Navbar } from "../ui/Navbar";
// import { Navbar } from "../ui/Navbar";

export const Layout = ({ children, title = "Decomood", description }) => {
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Grediana Rojas" />
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="portfolio, frontend developer, react, next.js, css, sass, javascript"
        />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta property="og:title" content={`Información sobre  ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la página  sobre  ${title}`}
        />
        <meta property="og:image" content={`${origin}/images/logo.png`} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />
      </Head>

      <Navbar />

      <main className="main">{children}</main>

      <Footer />
    </>
  );
};
