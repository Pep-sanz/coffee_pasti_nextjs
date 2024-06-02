"use client";

import CarouselSkeleton from "@/components/Skeleton/carousel-skeleton";
import CoffeeCardSkeleton from "@/components/Skeleton/coffee-card-skeleton";
import { SelectCategory } from "@/components/ui/SelectCategory";
import { InputSearch } from "@/components/ui/input-search";
import { useGetProducts } from "@/hooks/useGetProducts";
import { formatCurrency } from "@/utils/formatCurrency";
import { Card, Carousel, Input, Rate } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Menu = () => {
  const [headerCategory, setHeaderCategory] = useState("");
  const [filterByCategory, setFilterByCategory] = useState<any[]>([]);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const { products, loading, error } = useGetProducts();

  const router = useRouter();

  const handleClickCategory = (category: string) => {
    const coffeeCate = products.filter((item) => item.kategori === category);
    if (coffeeCate) {
      setHeaderCategory(category);
      setFilterByCategory(coffeeCate);
    } else {
      console.log({ error });
    }
  };

  const handleSearchProducts = (value: string) => {
    const searchProducts = products.filter((item) => {
      return item.title.toLowerCase().includes(value.toLowerCase());
    });
    setSearchResults(searchProducts);
  };

  const handleClickDetail = (productId: string) => {
    const detailProduct = products.filter((item) => item.id === productId);
    if (detailProduct) {
      router.push(`/menu/${productId}`);
    }
  };

  const renderProducts = filterByCategory.length > 0 ? filterByCategory : searchResults.length > 0 ? searchResults : products;

  return (
    <section className="flex flex-col pt-32 min-h-screen min-w-full gap-8 px-6  bg-neutral-900 text-white">
      {loading ? (
        <CarouselSkeleton />
      ) : (
        <Carousel autoplay effect="scrollx" autoplaySpeed={5000}>
          {products.map((item) => (
            <div key={item.id} className="w-full h-[300px] bg-primary !flex justify-center gap-4">
              <Image src={item.poster} alt="coffee" width={400} height={200} className="overflow-hidden" />
              <div className="w-full">
                <h1 className="text-3xl font-semibold">{item.title}</h1>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      )}
      <div className="flex justify-between gap-6 ">
        <InputSearch handleSearchProducts={handleSearchProducts} />
        <SelectCategory handleClickCategory={handleClickCategory} />
      </div>
      <div className="space-y-6">
        {/* Header Category */}
        <h5 className="text-start w-full text-3xl font-bold">{headerCategory ? headerCategory : "All Coffees"}</h5>
        {/* Menu Content */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {loading
            ? Array.from({ length: 10 }, (_, index) => index).map((item) => <CoffeeCardSkeleton key={item} />)
            : renderProducts.map((item) => (
                <Card key={item.id} className="w-full overflow-hidden" cover={<Image alt="coffee" src={item.poster} width={100} height={200} />} hoverable onClick={() => handleClickDetail(item.id)}>
                  <Card.Meta title={item.title} />
                  <div className="flex justify-end items-center">
                    <p className="text-neutral-800">{formatCurrency(item.price, "id-ID", "IDR")}</p>
                  </div>
                  <Rate disabled defaultValue={item.rating.rate} className="!text-sm" />
                </Card>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
