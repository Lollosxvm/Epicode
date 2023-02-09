import React, { useEffect, useState } from 'react'
import Card from './Card';

const ProductsCard = () => {
    const [productData, setProductData] = useState([])
    console.log(productData);
    const getData = async () => {
        const data = await fetch('https://dummyjson.com/products');
        return await data.json()
    }

    useEffect(() => {
        getData().then(res => setProductData(res.products))
    }, [])

    return (
        <>
        {productData && productData.map((product) => {
            return (
                <Card props={product}/>
            )
        })}
        </>
    )
}

export default ProductsCard