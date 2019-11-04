import React from 'react'

class Sushi extends React.Component {

  state = {
    eaten: false
  }

  handleClick = () => {
    if (!this.state.eaten){
      if (this.props.eatSushi(this.props.sushi)){
        this.setState({
          eaten: true
        })
      }
    } else {
      alert("You already ate this sushi!")
    } 
  }

  render(){
    const {name, img_url, price} = this.props.sushi
    return (
      <div className="sushi">
        <div className="plate" onClick={this.handleClick} >
          {this.state.eaten ? null : <img src={img_url} alt={name} width="100%" /> }
        </div>
        <h4 className="sushi-details">
          {name} - ${price}
        </h4>
      </div>
    )
  }

  
}

export default Sushi