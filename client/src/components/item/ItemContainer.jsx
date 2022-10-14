import React from 'react'

import './ItemContainer.css'

const ItemContainer = () => {
  return (

    <div id='item' className="item-container">
        <form className="search">
            <div>
                <input type='text' placeholder='Enter Keyword..' />
            </div>
        </form>
        <div>
            {/* Map Here */}
        </div>
    </div>

  )
}

export default ItemContainer