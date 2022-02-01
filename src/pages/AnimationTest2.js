import { useNavigate } from 'react-router-dom';
//Style and animation
import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import {
  titleAnim,
  fade,
  pageAnimation,
  fadeFaster,
  pageAnimationB,
  titleAnimB,
} from '../animations';

const AnimationTest2 = () => {
  const navigate = useNavigate();
  return (
    <AnimatedPage>
      <StyledAnimTwoContainer>
        <ContainerA>
          <div className="boxA">
            <div className="letterBox">A</div>
            <motion.div
              variants={pageAnimation}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <motion.div>
                <motion.h2 className="one" variants={titleAnim}>
                  'Cause I'm an Island Boy
                </motion.h2>

                <motion.h2 className="two" variants={titleAnim}>
                  I'ma keep it, I’ma Island Boy
                </motion.h2>

                <motion.h2 className="three" variants={titleAnim}>
                  You gon' see me, I'm an Island Boy
                </motion.h2>

                <motion.h2 className="four" variants={titleAnim}>
                  I’ma do it like an Island Boy
                </motion.h2>

                <motion.h2 className="five" variants={titleAnim}>
                  Oh boy
                </motion.h2>

                <motion.h2 className="six" variants={titleAnim}>
                  'Cause I'm an Island Boy
                </motion.h2>
              </motion.div>
              <motion.button
                className="cta"
                variants={fadeFaster}
                onClick={() => navigate('/animationtest')}
              >
                <span>Go Back</span>
              </motion.button>
            </motion.div>
          </div>
        </ContainerA>
        <ContainerB>
          <div className="boxB">
            <div className="letterBox">B</div>
            <motion.div
              variants={pageAnimationB}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <motion.div>
                <motion.h2 className="one" variants={titleAnimB}>
                  'Cause I'm an Island Boy
                </motion.h2>

                <motion.h2 className="two" variants={titleAnimB}>
                  I'ma keep it, I’ma Island Boy
                </motion.h2>

                <motion.h2 className="three" variants={titleAnimB}>
                  You gon' see me, I'm an Island Boy
                </motion.h2>

                <motion.h2 className="four" variants={titleAnimB}>
                  I’ma do it like an Island Boy
                </motion.h2>

                <motion.h2 className="five" variants={titleAnimB}>
                  Oh boy
                </motion.h2>

                <motion.h2 className="six" variants={titleAnimB}>
                  'Cause I'm an Island Boy
                </motion.h2>
              </motion.div>

              <motion.button
                className="cta"
                variants={fadeFaster}
                onClick={() => navigate('/thanks')}
              >
                <span>I'm Done</span>
                <svg width="15px" height="10px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </motion.button>
            </motion.div>
          </div>
        </ContainerB>
      </StyledAnimTwoContainer>
    </AnimatedPage>
  );
};

const StyledAnimTwoContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;

  margin: 0 auto;
  .one,
  .two,
  .three,
  .four,
  .five,
  .six,
  .seven {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 8vh;
    width: 40vw;
    border-radius: 50px;

    /* padding: 0 2rem; */
    margin-bottom: 0.5rem;
  }
  /* From cssbuttons.io by @alexmaracinaru */
  .cta {
    position: relative;
    margin: auto;
    padding: 12px 18px;
    transition: all 0.2s ease;
    border: none;
    background: none;
    margin-top: 2rem;
  }

  .cta:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 50px;
    background: #b7b7a4;
    width: 47px;
    height: 47px;
    transition: all 0.3s ease;
  }

  .cta span {
    position: relative;
    font-family: 'Ubuntu', sans-serif;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.05em;
    color: #46493b;
  }

  .cta svg {
    position: relative;
    top: 0;
    margin-left: 10px;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: #46493b;
    stroke-width: 2;
    transform: translateX(-5px);
    transition: all 0.3s ease;
  }

  .cta:hover:before {
    width: 100%;
    background: #b7b7a4;
  }

  .cta:hover svg {
    transform: translateX(0);
  }

  .cta:active {
    transform: scale(0.95);
  }
`;

const ContainerA = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: #e0dbd7;
  color: #2c2c2c;
  .letterBox {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    background: none;
    border: 3px solid #6b705c;
    color: #6b705c;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 5px;
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
  }
  .one {
    background-color: #cb997e;
  }
  .two {
    background-color: #ddbea9;
  }
  .three {
    background-color: #ffe8d6;
  }
  .four {
    background-color: #b7b7a4;
  }
  .five {
    background-color: #a5a58d;
  }
  .six {
    background-color: #6b705c;
  }
`;

const ContainerB = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: #e0dbd7;
  color: #2c2c2c;
  border-left: 2px solid #6b705c;
  .letterBox {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    background: none;
    border: 3px solid #6b705c;
    color: #6b705c;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 5px;
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
  }
  .one {
    background-color: #cb997e;
  }
  .two {
    background-color: #ddbea9;
  }
  .three {
    background-color: #ffe8d6;
  }
  .four {
    background-color: #b7b7a4;
  }
  .five {
    background-color: #a5a58d;
  }
  .six {
    background-color: #6b705c;
  }
`;

export default AnimationTest2;
