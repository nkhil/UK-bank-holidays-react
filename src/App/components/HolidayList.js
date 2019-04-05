import React, { PureComponent, Fragment } from 'react'
import Heading from '../styled_components/elements/Heading'

class HolidayList extends PureComponent {
  render() {
    return (
      <Fragment>
        <Heading h3 center>
          List of upcoming bank holidays in {new Date().getUTCFullYear()} and{' '}
          {new Date().getUTCFullYear() + 1}
        </Heading>
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
