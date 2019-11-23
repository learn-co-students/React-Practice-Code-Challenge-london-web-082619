import React, { Fragment } from 'react'

const Sushi = ({name, img_url, price, id, clickHandler, isEaten}) => {
  return (
    <div className="sushi">
      <div className="plate" 
        onClick={clickHandler}
           >
        { 
          /* Tell me if this sushi has been eaten! */ 
          isEaten ?
            null
          :
            <img src={img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi