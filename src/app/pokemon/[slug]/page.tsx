import React from 'react'

const page = ({ params }: { params: { slug: string } }) => {
    const modifiedSlug = params.slug.replace(/%20|%+/g, "-");

    return (
        <div>Product name : {modifiedSlug}</div>
    )
}

export default page