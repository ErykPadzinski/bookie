import React from "react";
import Image from "next/image";

const Book = () => {
  return (
    <div className="w-40 h-60 border border-gray-400 justify-center flex flex-col">
      <div className="ml-2">
        <Image src="/tracy.jpeg" alt="book-img" width={110} height={28} />

        <div>
          <p className="font-semibold">Nawyki warte miliony</p>
          <p className="text-xs">Brian Tracy</p>
        </div>
      </div>
    </div>
  );
};

export default Book;
