import React from 'react'
import styled, { themeGet } from 'util/styles'
import portrait from 'images/portrait2.jpg'

const ProjectsHeroContainer = styled.div`
  background: linear-gradient(to top, ${themeGet('colors.blackDepth.500')} 8.333%, ${themeGet('colors.blackDepth.500')}80 50%);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  + img {
    height: 100%;
    width: 177.77777778vh; /* 100 * 16 / 9 */
    min-width: 100%;
    min-height: 56.25vw; /* 100 * 9 / 16 */
    position: absolute;
    left: 50%; /* % of surrounding element */
    top: 50%;
    transform: translate(-50%, -66.66%); /* % of current element */
  }
`

const ProjectsHero = () => (
  <div style={{ position: 'relative', overflow: 'hidden', height: '66vh', width: '100%' }}>
    <ProjectsHeroContainer />
    <LazyLoadImage 
      src={portrait}
      effect="blur"
      alt="self-portrait"
    />
  </div>
)

export default ProjectsHero
