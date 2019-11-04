import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
          {props.sushis.slice(props.startIndex, props.startIndex+4)
            .map(sushi => { return <Sushi key={sushi.id}
                                          {...sushi}
                                          eatSushi={props.eatSushi}
                                          sushisEaten={props.sushisEaten} />})}
        <MoreButton moreSushi={props.moreSushiFunction} />
      </div>
    </Fragment>
  )
}

export default SushiContainer