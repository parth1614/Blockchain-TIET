import React, {useState} from 'react';
import {Button} from '../ButtonElements';
import {HeroContainer, HeroBg, VideoBg,HeroContent,ArrowForward,ArrowRight,HeroH1,HeroP,HeroBtnWrapper} from './HeroElements.js';
import Video from '../../video/video.mp4';

const HeroSection = () =>{

const [hover,setHover] = useState(false)

const onHover = () => {
  setHover(!hover)
}

  return(
    <HeroContainer>
    <HeroBg >
    <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
    </HeroBg>
    <HeroContent>
    <HeroH1>Explore Blockchain with TIET!</HeroH1>
    <HeroP>
    Want to revolutionize the world with Blockchain? Come aboard & collaborate with us!
    </HeroP>
    <HeroBtnWrapper>
    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' fontBig='true'>
    Get Started {hover ? <ArrowForward /> : <ArrowRight />}
    </Button>
    </HeroBtnWrapper>
    </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;