import Image from "next/image";
import "./globals.css";
import BestSellers from "@/components/BestSellers";

export default function Home() {
  return (
    <div>
      <div className=" image-container w-full photo">
        <img src="/books.jpg" alt="books" className="home-image" />
      </div>
      <div className="w-full">
        <BestSellers />
      </div>
    </div>
  );
}
