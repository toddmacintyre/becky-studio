import React from 'react';
import posed from 'react-pose';

const Container = posed.div({
  enter: { staggerChildren: 50 }
});

const P = posed.p({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 }
});

const About = () => {
  return (
    <Container>
      <h2 id="heading">About</h2>
      <P>
        Integer et justo vestibulum, aliquet erat sed, accumsan leo. Nullam cursus dolor quis ligula suscipit, a pretium lorem tempor. Aenean sollicitudin purus id elit venenatis posuere. Aliquam erat volutpat. Vestibulum tristique non lacus vel cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat venenatis nunc quis efficitur. Etiam auctor efficitur odio ut blandit. Donec convallis eu lacus quis tincidunt. In at accumsan sem. Integer ac arcu sit amet dui efficitur ultrices. Curabitur maximus libero in lacinia dignissim. Nunc convallis nisi in mauris pharetra, sed lobortis ante porta.
      </P>
      <P>
        Integer et justo vestibulum, aliquet erat sed, accumsan leo. Nullam cursus dolor quis ligula suscipit, a pretium lorem tempor. Aenean sollicitudin purus id elit venenatis posuere. Aliquam erat volutpat. Vestibulum tristique non lacus vel cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat venenatis nunc quis efficitur. Etiam auctor efficitur odio ut blandit. Donec convallis eu lacus quis tincidunt. In at accumsan sem. Integer ac arcu sit amet dui efficitur ultrices. Curabitur maximus libero in lacinia dignissim. Nunc convallis nisi in mauris pharetra, sed lobortis ante porta.
      </P>
      <P>
        Integer et justo vestibulum, aliquet erat sed, accumsan leo. Nullam cursus dolor quis ligula suscipit, a pretium lorem tempor. Aenean sollicitudin purus id elit venenatis posuere. Aliquam erat volutpat. Vestibulum tristique non lacus vel cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat venenatis nunc quis efficitur. Etiam auctor efficitur odio ut blandit. Donec convallis eu lacus quis tincidunt. In at accumsan sem. Integer ac arcu sit amet dui efficitur ultrices. Curabitur maximus libero in lacinia dignissim. Nunc convallis nisi in mauris pharetra, sed lobortis ante porta.
      </P>
    </Container>
  );
};

export default About;
