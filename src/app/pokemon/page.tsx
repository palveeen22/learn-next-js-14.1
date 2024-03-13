'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

export interface Pokemon {
    name: string
    url: string
};


export interface ResponPoke {
    count: number
    next: string
    previous: null
    results: Pokemon[]
}


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
    // const { data: pokemons, isLoading } = useQuery<ResponPoke>({
    //     queryKey: ['pokemons'],
    //     queryFn: () => fetch('https://pokeapi.co/api/v2/ability').then((resp) => resp.json()),
    // })

    const { data: products, isLoading } = useQuery<TProduct[]>({
        queryKey: ['products'],
        // Mengambil data dari endpoint yang sesuai
        queryFn: () => fetch('https://fakestoreapi.com/products').then((resp) => resp.json()),
    });

    // Assuming pokemons is an object containing the API response

    // console.log(pokemons?.results, "<<<<");
    // const list = pokemons?.results
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                {products?.map((data) => {
                    return (
                        <SwiperSlide>
                            <Link href={`/pokemon/${data.title}`}>
                                <div className='p-2 flex flex-col items-center'>
                                    <Image
                                        src={data?.image}
                                        alt={data?.title}
                                        className="object-cover"
                                        width={50}
                                        height={50}
                                        priority
                                    />
                                    <p>{data?.title}</p>
                                </div>
                            </Link>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default page