import React from 'react';
import {
  ServicesContainer,
  ServicesTitle,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH4,
  ServicesP,
} from './ServicesStyle';
import icon1 from '../../images/iconSaving.svg';
import icon2 from '../../images/iconUIUX.svg';
import icon3 from '../../images/iconSeo.svg';

const Services = () => {
  return (
    <>
      <ServicesContainer id='services'>
        <ServicesTitle>Our Services</ServicesTitle>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={icon1} />
            <ServicesH4> Reduces expanse </ServicesH4>
            <ServicesP>
              We help reduces the cost of developping online platforms.
            </ServicesP>
          </ServicesCard>

          <ServicesCard>
            <ServicesIcon src={icon2} />
            <ServicesH4> UI/UX </ServicesH4>
            <ServicesP>
              With the collaboration of our designer and developers, we provide
              you the best user interface and experience for your web platform.
            </ServicesP>
          </ServicesCard>

          <ServicesCard>
            <ServicesIcon src={icon3} />
            <ServicesH4> SEO optimisation </ServicesH4>
            <ServicesP>
            reach your audience, with a high ranking web platform on all major search engines. 
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
