import posed from 'react-pose';

const Container = posed.div({
  enter: { staggerChildren: 50 },
});

const P = posed.p({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 },
});

export {
  Container,
  P,
};
