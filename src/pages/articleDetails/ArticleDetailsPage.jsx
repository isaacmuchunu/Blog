import React from "react";
import MainLayout from "../../components/MainLayout";
import BreadCrumbs from "../../components/BreadCrumbs";
import { images } from "../../constants";
import SuggestedPosts from "./container/suggestedPosts";
import { Link } from "react-router-dom";
import CommentsContainer from "../../components/comments/CommentsContainer";

const tagsData = ["medical", "lifestyle", "learn", "food", "education", "diet"];

const breadcrumbsData = [
  { name: "Home", link: "/" },
  { name: "Blog", link: "/blog" },
  { name: "Article Title", link: "/blog/1" },
];
const postsData = [
  {
    id: "1",
    image: images.post,
    title: "Help children get better education",
    createdAt: "2000-10-31T01:30:00.000-05:00",
  },
  {
    id: "2",
    image: images.post,
    title: "Help children get better education",
    createdAt: "2000-10-31T01:30:00.000-05:00",
  },
  {
    id: "3",
    image: images.post,
    title: "Help children get better education",
    createdAt: "2000-10-31T01:30:00.000-05:00",
  },
  {
    id: "4",
    image: images.post,
    title: "Help children get better education",
    createdAt: "2000-10-31T01:30:00.000-05:00",
  },
];

const ArticleDetailsPage = () => {
  return (
    <MainLayout>
      <section className="container mx-auto max-w-5xl px-5 py-5 flex flex-col lg:flex-row lg:gap-x-5 lg:items-start">
        <article className="flex-1">
          <BreadCrumbs data={breadcrumbsData} />
          <img
            src={images.post}
            alt="post image"
            className="rounded-xl w-full mt-4"
          />
          <Link
            to="/blog?category=selectedCategory"
            className="text-primary inline-block font-poppins mt-4 text-sm uppercase md:text-base"
          >
            education
          </Link>
          <h1 className="text-xl font-poppins font-medium mt-4 text-dark-hard md:text-[26px]">
            Help children get better education
          </h1>
          <div className="mt-4 text-dark-soft">
            <p className="leading-7 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
              imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
              senectus et netus. Mattis pellentesque id nibh tortor id aliquet
              lectus proin.
            </p>
          </div>
          <CommentsContainer className="mt-10" loggedInUserId="a"/>
        </article>
        <SuggestedPosts
          header="Latest Articles"
          posts={postsData}
          tags={tagsData}
          className="mt-8 lg:mt-0 lg:max-w-xs"
        />
      </section>
    </MainLayout>
  );
};

export default ArticleDetailsPage;
