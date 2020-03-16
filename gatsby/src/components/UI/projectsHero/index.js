import React from 'react'
import styled, { themeGet } from 'util/styles'
import portrait from 'images/portrait2.jpg'

const ProjectsHeroContainer = styled.div`
  width: 100%;
  height: 66vh;
  background: url(${portrait}) center center no-repeat;
  background-size: cover;
  position: relative;

  > div {
    background: linear-gradient(to top, ${themeGet('colors.blackDepth.500')} 8.333%, ${themeGet('colors.blackDepth.500')}80 50%);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const ProjectsHero = () => (
  <ProjectsHeroContainer>
    <div></div>
  </ProjectsHeroContainer>
)

export default ProjectsHero
