import React from 'react';

import { MainLeft, MainRight } from './Main/Main';
import Techs from './Techs/Techs';
import imgHtml from '../../assets/images/icons/html5_logo.png';
import imgJs from '../../assets/images/icons/js_logo.png';
import imgCss from '../../assets/images/icons/css3_logo.png';

import scss from './Home.scss';

const home = props => (
  <React.Fragment>
    <div className={scss.Bg}></div>
    <div className={'z-depth-1-half ' + scss.Logo}></div>
    <div className={'z-depth-5 ' + scss.HomeHead}>
      <h1>Andler Develops</h1>

      <p className={scss.LeadIn}>
        Evolve, improve, overcome; sounds like a meme, but are things that describes me.
          A full-stack developer full with passion, love and hard work for developing that I love most – 
        websites and, as a hobby, build web games. With arround 2 years on the wild jungle,
        I can tell that only time tells achievements, dreams that turn reality and a vast 
        knowledge is always straight ahead on my way.
      </p>
      <p>
        Robert Lucas has much to offer, such as ability, human touch and eventual jokes. I grew up 
        with technology my whole life, video games has always been part of me, since, I was a kid and I 
        saw Software Engineer as a hobby, but years ago I decided to turn it into a career, a career that 
        sundendly become an escential part of my life with a lot of support of my fiancé, who always walked 
        with me since the beggining of this journey and feels like a dream; doing exactly what I dream of – 
        without knowning it – and with people that I care the most.
      </p>
    </div>
    <div className={'z-depth-5 ' + scss.HomeMain} data-aos={props.dataAos} >
      <h2>What I can bring into the table.</h2>
      <MainLeft img={imgJs}
        tech="javascript"
        firstText=" It's my escencial ability, that I improved on the best ways possible, 
        giving also more than expected. Vanilla Javascript I use the most, and I feel that 
        there is nothing better than that, because I feel that knowing how use correctly 
        with EcmaScript 6 and 7, you can adapt to almost any enviroment of the Javascript Development."
        secText="I like to have a great re-usable code and always try to avoid to be cumbersome 
        and love to be lean with my code. I really like to use React.js and Node.js, also I 
        know how to use the full-stack MEAN development, and I know how thing may or might work, 
        but as I always say, there is a lot to learn and I'm always open to it." />
      <MainRight img={imgCss} 
        tech="css3"
        firstText=" is something that that I really love to use with Materialize UI and 
        Bootstrap 4; combining it with Vanilla JS is always fun and attention to details is 
        what I'm addicted to. I really like to create adaptive websites and sometimes, I see 
        details that maybe someone else don't look commonly, but I do and I do care about it."
        secText="Sass is one of the styling lenguage that I'm interested to use when I can with 
        Webpack – and talking about Webpack – CSS Modules is a summatory of it."/>
      <MainLeft img={imgHtml}
        tech="html5"
        firstText=" is for me, synonymous of organize, due I like to take full avantage of 
        the DOM tags and attributes and always like to be wise while using it. HTML5 is practically 
        a basic for web developing, so there is too much to tell, but I can tell is that I like to be 
        specific with the tags – as I said – and being clear with it, so It can be reusable and 
        easely-read. Using canvas with Konva is what I'm attracted to, and is always fun." />
      <Techs />
    </div>
  </React.Fragment>
);

export default home;