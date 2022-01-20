import { motion } from 'framer-motion';
import styled from 'styled-components';
import heart from '../img/heart-solid.svg';
import { heartAnimation } from '../animations';

export const AnimateHeart = () => (
  <HeartContainer>
    <Heart animate="show" variants={heartAnimation}>
      {' '}
      <h1>THANK YOU!</h1>
      <img src={heart} alt="heart" />
    </Heart>
  </HeartContainer>
);

//Style
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

const Heart = styled(motion.div)`
  padding-top: 2rem;
`;

export default AnimateHeart;
