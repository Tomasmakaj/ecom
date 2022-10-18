import React, { useState, useEffect } from 'react'
import Card from '../card/Card';
import './ItemContainer.css'

const ItemContainer = ({filter, setFilter, filtered, user, userCart, setUserCart}) => {

    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/items')
        .then(res => res.json())
        .then(data => setItem(data))
    }, [])

    // let handleChange = (e) => {
    //     setFilter(e.target.value);
    //   };


  return (

    <div id='item' className="item-container">
        <form className="search" onSubmit={(e) => e.preventDefault()}>
            <div>
                <input type='text' placeholder='Enter Keyword..' value={filter} onChange={(e) => setFilter(e.target.value)} />
            </div>
        </form>
            <div className='options'>
                <button className='btn'>All</button>
                <button className='btn'>Shoes</button>
                <button className='btn'>Collectibles</button>
                <button className='btn'>Electronics</button>
            </div>
        <div className='cards'>
            {item.map((catalogitem=><Card key={catalogitem.id} catalogitem={catalogitem} userCart={userCart} setUserCart={setUserCart} />))}
        </div>
    </div>

  )
}

export default ItemContainer