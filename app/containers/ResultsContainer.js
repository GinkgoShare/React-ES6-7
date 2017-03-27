import React from "react"
import Results from "../components/Results"
import { battle } from "../utils/githubHelpers"

const ResultsContainer = React.createClass({
  getInitialState() {
    return {
      scores: [],
      isLoading: true
    }
  },
  async componentDidMount() {
    try {
      const scores = await battle(this.props.location.state.playersInfo)
      this.setState({
        scores,
        isLoading: false
      })
    } catch (err) {
      console.warn("Error in ResultsContainer", err)
    }
  },
  render() {
    return (
      <Results 
        isLoading={this.state.isLoading} 
        scores={this.state.scores} 
        playersInfo={this.props.location.state.playersInfo} />
    )
  }
})

export default ResultsContainer