import React, { PureComponent, Fragment } from 'react'

class HolidayList extends PureComponent {
  render() {
    return (
      <Fragment>
        <h2>
          List of upcoming bank holidays in {new Date().getUTCFullYear()} and{' '}
          {new Date().getUTCFullYear() + 1}
        </h2>
        <ul>
          {this.props.futureHolidays.map(holiday => {
            return this.props.createHolidayList(holiday)
          })}
        </ul>
      </Fragment>
    )
  }
}

export default HolidayList
