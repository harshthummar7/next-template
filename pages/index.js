import Image from "next/image";
import Navbar from "@/component/Navbar";
import Second from "@/component/Second";
import Button from "@/component/Button";
import Third from "@/component/Third";
import Fourth from "@/component/Fourth";
import Fifth from "@/component/Fifth";
import Box from "@/component/Box";
import Six from "@/component/Six";
import Nine from "@/component/Nine";
import Ten from "@/component/Ten";
import Eleven from "@/component/Eleven";
import Icon from "@/component/Icon";
import Footer from "@/component/Footer";
import { data, dataSix } from "../utils/constants";
import style from "../styles/Index.module.css";

export default function Home() {
  return (
    <div className={style.root}>
      <Navbar></Navbar>
      <Second></Second>
      <Button></Button>
      <Third></Third>
      <Fourth></Fourth>
      <Fifth data={data}></Fifth>
      <Box></Box>
      {dataSix.map((data) => {
        return <Six data={data}></Six>;
      })}

      {/* <Seven></Seven>
      <Eight></Eight> */}
      <Nine></Nine>
      <Ten></Ten>
      <Eleven></Eleven>
      <Footer></Footer>
    </div>
  );
}
