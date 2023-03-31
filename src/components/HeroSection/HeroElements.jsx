import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const HeroContainer = styled.div`
background: #fff;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 700px;
position: relative;
z-index: 1;

:before {
 content: '';
 position: absolute;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 background: linear-gradient(180deg, rgba(0, 0, 0, 0.2), 0%, rgba(0, 0, 0, 0.6) 100%), linear-graident(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
 z-index: 2;
}

@media screen and (min-width: 1200px) {
    height: 1000px
}
`

export const HeroBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left:0;
width: 100%;
height: 100%;
overflow: hidden;
`

export const VideoBg = styled.video`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #232a34;
`

export const HeroContent = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
display: flex;
padding: 8px 24px;
flex-direction: column;
align-items: center;
top: 250px;
`

export const HeroH1 = styled.h1`
color: #b1d8b7;
font-size: 48px;
text-align: center;

@media screen and (max-width: 768px) {
    font-size: 40px;
}

@media screen and (max-width: 480px) {
    font-size: 32px;
}
`

export const HeroP = styled.p`
margin-top: 24px;
color: #fff;
font-size: 24px;
text-align: center;
max-width: 600px;
line-height: 1.9rem;

@media screen and (max-width: 768px) {
    font-size: 24px
}

@media screen and (max-width: 480px) {
    font-size: 18px
}
`

export const HeroBtnWrapper = styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
`

export const CurvedArrow = styled.img`
height: 150px;
width: 150px;
z-index: 20;
-webkit-animation: mover 1s infinite  alternate;
    animation: mover 1s infinite  alternate;

    @-webkit-keyframes mover {
        0% { transform: translateY(0); }
        100% { transform: translateY(-10px); }
    }
    @keyframes mover {
        0% { transform: translateY(0); }
        100% { transform: translateY(-10px); }
    }
`

export const LearnMore = styled.small`
font-size: .8rem;
color: #fff;
z-index: 20;
padding: 0;
`

export const MoreContent = styled.div`
display: flex;
flex-direction: column;
position: relative;
top: 270px;
`