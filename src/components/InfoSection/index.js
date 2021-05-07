import React from 'react';
import { Button } from '../Button/ButtonStyle';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  InfoColumn1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  InfoColumn2,
  ImgWrap,
  Img,
} from './InfoSectionStyle';

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <InfoColumn1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to='home'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={primary ? 1: 0}
                    dark={dark?1:0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </InfoColumn1>
            <InfoColumn2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </InfoColumn2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
