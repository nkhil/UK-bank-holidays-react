import React, { PureComponent, Fragment } from 'react'
import Heading from '../styled_components/elements/Heading'
import P from '../styled_components/elements/P'
import DropShadowContainer from '../styled_components/elements/DropShadowContainer'

class Header extends PureComponent {
  render() {
    return (
      <Fragment>
        <DropShadowContainer>
          <P center>The next bank holiday is on</P>
          <Heading center>
            {this.props.futureHolidays.length !== 0
              ? `${this.props.formatDate(this.props.futureHolidays[0].date)} (${
                  this.props.futureHolidays[0].title
                })`
              : 'Loading...'}
          </Heading>
        </DropShadowContainer>
      </Fragment>
    )
  }
}

export default Header
