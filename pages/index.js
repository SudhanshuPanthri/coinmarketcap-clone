import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header/Header";
import Trending from "../components/Trending/Trending";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="parentContainer">
      <Header />
      <Trending />
      {/* table with data  */}
    </div>
  );
}
