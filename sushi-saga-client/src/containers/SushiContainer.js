import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushi.map(sushi => < Sushi sushi={sushi} key={sushi.id} eatSushi={props.eatSushi}/>)}
        < MoreButton 
          serveMoreSushi={props.serveMoreSushi}
        />
      </div>
    </Fragment>
  )
}

export default SushiContainer