import Video from '../../videos/sampleVideo.mp4'
import  {HeroContainer, MoreContent, CurvedArrow, LearnMore, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import {useState} from 'react';
import {Button} from '../ButtonElement.jsx'
import arrow from '../../images/curved-arrow.png'


const HeroSection = ({primary, dark, dark2}) => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HeroContainer id='home'>
        <HeroBg> 
        <div class="overlay"></div>
         <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
          </HeroBg>
            <HeroContent> 
             <HeroH1> #hellafoodsaved </HeroH1>
              <HeroP>Create an account today and join the mission to prevent food waste and insecurity.</HeroP>
            <HeroBtnWrapper> 
             <Button to='services' primary={1} onMouseEnter={onHover}>
           Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
       </HeroContent> 
       <MoreContent>
         <LearnMore> Scroll to learn more about bringing tech + social good together. </LearnMore>
         <CurvedArrow src={arrow} alt="" /> 
        </MoreContent>
    </HeroContainer>
  )
}

export default HeroSection