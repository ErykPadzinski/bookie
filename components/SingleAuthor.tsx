import React from "react";
import Image from "next/image";

const SingleAuthor = () => {
  return (
    <div className="flex justify-between gap-10 align-middle items-center">
      <div className="flex align-middle items-center gap-4">
        <Image
          className="rounded-full"
          src="/personn.jpg"
          alt="author"
          width={40}
          height={70}
        />
        <p>Lorem Ipsum</p>
      </div>
      <button className="bg-blue-300 py-1 px-2 rounded-md border-2 border-blue-500">
        Follow
      </button>
    </div>
  );
};

export default SingleAuthor;
