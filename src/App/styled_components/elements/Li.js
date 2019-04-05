import styled, { css } from 'styled-components'

const Li = styled.li`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.6;
  text-align: ${props => {
    if (props.center) return 'center'
    if (props.right) return 'right'
    return 'left'
  }};
`

export default Li
