import Benifits from "@/components/benefits/Benifits";
import BestProduct from "@/components/bestProduct/BestProduct";
import Featured from "@/components/featured/Featured";
import Hero from "@/components/hero/Hero";
import HeroProducts from "@/components/heroProducts/HeroProducts";
import Latest from "@/components/latest/Latest";
import Products from "@/components/products/Products";
import Search from "@/components/search/Search";
import { getData } from "@/fetch";

export default async function Home() {
  let data = await getData("products?limit=8");
  return (
    <main>
      <Hero />
      <HeroProducts />
      <Products data={data} />
      <BestProduct />
      <Benifits />
      <Latest />
      <Featured />
      <Search />
    </main>
  );
}
