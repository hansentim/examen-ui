import { useNavigate } from 'react-router-dom';
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

const AnimateHeart = () => {
  const navigate = useNavigate();
  return (
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
          <motion.div variants={endFade} className="legend">
            <motion.p /* variants={endFade} */>
              You're a legend! Thank you for saving our grades in school!
            </motion.p>
            <motion.div className="btnBox">
              <motion.button onClick={() => navigate('/')}>HOME</motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </HeartContainer>
    </AnimatedPage>
  );
};

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
  .btnBox {
    display: flex;
    justify-content: center;
  }
  button {
    --color: #3d3d3d;
    font-family: inherit;
    display: inline-block;
    width: 8em;
    height: 2.6em;
    line-height: 2.5em;
    margin: 20px;
    position: relative;
    overflow: hidden;
    border: 2px solid var(--color);
    transition: color 0.5s;
    z-index: 1;
    font-size: 17px;
    border-radius: 6px;
    font-weight: 500;
    color: var(--color);
    background: none;
  }

  button:before {
    content: '';
    position: absolute;
    z-index: -1;
    background: var(--color);
    height: 150px;
    width: 200px;
    border-radius: 50%;
  }

  button:hover {
    color: #fff;
  }

  button:before {
    top: 100%;
    left: 100%;
    transition: all 0.7s;
  }

  button:hover:before {
    top: -30px;
    left: -30px;
  }

  button:active:before {
    background: #df6af8;
    transition: background 0s;
  }
`;

const Heart = styled(motion.div)`
  padding-top: 2rem;
  text-align: center;
`;

export default AnimateHeart;
