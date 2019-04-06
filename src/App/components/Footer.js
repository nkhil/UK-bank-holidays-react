import React, { PureComponent, Fragment } from 'react'
import { Link } from 'react-router-dom'
import FooterContainer from '../styled_components/elements/FooterContainer'
import Heading from '../styled_components/elements/Heading'
import P from '../styled_components/elements/P'
import Emoji from 'a11y-react-emoji'

class Footer extends PureComponent {
  render() {
    return (
      <Fragment>
        <FooterContainer>
          <Heading h5 center>
            Made with <Emoji symbol="❤️" label="love" /> by{' '}
            <a target="_blank" href="http://nikhilvijayan.com">
              Nikhil Vijayan
            </a>{' '}
            <Emoji symbol="👋" label="wave" />
          </Heading>
          <P center>
            Source code available{' '}
            <a
              target="_blank"
              href="www.github.com/nkhil/UK-bank-holidays-react://nikhilvijayan.com"
            >
              here
            </a>
            .
          </P>
        </FooterContainer>
      </Fragment>
    )
  }
}

export default Footer
