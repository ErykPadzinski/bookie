import React from "react";
import Book from "./Book";

const BestSellers = () => {
  return (
    <div className="mt-16 ml-16">
      <h1 className="text-4xl font-medium">Bestsellers of the Month</h1>
      <div className="mt-28 flex justify-center gap-8">
        <Book />
        <Book />
        <Book />
        <Book />
      </div>
    </div>
  );
};

export default BestSellers;
