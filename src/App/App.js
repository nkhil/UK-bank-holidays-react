import React, { Component, Fragment } from 'react'

class App extends Component {
  state = {
    holidays: [],
  }

  async componentWillMount() {
    const endpoint = 'https://www.gov.uk/bank-holidays.json'
    const response = await fetch(endpoint)
    const json = await response.json()
    const holidays = json['england-and-wales'].events
    this.setState({ holidays })
  }

  render() {
    return (
      <Fragment>
        {console.log(this.state.holidays[0])}
        <h1>Hello, Jay</h1>
        <ul>
          {this.state.holidays.map(holiday => {
            return (
              <li key={holiday.date}>
                {holiday.date} {holiday.title}
              </li>
            )
          })}
        </ul>
      </Fragment>
    )
  }
}

export default App
