import React, { PureComponent, Fragment } from 'react'
import Li from '../styled_components/elements/Li'

class HolidayItem extends PureComponent {
  render() {
    const { title, date } = this.props.details
    return (
      <Fragment>
        <Li center>
          {title} ({this.props.formatDate(date)})
        </Li>
      </Fragment>
    )
  }
}

export default HolidayItem
