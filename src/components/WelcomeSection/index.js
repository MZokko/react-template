import React, { useState } from 'react';
import { Button } from '../Button/ButtonStyle';
import {
  WelcomeSectionContainer,
  WelcomeBg,
  VideoBg,
  WelcomeContent,
  WelcomeTitle,
  WelcomeP,
  WelcomeBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './WelcomeSectionStyle';
import Video from '../../videos/video.mp4';

const WelcomeSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <WelcomeSectionContainer>
      <WelcomeBg>
        <VideoBg autoPlay loop muted src={Video} type='/video/mp4' />
      </WelcomeBg>
      <WelcomeContent>
        <WelcomeTitle>Zokko Digital Web Agency</WelcomeTitle>
        <WelcomeP>
          Sign up today and receive $150 voucher to your next project
        </WelcomeP>
        <WelcomeBtnWrapper>
          <Button 
          to='signup' 
          onMouseEnter={onHover} 
          onMouseLeave={onHover}
          primary='true'
          dark='true'>
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </WelcomeBtnWrapper>
      </WelcomeContent>
    </WelcomeSectionContainer>
  );
};

export default WelcomeSection;
