import { gql } from "@apollo/client";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import client from "../apollo-client";
import WidgetArt from "../components/WidgetArt";
import {
  WidgetPostVinyl,
  WidgetPostDesk,
  WidgetPostMaterial,
} from "../components/WidgetPost";

const Home: NextPage = ({
  articleRec,
  plansRec,
  materialsRec,
  desksRec,
}: any) => {
  const imgRandom = ["IMG_bg1.jpg", "IMG_bg2.jpg"];

  const lastArticles = articleRec.slice(0, 3);
  const lastPlan = plansRec.slice(0, 3);

  const lastMaterial = materialsRec.slice(0, 3);
  const lastDesk = desksRec.slice(0, 3);
  return (
    <div className="">
      <Head>
        <title>VinylTouch</title>
        <meta
          name="description"
          content="Tous les bons plan, promotions, petit prix, réductions, dernieres sorties, vinyles, meubles, rangements, hifi, sound, pré-commandes, les exclus"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <meta
          property="og:title"
          content="Accueil articles bons plan vinyles, hifi, rangements"
        />
        <meta
          property="og:description"
          content="Tous les bons plan, promotions, petit prix, réductions, dernieres sorties, vinyles, meubles, rangements, hifi, sound, pré-commandes, les exclus"
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1461360228754-6e81c478b882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80"
        />
        <meta property="og:url" content="https://vinyltouch.fr/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="vinylTouch" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:locale:alternate" content="en_US" />
      </Head>

      {/* <Layout pages="Acceuil Vinyl"> */}
      <div className="lg:grid lg:grid-cols-1 lg:grid-rows-2 sm:grid sm:grid-col-1">
        <div className=" lg:row-start-1 lg:row-span-2 lg:col-start-1 lg:col-span-1 sm:flex sm:flex-col lg:mt-8 lg:mx-20 sm:mt-5 sm:text-center ">
          <h2 className="lg:mt-2 lg:mx-10 lg:text-justify lg:w-2/3 lg:text-lg sm:mt-1 sm:mx-16 sm:text-base sm:text-center font-bold font-philosopher z-10 lg:text-black sm:text-black  first-letter:text-xl first-letter:font-bold first-letter:text-blueCC">
            En partant d&apos;un constat concernant la difficulté de trouver des
            infos rapidement. <br /> Nous avons décidé de créer un site qui permet en
            quelques clics, de regrouper des extraits d&apos;articles,
            des news, des promotions ainsi que des nouveautés en vinyles. {"\n"}
            <span>Ces offres sont issus de différentes plateformes (Amazon, Fnac, Son-video, Mondo, Waxworkrecords...).</span>
          </h2>
          <h2 className="lg:mt-2 lg:ml-24 lg:text-left lg:text-lg lg:w-2/3 md:mt-1 md:mx-12 md:text-lg sm:mt-1 sm:mx-16 sm:text-base sm:text-center font-bold font-philosopher z-10 text-black first-letter:text-xl first-letter:font-bold first-letter:text-blueCC">
            Avec en bonus une petite section spécialement dédiée aux Youtubeurs
            Français (les unboxing, coup de coeur...) partageant leur passion pour
            le 33T.
          </h2>
        </div>

        <div className="boxb  lg:row-start-2 lg:row-span-3 lg:col-start-1 lg:col-span-2 sm:flex sm:flex-col sm:items:center z-50 mb-48 lg:h-20 sm:h-auto ">
          <div className="lg:flex lg:flex-row lg:justify-evenly sm:flex sm:flex-col sm:items-center sm:justify-around">
            <div className="w-auto  sm:my-1 shadow-lg shadow-gray-400 rounded-lg">
              <WidgetArt articles1={lastArticles} className="z-10" />
            </div>
            <div className="w-auto sm:my-1  shadow-lg shadow-gray-400 rounded-lg" >
              <WidgetPostVinyl vinyls={lastPlan} className="z-10"  />
            </div>
            <div className="w-auto sm:my-1 shadow-lg shadow-gray-400 rounded-lg">
              <WidgetPostMaterial material1={lastMaterial} className="z-10"  />
            </div>
            <div className="w-auto sm:my-1 shadow-lg shadow-gray-400 rounded-lg">
              <WidgetPostDesk desk1={lastDesk} className="z-10"  />
            </div>
          </div>
        </div>

        <div className="fixed right-5 lg:grid lg:row-start-1 lg:row-span-1 lg: sm:flex sm:items-center sm:ml-2">
          <Image
            src={`/IMG_bg${Math.round(Math.random() * 1 + 1)}.png`}
            alt="vinyle"
            width={450}
            height={450}
            className="sm:opacity-30"
          />
        </div>
      </div>
      
    </div>
  );
};

export default Home;

//changement ici getStaticProps in getServerSideProps
export async function getServerSideProps() {
  const recentArticles = (
    await client.query({
      query: gql`
        query Article {
          Article {
            _id
            image
            title
            subtitle
            createdAt
          }
        }
      `,
    })
  ).data.Article;

  const recentVinyl = (
    await client.query({
      query: gql`
        query getPlan {
          getVinylFeatured {
            _id
            author
            createdAt
            title
            description
            image
            referral_url
            priceEur
            seller
            promo
            featured
          }
        }
      `,
    })
  ).data.getVinylFeatured;

  const recentMaterial = (
    await client.query({
      query: gql`
        query getPlan {
          getMaterialFeatured {
            _id
            author
            createdAt
            title
            description
            image
            referral_url
            price
            seller
            featured
          }
        }
      `,
    })
  ).data.getMaterialFeatured;

  const recentDesk = (
    await client.query({
      query: gql`
        query getPlan {
          getDeskFeatured {
            _id
            author
            createdAt
            title
            description
            image
            referral_url
            price
            seller
            featured
          }
        }
      `,
    })
  ).data.getDeskFeatured;

  return {
    props: {
      articleRec: recentArticles,
      plansRec: recentVinyl,
      materialsRec: recentMaterial,
      desksRec: recentDesk,
    },
  };
}
