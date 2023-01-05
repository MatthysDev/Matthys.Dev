import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children, pageTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className=" bg-gray-900 md:h-full text-white ">
      <div className="text-center lg:m-auto font-sans">
        <div className="sm:flex-col lg:flex lg:flex-row">
          <Sidebar />
          <div className="overflow-y-scroll h-screen m-auto justify-center w-full  pt-0 lg:pt-4 font-roboto">
            <main className="m-auto lg:mt-4 justify-center w-11/12 md:w-2/3 pt-4">
              <Header pageTitle={pageTitle} />

              <p className=" m-auto">{children}</p>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
