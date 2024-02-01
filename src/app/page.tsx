import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <div className=" image-container w-full photo">
        <img src="/books.jpg" alt="books" className="home-image" />
      </div>
      <h1>Week Bestsellers</h1>
    </div>
  );
}
