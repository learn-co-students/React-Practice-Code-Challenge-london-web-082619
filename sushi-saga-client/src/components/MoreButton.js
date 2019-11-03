import React from 'react'

const MoreButton = ({ incrementCurrentPage }) => {
    return (
      <button onClick={incrementCurrentPage}>
        More sushi!
      </button>
    );
}

export default MoreButton