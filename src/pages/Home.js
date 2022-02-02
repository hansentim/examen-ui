import { useNavigate } from 'react-router-dom';
//Styles
import styled from 'styled-components';
import AnimatedPage from '../components/AnimatedPage';

const Home = () => {
  const navigate = useNavigate();
  return (
    <AnimatedPage>
      <StyledContainer>
        <Hero>
          <h3>WELCOME.</h3>
          <h1>LET'S GET SH*T DONE!</h1>
          <p>
            We are grateful that you can take a moment of your time to answer
            some of our questions. This research will be for our exam and to
            start, simply press the “Start” button and follow the Google Form.
          </p>
          <button onClick={() => navigate('/test1')}>LET'S START!</button>
        </Hero>
      </StyledContainer>
    </AnimatedPage>
  );
};

//Styles
const StyledContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  width: 90vw;
  height: 90vh;
  color: #525252;
  margin: auto;
  @media (min-width: 2500px) {
    padding-top: 5rem;
  }
`;
const Hero = styled.div`
  width: 50vw;
  height: 50vh;
  text-align: center;
  padding: 3rem;
  //Animera titel med gradients
  h1 {
    background: radial-gradient(
      circle,
      rgba(74, 198, 210, 1) 0%,
      rgba(223, 106, 248, 1) 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    background-size: 400%;
    animation: gradient 5s linear infinite alternate;
    font-size: 2.8rem;
    font-weight: 700;
    letter-spacing: 1.5px;
    padding-bottom: 0.6rem;
    @keyframes gradient {
      0% {
        background-position: 0%;
      }
      100% {
        background-position: 100%;
      }
    }
    @media (min-width: 2500px) {
      font-size: 3.5rem;
    }
  }
  h3 {
    font-size: 1.4rem;
    font-weight: 600;
    padding-bottom: 1rem;
    @media (min-width: 2500px) {
      font-size: 2rem;
    }
  }
  p {
    font-size: 1.2rem;
    font-weight: 500;
    padding: 1rem 3rem 5rem 3rem;
    line-height: 1.3;
    @media (min-width: 2500px) {
      font-size: 1.5rem;
    }
  }
  button {
    padding: 1.1em 2.8em;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-weight: 600;
    color: #fdfdfd;
    background-color: #df6af8;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    @media (min-width: 2500px) {
      padding: 1.3em 3em;
      font-size: 1.2rem;
    }
  }
  button:hover {
    background-color: #8e0ea9;
    box-shadow: 0px 15px 20px rgba(142, 14, 169, 0.4);
    color: #fdfdfd;
    transform: translateY(-7px);
  }
  button:active {
    transform: translateY(-1px);
  }
`;

export default Home;
