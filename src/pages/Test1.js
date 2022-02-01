import { useNavigate } from 'react-router-dom';
//Styles & Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';

const Test1 = () => {
  const navigate = useNavigate();
  return (
    <AnimatedPage>
      <StyledFormContainer>
        <div className="containerA">
          <div className="formBox1">
            <div className="letterBox">A</div>
            <FormCardA>
              <StyledFormA>
                <div className="formContainerA">
                  <h1>Get Started</h1>
                  <p className="signIn">
                    Already have an account? <span>Sign in</span>
                  </p>
                  <div className="label">
                    <label>MY NAME IS</label>
                    <input id="text" type="text" />
                  </div>
                  <div className="label">
                    <label>MAIL ME AT</label>
                    <input id="text" type="email" />
                  </div>
                  <div className="label">
                    <label>CALL ME ON</label>
                    <input id="text" type="text" />
                  </div>
                  <div className="switchBox">
                    {' '}
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                    <p>Yes, I want to receive my newsletter emails!</p>
                  </div>

                  <div className="switchBox">
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                    <p>
                      I agree to all the <span>Terms</span> and{' '}
                      <span>Privacy Policys</span>
                    </p>
                  </div>

                  <div className="ctBox">
                    <button className="buttonA">SIGN UP</button>
                  </div>
                </div>
              </StyledFormA>
            </FormCardA>
          </div>
        </div>
        <div className="containerB">
          <div className="formBox2">
            <div className="letterBox">B</div>
            <FormCardB>
              <StyledFormB>
                <div className="formContainerB">
                  <h1>Get Started</h1>
                  <p className="signIn">
                    Already have an account? <span>Sign in</span>
                  </p>

                  <div className="label">
                    <label>Name</label>
                    <input id="text" type="text" />
                  </div>
                  <div className="label">
                    <label>Email</label>
                    <input id="text" type="email" />
                  </div>
                  <div className="label">
                    <label>Phone</label>
                    <input id="text" type="text" />
                  </div>
                  <div className="switchBox">
                    {' '}
                    <label className="form-control">
                      <input type="checkbox" name="checkbox" />
                      {/* Yes, I want to receive my newsletter emails! */}
                    </label>
                    <p>Yes, I want to receive newsletter emails!</p>
                  </div>

                  <div className="switchBox">
                    <label className="form-control">
                      <input type="checkbox" name="checkbox" />
                      {/* I agree to all the{' '}
                    <span>Terms</span> and <span>Privacy Policys</span> */}
                    </label>
                    <p>
                      I agree to all the <span>Terms</span> and{' '}
                      <span>Privacy Policys</span>
                    </p>
                  </div>

                  <div className="ctBox">
                    <button className="buttonA">SIGN UP</button>
                  </div>
                </div>
              </StyledFormB>
            </FormCardB>
          </div>
          {/* rotera pilen */}
          <ArrowButton
            onClick={() => navigate('/test2')}
            whileHover={{ scale: 2, rotate: 360 }}
            className="fas fa-arrow-right fa-2x"
            style={{
              color: '#ffbb98',
            }}
          ></ArrowButton>
        </div>
      </StyledFormContainer>
    </AnimatedPage>
  );
};

//Style

const StyledFormContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  color: #3d3d3d;
  margin: 0 auto;
  .containerA {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 50%;
    background: #54bd92;
    .letterBox {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 0 1.5rem 2rem;
      background: none;
      border: 3px solid #fdfdfd;
      color: #fdfdfd;
      height: 2.5rem;
      width: 2.5rem;
      border-radius: 5px;
      text-align: center;
      font-size: 2rem;
      font-weight: 700;
    }
  }
  .containerB {
    background: #f7e1d7;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 50%;

    .letterBox {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 0 1.5rem 2rem;
      background: none;
      border: 3px solid #4a5759;
      color: #4a5759;
      height: 2.5rem;
      width: 2.5rem;
      border-radius: 5px;
      text-align: center;
      font-size: 2rem;
      font-weight: 700;
    }
  }
`;

const FormCardA = styled.div`
  background: #ff8ca4;
  padding: 0 3rem;
  width: 33vw;
  height: 65vh;
  display: flex;
  justify-content: center;
  margin: 0 2rem;
  border-radius: 10px;
  box-shadow: 0px 6px 15px 2px rgba(0, 0, 0, 0.1);
  .formContainerA {
    display: flex;
    flex-direction: column;
    margin: 2rem auto;
    @media (max-width: 1280px) {
      width: 30vw;
    }
    @media (min-width: 1920px) {
      width: 80%;
    }
  }
`;

const StyledFormA = styled.form`
  color: #fdfdfd;
  width: 100%;
  h1 {
    text-align: left;
    font-size: 2.2rem;
    letter-spacing: 1px;
    font-weight: 600;
    padding-top: 2.5rem;
    @media (max-width: 1280px) {
      padding-top: 1rem;
    }
    @media (min-width: 1920px) {
      padding-top: 4rem;
    }
  }
  .signIn {
    padding-bottom: 3rem;
    text-align: left;
    font-size: 0.7rem;
  }
  #text {
    background: none;
    border: none;
    border-bottom: 1.5px solid #fdfdfd;
    outline: none;
    /* padding-right: 1rem; */
    width: 75%;
    color: #fdfdfd;
  }
  .ctBox {
    display: flex;
    justify-content: left;
  }
  .switchBox {
    display: flex;
    justify-content: left;
    align-items: center;
    padding-bottom: 1rem;
  }
  .label {
    font-size: 0.7rem;
    display: flex;
    padding-bottom: 1.9rem;
    align-items: center;
    @media (max-width: 1280px) {
      padding-bottom: 1.5rem;
    }
    @media (min-width: 1920px) {
      padding-bottom: 3rem;
    }
  }
  label {
    padding-right: 0.5rem;
  }
  .switch {
    font-size: 17px;
    position: relative;
    display: inline-block;
    width: 2.6em;
    height: 1.3em;
  }
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #2e65a9;
    transition: 0.4s;
    border-radius: 30px;
  }
  .slider:before {
    position: absolute;
    content: '';
    height: 0.8em;
    width: 0.8em;
    border-radius: 20px;
    left: 0.2em;
    bottom: 0.3em;
    background-color: white;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #fbb439;
  }
  input:focus + .slider {
    box-shadow: 0 0 1px #fbb439;
  }

  input:checked + .slider:before {
    transform: translateX(1.5em);
  }
  p {
    font-size: 0.7rem;
    padding-left: 0.5rem;
  }
  span {
    color: #2e65a9;
    font-weight: 700;
    cursor: pointer;
  }
  .buttonA {
    margin-top: 2rem;
    padding: 0.7em 3.5em;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-weight: 600;
    color: #fdfdfd;
    background-color: #fbb439;
    border: none;
    border-radius: 30px;
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    @media (min-width: 1920px) {
      margin-top: 2rem;
    }
  }
  .buttonA:hover {
    background-color: #fc9919;
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.2);
    color: #fdfdfd;
    transform: translateY(-7px);
  }
  .buttonA:active {
    transform: translateY(-1px);
  }
`;

const FormCardB = styled.div`
  background: none;
  border: 4px solid #4a5759;
  width: 33vw;
  height: 65vh;
  margin: 0 2rem;
  border-radius: 10px;
  @media (max-width: 1280px) {
    width: 30vw;
  }
`;

const StyledFormB = styled.form`
  color: #4a5759;
  width: 100%;
  .formContainerB {
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 2rem auto;
    @media (min-width: 1920px) {
      width: 60%;
    }
  }
  h1 {
    color: #4a5759;
    text-align: left;
    font-size: 2.2rem;
    letter-spacing: 1px;
    font-weight: 600;
    @media (min-width: 1920px) {
      padding-top: 4rem;
    }
  }
  .signIn {
    padding-bottom: 3rem;
    text-align: left;
    font-size: 0.7rem;
    @media (max-width: 1280px) {
      padding-bottom: 2rem;
    }
  }
  #text {
    background: none;
    border: none;
    border-bottom: 1.5px solid #4a5759;
    outline: none;
    width: 100%;
    color: #4a5759;
  }
  .ctBox {
    /*  display: flex;
    justify-content: left; */
  }
  .switchBox {
    display: flex;
    justify-content: left;
    align-items: center;
    padding-bottom: 1rem;
    color: #4a5759;
  }

  .form-control {
    font-size: 0.7rem;
    /*  display: flex; */
    color: #4a5759;
    /* display: grid; */
    /* grid-template-columns: 1em auto; */
    /* gap: 0.7em; */
  }
  input[type='checkbox'] {
    /* Add if not using autoprefixer */
    -webkit-appearance: none;

    /* font: inherit; */

    color: currentColor;
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid currentColor;
    border-radius: 0.15em;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
  }
  input[type='checkbox']::before {
    content: '';
    width: 0.65em;
    height: 0.65em;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    background-color: #4a5759;
  }
  input[type='checkbox']:checked::before {
    transform: scale(1);
  }
  input[type='checkbox']:focus {
    outline: max(2px, 0.15em) solid currentColor;
    outline-offset: max(2px, 0.15em);
    background: #b0c4b1;
  }
  .label {
    font-size: 0.7rem;
    display: flex;
    flex-direction: column;
    padding-bottom: 1.9rem;
    @media (max-width: 1280px) {
      padding-bottom: 0.7rem;
    }
    label {
      padding-right: 0.3rem;
      padding-bottom: 1rem;
      color: #4a5759;
      @media (max-width: 1280px) {
        padding-bottom: 0.7rem;
      }
    }

    /* margin-right: 0.2rem; */
    /*  justify-content: center;
    align-items: center; */
  }

  p {
    font-size: 0.7rem;
    padding-left: 0.5rem;
  }
  span {
    color: #96a797;
    font-weight: 700;
    cursor: pointer;
  }
  .buttonA {
    margin-top: 2rem;
    padding: 0.9em 3.5em;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-weight: 600;
    width: 100%;
    color: #4a5759;
    background-color: #ffbb98;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 6px 15px rgba(255, 187, 152, 0.3);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    @media (min-width: 1920px) {
      margin-top: 1.5rem;
    }
  }
  .buttonA:hover {
    background-color: #eca17c;
    box-shadow: 0px 15px 20px rgba(236, 161, 124, 0.3);
    color: #4a5759;
    transform: translateY(-7px);
  }
  .buttonA:active {
    transform: translateY(-1px);
  }
`;

const ArrowButton = styled(motion.button)`
  padding: 0.5rem 1.2rem;
  border: none;
  background: none;
`;

export default Test1;
