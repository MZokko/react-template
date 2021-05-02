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

const InfoSection = () => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <InfoColumn1>
              <TextWrapper>
                <TopLine>TopLine</TopLine>
                <Heading>Heading</Heading>
                <Subtitle>Subtitle</Subtitle>
                <BtnWrap>
                  <Button to='home'>Button</Button>
                </BtnWrap>
              </TextWrapper>
            </InfoColumn1>
            <InfoColumn2>
              <ImgWrap>
                <Img />
              </ImgWrap>
            </InfoColumn2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
