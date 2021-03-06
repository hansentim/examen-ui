import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
//Styles & Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import logo from '../img/chillalogo.png';
import TheModal from '../components/Modal';

const Test3 = ({ open, setOpen }) => {
  const navigate = useNavigate();
  //state för att visa modal
  const [show, setShow] = useState(false);

  //Function för att trigga modalen
  const handleClick = () => {
    setShow(true);
    setOpen(true);
  };
  return (
    <AnimatedPage>
      {show && <TheModal open={open} setOpen={setOpen} />}
      <StyledForm>
        <div className="a-container">
          <ArrowButton
            onClick={() => navigate('/test2')}
            whileHover={{ scale: 2, rotate: 360 }}
            className="fas fa-arrow-left fa-2x"
            style={{
              color: '#3d3d3d',
            }}
          ></ArrowButton>
          <div className="formBox">
            <div className="letterBox">A</div>
            <FormCard1>
              <div className="formContainer">
                <img src={logo} alt="" />
                <h5>We take care of your data</h5>
                <p>
                  Chilla wants to give you a safe and good experience. <br />
                  For this we use cookies. Some of these cookies are necessary
                  to make our website work, så don't eat them! Other cookies
                  help you get a tailored experience. <br />
                  By clicking "ACCEPT" you accept the use of the cookies that
                  are marked.{' '}
                </p>
                <div className="switchGrid">
                  <div className="switchBox">
                    <label className="switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider"></span>
                    </label>
                    <h4>Necessary</h4>
                  </div>
                  <div className="switchBox">
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                    <h4>Analytics</h4>
                  </div>
                  <div className="switchBox">
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                    <h4>Social sharing</h4>
                  </div>
                  <div className="switchBox">
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                    <h4>Marketing</h4>
                  </div>
                </div>
                <button onClick={handleClick}>ACCEPT</button>
              </div>
            </FormCard1>
          </div>
        </div>
        <div className="b-container">
          <div className="formBox">
            <div className="letterBox">B</div>
            <FormCard2>
              <div className="formContainer">
                <img src={logo} alt="" />
                <h5>We take care of your data</h5>
                <p>
                  Chilla wants to give you a safe and good experience. <br />
                  For this we use cookies. Some of these cookies are necessary
                  to make our website work, så don't eat them! Other cookies
                  help you get a tailored experience. <br />
                  By clicking "ACCEPT" you accept the use of the cookies that
                  are marked.{' '}
                </p>
                <div className="buttons">
                  <button onClick={handleClick}>ACCEPT</button>
                  <button className="smallButton" onClick={handleClick}>
                    Accept only necessary cookies
                  </button>
                </div>
                <div className="switchGrid">
                  <div className="switchBox">
                    <label className="form-control">
                      <input type="checkbox" defaultChecked />
                    </label>
                    <h4>Necessary</h4>
                  </div>
                  <div className="switchBox">
                    <label className="form-control">
                      <input type="checkbox" defaultChecked />
                    </label>
                    <h4>Analytics</h4>
                  </div>
                  <div className="switchBox">
                    <label className="form-control">
                      <input type="checkbox" defaultChecked />
                    </label>
                    <h4>Social Sharing</h4>
                  </div>
                  <div className="switchBox">
                    <label className="form-control">
                      <input type="checkbox" defaultChecked />
                    </label>
                    <h4>Marketing</h4>
                  </div>
                </div>
              </div>
            </FormCard2>
          </div>
          {/* rotera pilen */}
          <ArrowButton
            onClick={() => navigate('/animationtest')}
            whileHover={{ scale: 2, rotate: 360 }}
            className="fas fa-arrow-right fa-2x"
            style={{
              color: '#3d3d3d',
            }}
          ></ArrowButton>
        </div>
      </StyledForm>
    </AnimatedPage>
  );
};

//Style

const StyledForm = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  color: #3d3d3d;
  background: #f48668;

  .a-container {
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #54bd92;
    .formBox {
    }
    .letterBox {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 0 1.5rem 2rem;
      background: #fdfdfd;
      height: 2.5rem;
      width: 2.5rem;
      border-radius: 5px;
      text-align: center;
      box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
      font-size: 2rem;
      font-weight: 700;
    }
  }

  .b-container {
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #2a9e6e;
    .formBox {
    }
    .letterBox {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 0 1.5rem 2rem;
      background: #fdfdfd;
      height: 2.5rem;
      width: 2.5rem;
      border-radius: 5px;
      text-align: center;
      box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
      font-size: 2rem;
      font-weight: 700;
    }
  }
`;

const FormCard1 = styled.div`
  background: #fdfdfd;
  width: 30vw;
  height: 70vh;
  margin: 0 2rem;
  border-radius: 5px;
  box-shadow: 0px 6px 15px 2px rgba(0, 0, 0, 0.1);
  .formContainer {
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding: 1rem 4rem;
    img {
      margin-top: 1rem;
      height: 5rem;
      @media (min-width: 2500px) {
        margin-top: 4.5rem;
        height: 6rem;
      }
    }
    h4 {
      padding-top: 0.5rem;
    }
    h5 {
      padding-top: 1.5rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      @media (min-width: 2500px) {
        font-size: 1rem;
      }
    }
    p {
      padding-top: 1.5rem;
      text-align: center;
      @media (min-width: 2500px) {
        font-size: 1.1rem;
        padding-top: 1.9rem;
        padding-bottom: 1rem;
      }
    }
    button {
      margin-top: 2rem;
      padding: 1rem 2rem;
      background: #036440;
      color: #f4f4f4;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      @media (min-width: 2500px) {
        padding: 1.2rem 3.2rem;
        margin: 2.5rem 0 2rem 0;
      }
    }
  }
  .switchGrid {
    padding-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem 4rem;
  }
  .switchBox {
    display: flex;
    justify-content: left;
    align-items: center;
    flex-direction: column;
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
    background-color: rgba(70, 70, 70, 0.8);
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
    background-color: rgba(70, 142, 70, 0.8);
  }
  input:focus + .slider {
    box-shadow: 0 0 1px rgba(70, 142, 70, 0.8);
  }

  input:checked + .slider:before {
    transform: translateX(1.5em);
  }

  @media (max-width: 1280px) {
    .formContainer {
      padding: 0 4rem;

      img {
        height: 4rem;
      }
      h5 {
        padding-top: 1.2rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 0.8rem;
      }
      p {
        padding-top: 1.2rem;
        text-align: center;
        font-size: 0.9rem;
      }
      button {
        padding: 0.8rem 1.8rem;
        background: #036440;
        color: #f4f4f4;
        border: none;
        border-radius: 5px;
        font-size: 0.9rem;
      }
    }
    .switchGrid {
      padding-top: 2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem 3rem;
    }
  }
`;
const FormCard2 = styled.div`
  background: #fdfdfd;
  width: 30vw;
  height: 70vh;
  margin: 0 2rem;
  border-radius: 5px;
  box-shadow: 0px 6px 15px 2px rgba(0, 0, 0, 0.1);

  .formContainer {
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding: 1rem 4rem;
    img {
      margin-top: 1rem;
      height: 5rem;
      @media (min-width: 2500px) {
        margin-top: 4.5rem;
        height: 6rem;
      }
    }

    h4 {
      padding-top: 0.5rem;
    }
    h5 {
      padding-top: 1.5rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      @media (min-width: 2500px) {
        font-size: 1rem;
      }
    }
    p {
      padding-top: 1.5rem;
      text-align: center;
      @media (min-width: 2500px) {
        font-size: 1.1rem;
        padding-top: 1.9rem;
        padding-bottom: 1rem;
      }
    }
    .buttons {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    button {
      margin-top: 1rem;
      padding: 1rem 2rem;
      background: #036440;
      color: #f4f4f4;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      @media (min-width: 2500px) {
        margin-top: 2.5rem;
        padding: 1.2rem 2rem;
      }
    }
    .smallButton {
      padding: 0.8rem 1.2rem;
      background: #8d8e8f;
      cursor: pointer;
      @media (min-width: 2500px) {
        margin-bottom: 1rem;
        padding: 1.3rem 1.5rem;
      }
    }
  }
  .switchGrid {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem 4rem;
  }
  .switchBox {
    display: flex;
    justify-content: left;
    align-items: center;
    flex-direction: column;
  }
  input[type='checkbox'] {
    -webkit-appearance: none;
    color: currentColor;
    width: 1.5em;
    height: 1.5em;
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
    background-color: #000;
  }
  input[type='checkbox']:checked::before {
    transform: scale(1);
  }
  input[type='checkbox']:checked {
    background-color: rgba(70, 142, 70, 0.8);
  }
  @media (max-width: 1280px) {
    .formContainer {
      padding: 0 4rem;
      img {
        height: 4rem;
      }
      h5 {
        padding-top: 1.2rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 0.8rem;
      }
      p {
        padding-top: 1.2rem;
        text-align: center;
        font-size: 0.9rem;
      }
      .buttons {
        display: flex;
        flex-direction: row;
      }
      button {
        padding: 0.8rem 1.8rem;
        background: #036440;
        color: #f4f4f4;
        border: none;
        border-radius: 5px;
        font-size: 0.9rem;
      }
      .smallButton {
        padding: 0.7rem 0.8rem;
        margin-left: 0.5rem;
        background: #8d8e8f;
        font-size: 0.8rem;
      }
    }

    .switchGrid {
      padding-top: 1rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.8rem 3rem;
    }
  }
`;

const ArrowButton = styled(motion.button)`
  padding: 0.5rem 1.2rem;
  border: none;
  background: none;
`;

export default Test3;
