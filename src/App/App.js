import React, { Component, Fragment } from 'react'
import moment from 'moment'

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

  formatDate = string => {}

  formatSimpleDate = string => {
    return moment(string).format('L')
  }

  isHolidayInFuture = holiday => {
    if (
      Date.parse(this.formatSimpleDate(holiday.date)) > Date.parse(new Date())
    ) {
      return true
    }
    return false
  }
  render() {
    return (
      <Fragment>
        <h1>Hello, Jay</h1>
        {this.state.holidays.map(holiday => {
          if (this.isHolidayInFuture(holiday)) {
            return (
              <li key={holiday.date}>
                {holiday.title} ({moment(holiday.date).format('MMM Do YYYY')})
              </li>
            )
          }
        })}
      </Fragment>
    )
  }
}

export default App
