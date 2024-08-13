import Banner from "@/Components/Banner";
import Card from "@/Components/Card";
import Client from "@/Components/Client";
import Form from "@/Components/Form";
import HeroSection from "@/Components/HeroSection";
import Navbar from "@/Components/Navbar";
import OrderSec from "@/Components/OrderSec";
import Products from "@/Components/Products";


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Card />
      <OrderSec />
      <Products />
      <Banner />
      <Client />
      <Form />
      

    </>
  );
}
