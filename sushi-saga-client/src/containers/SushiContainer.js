import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({sushis, nextFourSushis, eatSushi, eatenSushis}) => {
  return (
    <Fragment>
      <div className="belt">
        {
          sushis.map(sushi => 
            <Sushi key={sushi.id} {...sushi} eatSushi={eatSushi} eatenSushis={eatenSushis}/>
          )
        }
        <MoreButton nextFour={nextFourSushis}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer