import React from "react";
import Image from "next/image";

const Book = () => {
  return (
    <div className="">
      <div className="mx-3">
        <Image src="/tracy.jpeg" alt="book-img" width={250} height={28} />

        <div>
          <div className="flex justify-between mt-2">
            <p className="font-semibold">Nawyki warte miliony</p>
            <p>12.99$</p>
          </div>
          <p className="text-xs">Brian Tracy</p>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <div>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </div>

          <button className="p-2 font-medium px-6 rounded-md bg-yellow-400">
            Add to card
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
