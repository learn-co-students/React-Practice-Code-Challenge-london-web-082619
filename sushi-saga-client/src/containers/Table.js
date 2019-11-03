import React, { Fragment } from 'react'

const Table = ({ dishesEaten, moneyRemaining }) => {

  const renderPlates = () => {
    const plates = []
    for (let i = 0; i < dishesEaten; i++) {
      plates.push(<div key={i} className="empty-plate" style={{ top: -7 * i }}/>);
    }
    return plates;
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${moneyRemaining} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          { renderPlates() }
        </div>
      </div>
    </Fragment>
  )
}

export default Table