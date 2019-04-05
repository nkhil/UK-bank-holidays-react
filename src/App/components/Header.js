import React, { PureComponent, Fragment } from 'react'

class Header extends PureComponent {
  render() {
    return (
      <Fragment>
        <p>The next bank holiday is in</p>
        <h1>
          {this.props.futureHolidays.length !== 0
            ? `${this.props.futureHolidays[0].title} (${this.props.formatDate(
                this.props.futureHolidays[0].date
              )})`
            : 'Loading...'}
        </h1>
      </Fragment>
    )
  }
}

export default Header
