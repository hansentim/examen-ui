//Components
import AnimatedPage from '../components/AnimatedPage';
//Style & Animation
import { motion } from 'framer-motion';
import styled from 'styled-components';
import heart from '../img/heart-solid.svg';
import bg from '../img/bg.svg';
import {
  heartAnimation,
  endFade,
  pageAnimation,
  titleAnimB,
} from '../animations';

export const AnimateHeart = () => (
  <AnimatedPage>
    <HeartContainer>
      <motion.div
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <motion.div variants={titleAnimB}>
          <Heart animate="show" variants={heartAnimation}>
            {' '}
            <h1>THANK YOU!</h1>
            <img src={heart} alt="heart" />
          </Heart>
        </motion.div>
        <div className="legend">
          <motion.p variants={endFade}>
            You're a legend! Thank you for saving our grades in school!
          </motion.p>
        </div>
      </motion.div>
    </HeartContainer>
  </AnimatedPage>
);

//Styles
const HeartContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  .legend {
    position: relative;
    z-index: 2;
    font-size: 1.5rem;
    font-weight: 600;
  }
  h1 {
    padding-bottom: 1rem;
    color: #3d3d3d;
    font-size: 3rem;
    text-align: center;
    @media (max-width: 1280px) {
      /* font-size: 3rem; */
    }
  }
`;

const Heart = styled(motion.div)`
  padding-top: 2rem;
  text-align: center;
`;

export default AnimateHeart;
