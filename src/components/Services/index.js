import React from 'react'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesElements'
import Icon1 from '../../images/sign-up.svg'
import Icon2 from '../../images/breakfast.svg'
import Icon3 from '../../images/love.svg'


const Services = () => {
  return (
    <>
    <ServicesContainer id="services">
     <ServicesH1>How it Works For Partners</ServicesH1>
        <ServicesWrapper> 
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesP> Tend to have leftover food at closing? Create an account with us. </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesP> Have food that can be safely rescued? Create an order from your business hub and specify a time deadline for pick-up. </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesP> Wait for a volunteer to collect your order and boom, you’ve just saved food from being wasted and decreased food insecurity in the Bay Area. Hella nice of you. </ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
    </>
  )
}

export default Services 