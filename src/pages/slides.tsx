import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";

const SlidesPage = () => {
  return (
    <Layout pageTitle={"Slides"}>
      <p className="text-2xl py-12">
        To have a better experience with these slides, please use a computer !
      </p>
      <hr className="border-2 border-green-400 w-1/5 m-auto" />
      <div className="sm:flex-col md:flex md:flex-row m-auto h-2/3 my-8">
        <div className="m-auto h-2/3 sm:w-5/6 md:w-1/2 p-4 ">
          <p className="text-center pt-4  pl-2 pb-4 text-gray-400 hover:text-purple-400 text-2xl">
            <a
              href="https://react-native-heroes.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              Discover how I build a fullstack serveless application
            </a>
          </p>
        </div>

        <StaticImage
          className="border-purple-400 border-2 w-2/3 h-2/3 md:w-2/5 md:h-2/5 m-auto"
          src="../images/talk.jpg"
          alt={"img"}
        />
      </div>
      <hr className="border-2 border-green-400 w-1/5 m-auto" />
      <div className="sm:flex-col md:flex md:flex-row m-auto h-2/3 my-8 ">
        <div className="m-auto h-2/3 sm:w-5/6 md:w-1/2 ">
          <p className="pt-4 text-center pl-2 pb-4 text-gray-400 hover:text-purple-400 text-2xl">
            <a
              href="https://matthysd-gatsby-slide.netlify.app/#0"
              rel="noreferrer"
              target="_blank"
            >
              Discover my Gatsby v4 presentation
            </a>
          </p>
        </div>

        <StaticImage
          className="border-purple-400 border-2 w-2/3 h-2/3 md:w-2/5 md:h-2/5 m-auto"
          src="https://miro.medium.com/max/724/1*SQdK1oLDvGecynYvKDKzzQ.png"
          alt={"img"}
        />
      </div>
      <hr className="border-2 border-green-400 w-1/5 m-auto" />

      <div className="sm:flex-col md:flex md:flex-row m-auto h-2/3 my-8">
        <div className="m-auto h-2/3 sm:w-5/6 md:w-1/2 p-4 ">
          <p className="text-center pt-4  pl-2 pb-4 text-gray-400 hover:text-purple-400 text-2xl">
            <a
              href="https://slides-app-matthysdev.netlify.app"
              rel="noreferrer"
              target="_blank"
            >
              Discover my alternation presentation
            </a>
          </p>
        </div>

        <StaticImage
          className="border-purple-400 border-2 w-2/3 h-2/3 md:w-2/5 md:h-2/5 m-auto"
          src="../images/mindnode.png"
          alt={"img"}
        />
      </div>
    </Layout>
  );
};

export default SlidesPage;
