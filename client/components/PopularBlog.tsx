import Image from "next/image";
import React from "react";

const PopularBlog = () => {
  return (
    <div className="flex justify-between gap-5">
      <div className="">
        <Image src="/blog-image.png" alt="blog-img" width={70} height={0} />
      </div>
      <div>
        <h1>Lorem ipsum dolor sit Amet</h1>
      </div>
    </div>
  );
};

export default PopularBlog;
