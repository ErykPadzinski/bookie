import Image from "next/image";
import "./globals.css";
import BestSellers from "@/components/BestSellers";
import Authors from "@/components/Authors";
import PopularBlogs from "@/components/PopularBlogs";
import Recommended from "@/components/News";

export default function Home() {
  return (
    <div>
      <div className=" image-container w-full photo">
        <img src="/books.jpg" alt="books" className="home-image" />
      </div>
      <div className="flex justify-center">
        <div className=" flex flex-col flex-grow">
          <BestSellers />
          <Recommended />
        </div>

        <div className="flex-grow">
          <Authors />
          <PopularBlogs />
        </div>
      </div>
    </div>
  );
}
