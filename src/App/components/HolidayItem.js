import React, { PureComponent, Fragment } from 'react'
import Li from '../styled_components/elements/Li'

class HolidayItem extends PureComponent {
  render() {
    const { title, date } = this.props.details
    return (
      <Fragment>
        <tr>
          <td>{this.props.formatDate(date)}</td>
          <td>{this.props.returnYear(date)}</td>
          <td>{this.props.returnDay(date)}</td>
          <td>{title}</td>
        </tr>
      </Fragment>
    )
  }
}

export default HolidayItem
