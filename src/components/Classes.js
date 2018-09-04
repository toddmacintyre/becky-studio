import React from 'react';
import { Parallax } from 'react-parallax';
import Image from '../assets/bridegroom-business-businessman-8115.jpg';
import { P } from './Posed';

const Classes = () => {
  return (
    <Parallax
      blur={0}
      bgImage={Image}
      bgImageAlt="the cat"
      strength={300}
    >
      <h2 id="heading">Classes</h2>
      <P>
        Integer et justo vestibulum, aliquet erat sed, accumsan leo. Nullam cursus dolor quis ligula suscipit, a pretium lorem tempor. Aenean sollicitudin purus id elit venenatis posuere. Aliquam erat volutpat. Vestibulum tristique non lacus vel cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat venenatis nunc quis efficitur. Etiam auctor efficitur odio ut blandit. Donec convallis eu lacus quis tincidunt. In at accumsan sem. Integer ac arcu sit amet dui efficitur ultrices. Curabitur maximus libero in lacinia dignissim. Nunc convallis nisi in mauris pharetra, sed lobortis ante porta.
      </P>
    </Parallax>
  );
};

export default Classes;
