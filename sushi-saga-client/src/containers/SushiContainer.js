import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component{
  state ={
    sushisToDisplay: [0,1,2,3]
  }

  getSushisToDisplay = (all, indexes) => all.filter ((sushi,i)=> indexes.includes(i))
  // getSushisToDisplay = (all, indexes) => indexes.map(i => all[i]) // not work because 

  moreSushis = () => this.setState({
    sushisToDisplay: this.state.sushisToDisplay.map(index =>
        index + 4 >= this.props.sushis.length ? (index + 4) - this.props.sushis.length : index + 4
      )
  })

  render(){
    const sushis = this.getSushisToDisplay(this.props.sushis, this.state.sushisToDisplay)
    return (
      <Fragment>
        <div className="belt">
          {
            sushis.map(sushi => <Sushi key={sushi.id} {...sushi} clickHandler={()=> this.props.sushiClickHandler(sushi)}/>)
          }
          <MoreButton clickHandler={this.moreSushis} />
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer