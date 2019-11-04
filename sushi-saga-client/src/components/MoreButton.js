import React from 'react'

const MoreButton = (props) => {
    return <button onClick={() => {
      console.log("CLICK")
      props.serveMoreSushi()
    }}>
            More sushi!
          </button>
}

export default MoreButton