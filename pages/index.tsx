import axios from "axios";
import { GetServerSideProps } from "next";
import { useState, useEffect } from "react";
import Head from "next/head";
import Router from "next/router";
import type { Data } from "./api/home";
import type { NextPage } from "next";
import Hero from "../lib/Hero";
import NavBar from "../lib/Navbar";
import Loading from "../lib/icons/Loading";

interface Props {
  navUrls: {
    urls: string[];
  };
  landing: Data;
}

const Home: NextPage<Props> = ({ navUrls, landing }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Chispita Challange</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {loading ? (
          <div className="w-screen h-screen flex items-center justify-center">
            <h1 className="flex items-center justify-center">
              Loading
              <span>
                <Loading />
              </span>
            </h1>
          </div>
        ) : (
          <>
            <NavBar navUrls={navUrls}></NavBar>
            <Hero
              bannerDesktop={landing.bannerDesktop}
              bannerMobile={landing.bannerMobile}
            />
          </>
        )}
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const emptyUrls: { urls: Array<string> } = { urls: [""] };
  const emptyLanding: Data = {
    bannerDesktop: [],
    bannerMobile: [],
    hotelSection: {
      title: "",
      detail: "",
      hotelsInfo: [],
    },
  };

  try {
    //url from page/api
    const resUrls = await axios("http://localhost:3000/api/nav");
    const navUrls = await resUrls.data;

    // landing data
    const resLanding = await axios("http://localhost:3000/api/home");
    const landing = await resLanding.data;

    return {
      props: { navUrls, landing },
    };
  } catch (error) {
    console.error(error);
  }

  return {
    props: { emptyUrls, emptyLanding },
  };
};

export default Home;
