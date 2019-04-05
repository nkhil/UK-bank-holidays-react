import styled, { css } from 'styled-components'

const P = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 1.6;
  margin-top: 0;
  text-align: ${props => {
    if (props.center) return 'center'
    if (props.right) return 'right'
    return 'left'
  }};
`

export default P
