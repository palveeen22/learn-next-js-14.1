'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

export interface Pokemon {
    name: string
    url: string
};


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';

const page = () => {
    const { data: pokemons, isLoading } = useQuery<Pokemon[]>({
        queryKey: ['pokemons'],
        queryFn: () => fetch('https://pokeapi.co/api/v2/ability').then((resp) => resp.json()),
    })


    console.log(pokemons, "<<<<");
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
            </Swiper>
        </div>
    )
}

export default page