"use client";

import ProductDetailSkeleton from "@/components/Skeleton/product-detail-skeleton";
import { useGetProducts } from "@/hooks/useGetProducts";
import { formatCurrency } from "@/utils/formatCurrency";
import { Button, Image, Rate } from "antd";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaCartArrowDown } from "react-icons/fa6";

const ProductDetails = () => {
  const { products, loading, error } = useGetProducts();
  const params = useParams<{ productId: string }>();
  const id = params.productId;

  const productById = products.filter((item) => item.id === id);

  console.log({ productById });
  return (
    <div className="bg-bgPrimary md:mx-16 min-h-screen flex justify-center items-center pt-24 pb-10">
      {loading ? (
        <ProductDetailSkeleton />
      ) : (
        productById.map((item) => (
          <div className="w-full min-h-[80vh] h-full px-6 grid grid-cols-none md:grid-cols-2 gap-6 content-center" key={item.id}>
            <Image src={item.poster} alt="coffee" className="rounded-md !max-h-[500px] overflow-hidden" />
            <div className="pt-6 space-y-4">
              <h5 className="text-3xl">{item.title}</h5>
              <div className="bg-primary p-4 rounded-sm">
                <p>{formatCurrency(item.price, "id-ID", "IDR")}</p>
                <div className="">
                  <Rate disabled defaultValue={item?.rating?.rate} className="!text-base" /> /{item?.rating?.count}Terjual
                </div>
              </div>
              <ul className="space-y-2">
                <li>
                  <span className="font-semibold">Kategori</span> : {item.category}
                </li>
                <li>
                  <span className="font-semibold">Harga</span> : {formatCurrency(item.price, "id-ID", "IDR")}
                </li>
                <li>
                  <span className="font-semibold">Deskripsi</span> : {item.description}
                </li>
              </ul>
              <div className="space-x-4 flex items-center">
                <Button className="bg-primary">Beli Sekarang</Button>
                <Button className="bg-primary flex justify-center items-center gap-2">
                  <FaCartArrowDown /> Beli Sekarang
                </Button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductDetails;
