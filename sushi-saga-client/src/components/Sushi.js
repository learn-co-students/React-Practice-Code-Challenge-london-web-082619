import React from 'react'

const Sushi = ({id, name, img_url, price, eatSushi, sushisEaten}) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => eatSushi(id, price)}>
        
          {sushisEaten.includes(id) ?
            null
          : 
            <img alt={id} src={img_url} width="100%" />
          }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi