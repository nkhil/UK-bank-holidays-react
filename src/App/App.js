import React, { Component, Fragment } from 'react'
import moment from 'moment'
import Header from './components/Header'
import Holidaylist from './components/HolidayList'
import GlobalStyle from './styled_components/GlobalStyles'

class App extends Component {
  state = {
    futureHolidays: [],
  }

  async componentWillMount() {
    const endpoint = 'https://www.gov.uk/bank-holidays.json'
    const response = await fetch(endpoint)
    const json = await response.json()
    const holidays = json['england-and-wales'].events
    const futureHolidays = this.holidaysInTheFuture(holidays)
    this.setState({ futureHolidays })
  }

  holidaysInTheFuture = holidays => {
    const futureHolidays = []
    holidays.map(holiday =>
      this.checkIfHolidayIsInFuture(holiday) ? futureHolidays.push(holiday) : ''
    )
    return futureHolidays
  }

  formatDate = string => {
    return moment(string).format('MMM Do, YYYY')
  }

  checkIfHolidayIsInFuture = holiday => {
    if (Date.parse(holiday.date) > Date.parse(new Date())) {
      return true
    }
    return false
  }

  createHolidayList = holiday => {
    if (this.checkIfHolidayIsInFuture(holiday)) {
      return (
        <li key={holiday.date}>
          {holiday.title} ({this.formatDate(holiday.date)})
        </li>
      )
    }
  }

  render() {
    return (
      <Fragment>
        {console.log(this.state.futureHolidays)}
        <GlobalStyle />
        <Header
          futureHolidays={this.state.futureHolidays}
          formatDate={this.formatDate}
        />
        <Holidaylist
          futureHolidays={this.state.futureHolidays}
          createHolidayList={this.createHolidayList}
        />
      </Fragment>
    )
  }
}

export default App
