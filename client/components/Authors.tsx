import React from "react";
import SingleAuthor from "./SingleAuthor";

const Authors = () => {
  return (
    <div className=" m-16  px-10 rounded-2xl flex flex-col gap-6 bg-white py-12 ">
      <h2>Trending Author</h2>
      <SingleAuthor />
      <SingleAuthor />
      <SingleAuthor />
      <SingleAuthor />
      <SingleAuthor />
    </div>
  );
};

export default Authors;
