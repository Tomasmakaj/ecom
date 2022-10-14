import React from 'react'
import './Card.css'

const Card = ({catalogitem, userCart, setuserCart}) => {
    let handleClick=(e)=>{
        setuserCart([
            ...userCart,
            {
                item_name: catalogitem.item_name,
                price: catalogitem.price,
                image: catalogitem.image,
                checked_out: false
            },
        ])
    }
  
  return (
    <div  onClick={handleClick} className='catalog'>
    <img className="img" name="image" value={catalogitem.image} src={catalogitem.image} />
    <div className="space">
      <h4><b name="order_item" value={catalogitem.item_name}>{catalogitem.item_name}</b></h4>
      <p name="price" value={catalogitem.price}> $ {catalogitem.price}</p>
    </div>
    <p>
      <button value={catalogitem.id}>Add to Cart</button>
    </p>
</div>
  )
}

export default Card