const getSushi = () => {
  return fetch("http://localhost:3000/sushis")
    .then(res => res.json())
}

const API = {
  getSushi: getSushi
}

export default API;