import { Button } from '@material-ui/core'
import styled, { themeGet } from 'util/styles'

/**
 * 
 * backgroundcolor is an array,
 * and goes from the lightest to the darkest.
 * usage:
 *    <Btn
 *      backgroundcolor={['colors.primary.200', 'colors.primary.400']}
 *      variant="contained"
 *    >
 *      Button Label
 *    </Btn>
 * 
 * Many variations can be created depending of the content.
 * I suggest to use regular colors, from 200 to 700 with
 * 2 colors ahead, just shown as the example above.
 * 
 * PD: Made this note for self-help... I love myself :)
 * 
 */

export const Btn = styled(Button)`
  font-weight: ${themeGet('fontWeights.regular')} !important;
  letter-spacing: 1px !important;
  color: #212121 !important;
  padding: 8px 18px !important;
  border-radius: calc(${themeGet('radii.4')}px * 2) !important;
  transition: all 0.15s cubic-bezier(0.785, 0.135, 0.15, 0.86) !important;

  a {
    color: #212121 !important;
    text-decoration: none;
  }
  
  &[variant="contained"],
  &.MuiButton-contained {
    background: linear-gradient(
      45deg,
      ${({ backgroundcolor }) => backgroundcolor && themeGet(backgroundcolor[0])} 8.333%, 
      ${({ backgroundcolor }) => backgroundcolor && themeGet(backgroundcolor[1])} 83.333%
    ) !important;
  }

  &:hover {
    transform: scale(1.05);
  }
`
