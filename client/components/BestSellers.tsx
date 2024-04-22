import React from "react";
import Book from "./Book";

const BestSellers = () => {
  return (
    <div className="bg-white rounded-2xl mt-16">
      <h1 className="text-4xl font-medium m-7">Bestsellers of the Month</h1>
      <div className="mt-10 flex justify-center gap-8 px-8 pb-12">
        <Book />
        <Book />
        <Book />
        <Book />
      </div>
    </div>
  );
};

export default BestSellers;
