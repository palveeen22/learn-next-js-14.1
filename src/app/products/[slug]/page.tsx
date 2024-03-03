import React from 'react';

const Page = ({ params }: { params: { slug: string } }) => {
    // Mengubah slug dengan mengganti persen (%) dan angka 20 dengan tanda hubung (-)
    const modifiedSlug = params.slug.replace(/%20|%+/g, "-");

    return (
        <>
            <div>page</div>
            <div>My Post: {modifiedSlug}</div>
        </>
    );
};

export default Page;
