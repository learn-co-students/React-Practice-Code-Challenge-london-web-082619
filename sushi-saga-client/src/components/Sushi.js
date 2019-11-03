import React from 'react'

const Sushi = ({sushi, eatDish, moneyRemaining}) => {

  const handleClick = () => {
    if (moneyRemaining >= sushi.price) {
      eatDish(sushi);
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        { sushi.eaten ? null : <img src={sushi.img_url} width="100%" /> }
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )

}

export default Sushi