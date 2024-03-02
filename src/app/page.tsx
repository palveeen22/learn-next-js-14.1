'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

type Products = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};


export default function Home() {
  const [products, setProducts] = useState<Products[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products"
        );
        const dataRespon = await response.json();
        setProducts(dataRespon);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [])

  console.log(products, "<<<");



  return (
    <>
      {
        isLoading ? (
          <h3> Loading....</h3 >
        ) : (
          <main className="w-full px-10 py-10">
            <div className="grid grid-cols-6 gap-4">
              {products?.map((product) => {
                return (
                  <div className="bg-gray-700 flex flex-col p-4">
                    <Image
                      src={product.image}
                      alt={product.title}
                      className="object-cover"
                      width={200}
                      height={200}
                      priority
                    />
                    <h3>{product?.title}</h3>
                  </div>
                )
              })}

            </div>
          </main>
        )
      }
    </>


  );
}


