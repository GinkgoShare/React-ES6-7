import React from "react"
import { Link } from "react-router"
import MainContainer from "../containers/MainContainer"

const Home = React.createClass({
  render: function() {
    return (
      <MainContainer>
        <h1>Github Battle</h1>
        <p className="lead">SOME FANCY MOTTO</p>
        <Link to="/playerOne">
          <button type="button" className="btn btn-lg btn-success">Get Started</button>
        </Link>
      </MainContainer>
    )
  }
})

export default Home