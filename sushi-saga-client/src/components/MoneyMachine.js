import React from 'react'

class MoneyMachine extends React.Component{

    render(){
        return(
            <div className='mm'>
                MONEY MACHINE
                <form onSubmit={event => this.props.addMoney(event)}>
                    <input type="integer"></input>
                    <button>Add Money</button>
                </form>
            </div>
        )
    }

}

export default MoneyMachine