import { motion } from 'framer-motion';
import styled from 'styled-components';
import heart from '../img/heart-solid.svg';

export const MyComponent = () => (
  <HeartContainer>
    <Heart
      animate={{
        scale: [1, 2, 2, 1, 1],
        /* rotate: [0, 0, 360, 360, 0], */
      }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1,
      }}
    >
      {' '}
      <h1>THANK YOU!</h1>
      <img src={heart} alt="heart" />
    </Heart>
  </HeartContainer>
);

const HeartContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60vh;
  margin: 4rem auto;
  h1 {
    padding-bottom: 1rem;
    color: #3d3d3d;
  }
`;

const Heart = styled(motion.div)``;

export default MyComponent;
