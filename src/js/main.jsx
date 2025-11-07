import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

let root = ReactDOM.createRoot(document.getElementById('root'));

let counter = 0

setInterval(() => {
  counter++
  let digit6 = Math.floor(counter % 10)
  let digit5 = Math.floor(counter / 10) % 10
  let digit4 = Math.floor(counter / 100) % 10
  let digit3 = Math.floor(counter / 1000) % 10
  let digit2 = Math.floor(counter / 10000) % 10
  let digit1 = Math.floor(counter / 100000) % 10

  root.render(
    <React.StrictMode>
      <Home digit6={digit6} digit5={digit5} digit4={digit4} digit3={digit3} digit2={digit2} digit1={digit1} />
    </React.StrictMode>,
  )

}, 1000);


