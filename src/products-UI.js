import React from 'react'
import { podList } from './products'
import './products.css'

const Products = () => {
  return (
    <div className='main_div'>

    {
        podList.map((item)=>{
            return(
        <div key={item.id} className='div-card'>

             <div  className='cards'>
                    <img src={item.image} alt =""/>
                    <div className='card-body'>
                <p>{item.brand}</p>
                <p>Price: {item.price}Rs</p>
                <p>{item.discription}</p>

                    </div>
            </div>
</div>
                )

})

}
</div>
  )
}

export default Products
