import React from 'react'
import data from '../Utils/data.json'
import ProductItem from './ProductItem'

const Home = (props)=>{
    // const { app } = props
return (
    <>
    <div>
        {data.map(item=><ProductItem key={item.id} {...item}/>)}
    </div>
    </>
)

}

export default Home;
