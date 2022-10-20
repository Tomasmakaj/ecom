import React, { useState, useEffect } from 'react'
import Card from '../card/Card';
import './ItemContainer.css'

const ItemContainer = ({user, userCart, setUserCart}) => {

    const [item, setItem] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch('http://localhost:3000/items')
        .then(res => res.json())
        .then(data => setItem(data))
    }, [])

    const filtered = item.filter((item) =>
    item.item_name.toLowerCase().includes(search.toLowerCase())
    );



  return (

    <div id='item' className="item-container">
        <form className="search" onSubmit={(e) => e.preventDefault()}>
            <div>
                <input type='text' placeholder='Enter Keyword..' onChange={(e) => setSearch(e.target.value)} />
            </div>
        </form>
        <div className='cards'>
            {filtered.map((catalogitem=><Card key={catalogitem.id} catalogitem={catalogitem} userCart={userCart} setUserCart={setUserCart} />))}
        </div>
    </div>

  )
}

export default ItemContainer