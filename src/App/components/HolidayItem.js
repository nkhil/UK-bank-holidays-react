import React, { PureComponent, Fragment } from 'react'

class HolidayItem extends PureComponent {
  render() {
    const { title, date } = this.props.details
    return (
      <Fragment>
        <li>
          {title} ({this.props.formatDate(date)})
        </li>
      </Fragment>
    )
  }
}

export default HolidayItem
