import React, { useState, useEffect } from 'react'
import NewCard from './NewCard'


const CardContainer = () => {
    const [data, setData] = useState([])
    console.log(data)

    const [productId, setProductId] = useState(1)
    console.log(productId)
    const nextProduct = () => {
        setProductId(productId +1)
    }

    const getData = async () => {
        const product = await fetch(`https://dummyjson.com/products/${productId}`)
        const response = product.json()
        setData(response)
    }

    useEffect(() => {
        getData()
    }, [productId])

    return (
        <div>
            <h1>
                CardContainer
            </h1>¢
            <NewCard title={data.title} description={data.title}/>
            <button onClick={nextProduct}>Prodotto Successivo </button>
        </div>
    )
}

export default CardContainer