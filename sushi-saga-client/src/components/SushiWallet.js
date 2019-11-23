import React, {Fragment} from 'react'

export default class SushiWallet extends React.Component {
    state ={
        funds: ''
    }
    addFunds = () => {
        this.props.addFunds(this.state.funds)
        this.setState({funds: ''})
    }
    render() {
        return (
            <Fragment>
                <input type='number' onChange={(e) => this.setState({funds: e.target.value})} value={this.state.funds} />
                <button onClick={this.addFunds}>Add funds!</button>
            </Fragment>
        )
    }
}
