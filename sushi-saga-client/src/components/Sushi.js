import React, { Fragment } from 'react'

const Sushi = ({name, img_url, price, id, eatSushi, eatenSushis}) => {
  return (
    <Fragment>
      <div className="sushi">
        <div className="plate" 
            onClick={()=>eatSushi(id, price)}>
          { 
            /* Tell me if this sushi has been eaten! */ 
            eatenSushis.includes(id) ?
              null
            :
              <img src={img_url} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {name} - ${price}
        </h4>
      </div>
    </Fragment>
    
  )
}

export default Sushi