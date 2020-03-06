import React from 'react';
import styled, { themeGet } from 'util/styles'
import homeHero from 'images/home_hero.gif'
import Image from 'components/image';

const HomeHeroContainer = styled.div`
  position: relative;
  height: 66vh;
  width: 100%;
  background: url(${homeHero}) bottom center no-repeat;
  background-size: cover;

  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, ${themeGet('colors.blackDepth.500')} 8.333%, transparent 25%);
  }
` 

const HomeHero = () => (
  <HomeHeroContainer>
    <div />
  </HomeHeroContainer>
)

export default HomeHero