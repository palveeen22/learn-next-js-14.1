import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Product } from '../page';

const Page = ({ params }: { params: { id: number } }) => {
    // Mengubah slug dengan mengganti persen (%) dan angka 20 dengan tanda hubung (-)
    // const modifiedSlug = params.slug.replace(/%20|%+/g, "-");

    const productId = params.id


    // const { data: product, isLoading } = useQuery<Product>({
    //     queryKey: ['product', productId],
    //     queryFn: () => fetch(`https://fakestoreapi.com/products/${productId}`).then((resp) =>
    //         resp.json()),
    // });

    // console.log(product, "<<<<<<");
    return (
        <>
            <div>page</div>
            <div>My Post: {productId}</div>
        </>
    );
};

export default Page;
