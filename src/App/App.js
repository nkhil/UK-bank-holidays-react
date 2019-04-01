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

  formatDate = string => {
    return moment(string).format('MMM Do YYYY')
  }

  isHolidayInFuture = holiday => {
    if (Date.parse(holiday.date) > Date.parse(new Date())) {
      return true
    }
  }

  render() {
    return (
      <Fragment>
        <h1>UK Bank Holidays</h1>
        {this.state.holidays.map(holiday => {
          if (this.isHolidayInFuture(holiday)) {
            return (
              <li key={holiday.date}>
                {holiday.title} ({this.formatDate(holiday.date)})
              </li>
            )
          }
        })}
      </Fragment>
    )
  }
}

export default App
