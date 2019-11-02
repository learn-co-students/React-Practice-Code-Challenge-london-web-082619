import React, { Fragment } from 'react'

const Sushi = (props) => {
  const { id, img_url, name, price, eaten } = props.sushi

  const handleClick = () => {
    props.eat(id)
  }

  const image = props.eaten.includes(id) ? null : <img src={img_url} width="100%" />

  return (
    < div className="sushi" >
      <div className="plate" onClick={handleClick}>
        {image}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div >
  )
}

export default Sushi