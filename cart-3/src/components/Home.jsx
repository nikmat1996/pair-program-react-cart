import React from 'react'
import data from '../Utils/data.json'
import ProductItem from './ProductItem'

const Home = (props)=>{
    const { handlers } = props
    const handleClick = (id) => {
        let item  = data.find(it => it.id === Number(id))
        handlers.addToCart(item)
    }
return (
    <>
    <div>
        {data.map(item=><ProductItem key={item.id} {...item} handleClick= {handleClick}/>)}
    </div>
    </>
)

}

export default Home;
