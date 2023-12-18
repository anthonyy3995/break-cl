import React from 'react'

import "../style/Home.css"

import Nav from "../components/Nav.js"
// import Option from "../components/Option.js"


const Home = () => {

  // const Option = () => {
  //   return (
  //     <a className="option" to="#leaderboard" />
  //   )
  // }

  return (

    <div>
      <div className="Home">
        <Nav/>
        <div className="title">Break Champion League</div>
        {/* <div className="options">
          <Option />
          <Option />
          <Option />
          <Option />

        </div> */}
      </div>

    </div>
    
  )
}

export default Home