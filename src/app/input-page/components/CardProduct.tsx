import Image from 'next/image'
import React from 'react'

interface IProps {
    product: TProduct;
    // deleteProduct: (id: number) => Promise<void>;
}

const CardProduct = ({ product }: IProps) => {
    return (
        <div key={product?.id}>
            <Image
                src={product?.image}
                alt={product?.title}
                className="object-cover"
                width={200}
                height={200}
                priority
            />
            <div>{product?.title}</div>
        </div>
    )
}

export default CardProduct