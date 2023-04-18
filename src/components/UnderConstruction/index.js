import React from 'react'
import {Title, Subtitle, Logo,  TextContainer, Return} from './UnderElements'
import logo from '../../images/wasteGreen.png'

const UnderConstruction = () => {
  return (
    <TextContainer>
    <Title> Whoops...we're still working on this! </Title>
    <Subtitle> Our team can't wait to unveil our system, but good things take time. Check back in a few months for launch information.</Subtitle>
    <Logo src={logo} />
    <a href='/'>
    <Return> Return Home </Return>
    </a>
    </TextContainer>
  )
}

export default UnderConstruction
