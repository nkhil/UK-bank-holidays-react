import React, { Component, Fragment } from 'react'
import moment from 'moment'
import Header from './components/Header'
import Holidaylist from './components/HolidayList'
import HolidayItem from './components/HolidayItem'
import Footer from './components/Footer'

// styles and elements
import GlobalStyle from './styled_components/GlobalStyles'
import Container from './styled_components/elements/Container'
import Flex from './styled_components/elements/Flex'

class App extends Component {
  state = {
    futureHolidays: [],
  }

  componentWillMount = async () => {
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
    return moment(string).format('D MMMM')
  }

  returnYear = string => {
    return moment(string).format('YYYY')
  }

  returnDay = string => {
    return moment(string).format('dddd')
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
        <HolidayItem
          key={holiday.date}
          details={holiday}
          formatDate={this.formatDate}
          returnYear={this.returnYear}
          returnDay={this.returnDay}
        />
      )
    }
  }

  render = ()=>  {
    return (
      <Fragment>
        <GlobalStyle />
        {console.log(this.state.futureHolidays)}
        <Container>
          <Flex column contentCenter alignCenter>
            <Header
              futureHolidays={this.state.futureHolidays}
              formatDate={this.formatDate}
            />
            <Holidaylist
              futureHolidays={this.state.futureHolidays}
              createHolidayList={this.createHolidayList}
            />
            <Footer />
          </Flex>
        </Container>
      </Fragment>
    )
  }
}

export default App
