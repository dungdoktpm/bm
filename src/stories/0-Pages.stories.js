import getBody from "./utils";
import home from "!source-loader!../index.html";
import about from "!source-loader!../about.html";
import blog from "!source-loader!../blog.html";
import blog_single from "!source-loader!../blog-single.html";
import blog_standard from "!source-loader!../blog-standard.html";
import portfolio from "!source-loader!../portfolio.html";

export default {
  title: "Pages",
};

export const Home = () => {
  return getBody(home);
};

export const About = () => {
  return getBody(about);
};

export const Blog = () => {
  return getBody(blog);
};

export const BlogSingle = () => {
  return getBody(blog_single);
};

export const BlogStandard = () => {
  return getBody(blog_standard);
};

export const Portfolio = () => {
  return getBody(portfolio);
};
