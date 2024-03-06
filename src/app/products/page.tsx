'use client'
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';

export interface Product {
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

const Page = () => {
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ['products'],
    // Mengambil data dari endpoint yang sesuai
    queryFn: () => fetch('https://fakestoreapi.com/products').then((resp) => resp.json()),
  });

  return (
    <div>
      <h1 className='text-4xl'>Lists</h1>
      <h2 className='text-xl text-muted'>Lists you have created</h2>
      <Link href={'/create-product'}>
        <button className=" border border-white rounded p-3">Create</button>
      </Link>
      {isLoading && (
        <div>Loading</div>
      )}
      {!isLoading && (
        <div className='w-full flex'>
          <div className='grid grid-cols-4 gap-4'>
            {products?.map((product: Product) => (
              <Link href={`/products/${product?.id}`}>
                <div key={product?.id}>
                  <Image
                    src={product.image}
                    alt={product.title}
                    className="object-cover"
                    width={200}
                    height={200}
                    priority
                  />
                  <div>{product?.title}</div>
                </div>
              </Link>

            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
