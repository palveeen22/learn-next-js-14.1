import Image from "next/image";
import { useState } from "react";

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


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-4 gap-4">

      </div>
    </main>
  );
}


{/* <Image
  src="/vercel.svg"
  alt="Vercel Logo"
  className="dark:invert"
  width={100}
  height={24}
  priority
/> */}