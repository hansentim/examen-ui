import { useNavigate } from 'react-router-dom';
import Toggle from '../components/Toggle';
//Style and animation
import styled from 'styled-components';
import { AnimateSharedLayout } from 'framer-motion';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import { fadeSlow, fade, fadeFaster, fadeSuperFast } from '../animations';

const AnimateTest = () => {
  const navigate = useNavigate();
  //const [element, controls] = useScroll();
  return (
    <AnimatedPage>
      <AnimContainer>
        <ArrowBoxLeft>
          <ArrowButton
            onClick={() => navigate('/test3')}
            whileHover={{ scale: 2, rotate: 360 }}
            className="fas fa-arrow-left fa-2x"
            style={{
              color: '#687a6e',
            }}
          ></ArrowButton>
        </ArrowBoxLeft>
        <StyledAnim
        /*    variants={scrollReveal}
      animate={controls}
      ref={element}
      initial="hidden" */
        >
          <h1>
            Let's test <span>ANIMATION</span> speed!
          </h1>
          <AnimateSharedLayout type="crossfade">
            <Toggle title="1. Superslow fade!">
              <motion.div
                initial="hidden"
                animate="show"
                variants={fadeSlow}
                layout
                className="answer"
              >
                <p>You are 13.8 percent more likely to die on your birthday.</p>
                <p>
                  According to a 2012 study published in the journal Annals of
                  Epidemiology, humans are 13.8 percent more likely to die on
                  their birthday than on any other day of the year. That's
                  according to Swiss mortality statistics from 1969 to 2008.
                  We've got to say, that study is (morbidly) interesting!
                </p>
              </motion.div>
            </Toggle>

            <Toggle title="2. Slow fade!">
              <motion.div
                initial="hidden"
                animate="show"
                variants={fade}
                layout
                className="answer"
              >
                <p>Mulan has the highest kill-count of any Disney character.</p>
                <p>
                  Mulan is fierce, brave, and incredibly inspirational. But
                  she's also incredibly deadly. In fact, she was not only the
                  first Disney princess to kill someone on-screen in the 1998
                  film Mulan, but she also has the highest kill-count of any
                  Disney character, according to UNILAD. Mulan took out nearly
                  2,000 people over the course of the animated film, including
                  the evil Hun leader, Shan Yu, and 1,994 Huns by triggering an
                  avalanche.
                </p>
              </motion.div>
            </Toggle>
            <Toggle title="3. A bit faster!">
              <motion.div
                initial="hidden"
                animate="show"
                variants={fadeFaster}
                layout
                className="answer"
              >
                <p>Pogonophobia is the fear of beards.</p>
                <p>
                  You probably know your fair share of men who sport some sort
                  of facial hair. But if you suffer from pogonophobia—the fear
                  of beards—then you'd rather avoid them. And it turns out, this
                  fear could be justified: A 2018 study published in the journal
                  European Radiology suggests that beards contain "significantly
                  higher" amounts of bacteria than dogs do.
                </p>
              </motion.div>
            </Toggle>
            <Toggle title="4. Superfast!">
              <motion.div
                initial="hidden"
                animate="show"
                variants={fadeSuperFast}
                layout
                className="answer"
              >
                <p>
                  The average adult spends more time on the toilet than they do
                  exercising.
                </p>
                <p>
                  According to a 2017 study by British non-profit UKActive,
                  adults spend an average of 3 hours and 9 minutes on the toilet
                  each week, but only spend around 1 hour and 30 minutes being
                  physically active during that same time span. Maybe this
                  somewhat useless, but also motivating fact is what we needed
                  to hear to get to the gym.
                </p>
              </motion.div>
            </Toggle>
          </AnimateSharedLayout>
        </StyledAnim>
        <ArrowBoxRight>
          <ArrowButton
            onClick={() => navigate('/animationtest2')}
            whileHover={{ scale: 2, rotate: 360 }}
            className="fas fa-arrow-right fa-2x"
            style={{
              color: '#687a6e',
            }}
          ></ArrowButton>
        </ArrowBoxRight>
      </AnimContainer>
    </AnimatedPage>
  );
};

const AnimContainer = styled.div`
  /*   display: flex;
  align-items: center; */
  /*   background-color: tomato;
  height: 100vh;
  display: flex;
  align-items: center; */
`;

const StyledAnim = styled.div`
  min-height: 100vh;
  width: 100vw;
  padding: 10rem 15rem 1rem 15rem;
  background: #e0dbd7;
  margin: auto;
  @media (max-width: 1280px) {
    display: block;
    text-align: center;
    padding-top: 6rem;
  }
  @media (min-width: 1920px) {
    padding: 15rem 15rem 1rem 15rem;
  }
  @media (min-width: 2500px) {
    padding: 20rem 15rem 1rem 15rem;
  }

  display: block;
  span {
    color: #687a6e;
    font-weight: 700;
  }
  h1 {
    color: #525252;
    padding-bottom: 3rem;
    font-weight: 500;
    position: relative;

    @media (max-width: 1280px) {
      padding-bottom: 5rem;
    }
    @media (min-width: 1920px) {
      font-size: 2.5rem;
      padding-bottom: 5rem;
    }
    @media (min-width: 2500px) {
      font-size: 3.5rem;
      padding-bottom: 7rem;
    }
  }
  .faq-line {
    background: #ddb0b1;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
    border-radius: 20px;
  }
  .question {
    color: #525252;
    cursor: pointer;
    @media (min-width: 2500px) {
      font-size: 1.2rem;
    }
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

const ArrowBoxLeft = styled.div`
  position: fixed;
  bottom: 50%;
  left: 80px;
  width: 100px;
`;
const ArrowBoxRight = styled.div`
  position: fixed;
  bottom: 50%;
  right: 0;
  width: 150px;
`;

const ArrowButton = styled(motion.button)`
  padding: 0.5rem 1.2rem;
  border: none;
  background: none;
`;

export default AnimateTest;
