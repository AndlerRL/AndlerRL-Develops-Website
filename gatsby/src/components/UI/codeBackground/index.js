import React from 'react';
import styled, { themeGet } from 'util/styles'
import homeHeroMp4 from 'images/home_hero.mp4'
import homeHeroWebm from 'images/home_hero.webm'
import homeHeroGif from 'images/home_hero.gif'
import homeHeroJpg from 'images/home_hero_fb.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const HomeHeroContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, ${themeGet('colors.blackDepth.500')} 16.666%, transparent 33%);
  z-index: 1;

  + video,
  img {
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

const VideoContainer = styled.video`
  
`

const HomeHero = () => (
  <React.Fragment>
    <div
      style={{ position: 'relative', overflow: 'hidden', height: '66vh', width: '100%' }}
    >
      <HomeHeroContainer />
      <VideoContainer autoPlay loop muted playsInline poster={homeHeroJpg}>
        <source src={homeHeroMp4} type="video/mp4" />
        <source src={homeHeroWebm} type="video/webm" />
        <LazyLoadImage 
          src={homeHeroGif}
          alt="No video supported. Using GIF"
          effect="blur"
        />
      </VideoContainer>
    </div>
  </React.Fragment>
)

export default HomeHero