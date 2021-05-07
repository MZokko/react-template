import React from 'react';
import {FaFacebook,FaInstagram,FaTwitter,FaLinkedin} from 'react-icons/fa'
import {
  FooterLink,
  FooterLinkTitle,
  FooterLinkItems,
  FooterLinkWrap,
  FooterLinksContainer,
  FooterWrap,
  FooterContainer,
  SocialIconLink,
  SocialMedia,
  SocialMediaWrap,
  ScocialLogo,
  WebSiteRight,
  SocialIcons,
} from './FooterStyle';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinkWrap>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to='signin'>How it works</FooterLink>
              <FooterLink to='signin'>Testamonial</FooterLink>
              <FooterLink to='signin'>Careers</FooterLink>
              <FooterLink to='signin'>Investors</FooterLink>
              <FooterLink to='signin'>Terms of services</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>Contact us</FooterLinkTitle>
              <FooterLink to='signin'>Contacts</FooterLink>
              <FooterLink to='signin'>Support</FooterLink>
              <FooterLink to='signin'>Destination</FooterLink>
              <FooterLink to='signin'>Sponsor</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrap>

          <FooterLinkWrap>
            <FooterLinkItems>
              <FooterLinkTitle>Art Gallery</FooterLinkTitle>
              <FooterLink to='/'>our works</FooterLink>
              <FooterLink to='/'>Ambassador</FooterLink>
              <FooterLink to='/'>Agency</FooterLink>
              <FooterLink to='/'>our Artist</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to='/'>Instagram</FooterLink>
              <FooterLink to='/'>Facebook</FooterLink>
              <FooterLink to='/'>Youtube</FooterLink>
              <FooterLink to='/'>Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrap>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <ScocialLogo to='/'>Zokko</ScocialLogo>
            <WebSiteRight>
              Zokko © {new Date().getFullYear()} all rights reserved.
            </WebSiteRight>
            <SocialIcons>
              <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>

              <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>

              <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                <FaTwitter />
              </SocialIconLink>

              <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
