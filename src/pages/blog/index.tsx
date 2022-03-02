import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <p className="justify-center m-auto text-2xl text-left">
            <div className="sm:flex-col md:flex md:flex-row w-full lg:mt-0 mt-4">
              <div className="text-center m-auto w-full md:w-1/2">
                <Link
                  className="pl-2 pt-4 pb-4 text-gray-400 hover:text-purple-400"
                  to={`/blog/${node.slug}`}
                >
                  {node.frontmatter.title}
                </Link>
                <p className="pt-4 text-base m-auto">{node.frontmatter.date}</p>
              </div>
              <div className="m-auto mt-8 mb-8 md:m-8 w-full md:w-1/3 ">
                <GatsbyImage
                  image={getImage(node.frontmatter.hero_image)}
                  alt={data.mdx.frontmatter.hero_image_alt}
                  className="  pt-4  "
                />
              </div>
            </div>
            <hr className="w-2/3 m-auto border-green-400 border-2 " />
          </p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String) {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        slug
      }
    }
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default BlogPage;
