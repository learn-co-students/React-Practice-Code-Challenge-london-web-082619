import React, { Fragment } from 'react'
import Sushi from "../components/Sushi"
import MoreButton from '../components/MoreButton'
import SETTINGS from "../settings"

const SushiContainer = props => {

  const getVisibleSushi = () => {
    const currentIndex = props.currentPage * SETTINGS.pageSize;
    const finishIndex = currentIndex  + SETTINGS.pageSize
    return props.allSushi.slice(currentIndex, finishIndex);
  }

  return (
    <Fragment>
      <div className="belt">
        {getVisibleSushi().map(sushi => {
          return(
            <Sushi
              key={sushi.id}
              sushi={sushi}
              eatDish={props.eatDish}
              moneyRemaining={props.moneyRemaining}
            />
          );
        })}
        <MoreButton incrementCurrentPage={props.incrementCurrentPage} />
      </div>
    </Fragment>
  )

}

export default SushiContainer;