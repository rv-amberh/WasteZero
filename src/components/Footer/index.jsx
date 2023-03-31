import React from 'react'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialIcons, SocialIconLink, WebsiteRights, SocialLogo} from './FooterElements'
import {FaFacebook, FaYoutube, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

  return (
    <FooterContainer>
        <FooterWrap> 
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> About Us  </FooterLinkTitle>
                            <FooterLink to="/sign-in"> How it Works </FooterLink>
                            <FooterLink to="/sign-in"> Testimonials </FooterLink>
                            <FooterLink to="/sign-in"> Careers </FooterLink>
                            <FooterLink to="/sign-in"> Investors </FooterLink>
                            <FooterLink to="/sign-in"> Careers </FooterLink>
                            <FooterLink to="/sign-in"> Terms of Service </FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> Contact Us  </FooterLinkTitle>
                            <FooterLink to="/sign-in"> How it Works </FooterLink>
                            <FooterLink to="/sign-in"> Testimonials </FooterLink>
                            <FooterLink to="/sign-in"> Careers </FooterLink>
                            <FooterLink to="/sign-in"> Investors </FooterLink>
                            <FooterLink to="/sign-in"> Careers </FooterLink>
                            <FooterLink to="/sign-in"> Terms of Service </FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> About Us  </FooterLinkTitle>
                            <FooterLink to="/sign-in"> How it Works </FooterLink>
                            <FooterLink to="/sign-in"> Testimonials </FooterLink>
                            <FooterLink to="/sign-in"> Careers </FooterLink>
                            <FooterLink to="/sign-in"> Investors </FooterLink>
                            <FooterLink to="/sign-in"> Careers </FooterLink>
                            <FooterLink to="/sign-in"> Terms of Service </FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> Contact Us  </FooterLinkTitle>
                            <FooterLink to="/sign-in"> How it Works </FooterLink>
                            <FooterLink to="/sign-in"> Testimonials </FooterLink>
                            <FooterLink to="/sign-in"> Careers </FooterLink>
                            <FooterLink to="/sign-in"> Investors </FooterLink>
                            <FooterLink to="/sign-in"> Careers </FooterLink>
                            <FooterLink to="/sign-in"> Terms of Service </FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia> 
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}> WasteZero
                    </SocialLogo> 
                    <WebsiteRights> WasteZero © {new Date().getFullYear() } All rights reserved. </WebsiteRights> 
                    <SocialIcons>
                        <SocialIconLink href='//www.facebook.com' target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='//www.Instagram.com' target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href='//www.Twitter.com' target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href='//www.LinkedIn.com' target="_blank" aria-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconLink>
                        <SocialIconLink href='//www.Youtube.com' target="_blank" aria-label="Youtube">
                            <FaYoutube />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer