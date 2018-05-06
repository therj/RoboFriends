import React, { Component } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Title from '../components/Title'

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: '',
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users =>
        this.setState({
          robots: users,
        }),
      )
  }

  onSearchChange = event => {
    this.setState({
      searchfield: event.target.value,
    })
  }

  render() {
    const { robots, searchfield } = this.state
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return !robots.length ? (
      <div className="df">
        <Title />
        <p className="tc ma6 mb0 white-90"> Please Wait... </p>{' '}
        <h2 className="tc "> Robo Friends are late! </h2>{' '}
      </div>
    ) : (
      <div className="tc">
        <Title />
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
        <h2> therj ({new Date().getFullYear()}) </h2>
      </div>
    )
  }
}

export default App
