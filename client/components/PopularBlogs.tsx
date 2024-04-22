import React from "react";
import PopularBlog from "./PopularBlog";

const PopularBlogs = () => {
  return (
    <div className="m-16  px-10  py-4 pb-6 rounded-2xl flex flex-col gap-6 bg-white">
      <h1>Popular blogs</h1>

      <PopularBlog />
      <PopularBlog />
      <PopularBlog />
      <PopularBlog />
      <PopularBlog />
    </div>
  );
};

export default PopularBlogs;
