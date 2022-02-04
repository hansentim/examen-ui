import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
//Styles & Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import TheModal from '../components/Modal';

const Test2 = ({ open, setOpen }) => {
  const navigate = useNavigate();
  //state for showing modal
  const [show, setShow] = useState(false);

  //Function to trigger the modal
  const handleClick = (e) => {
    e.preventDefault();
    setShow(true);
    setOpen(true);
  };
  return (
    <AnimatedPage>
      {show && <TheModal open={open} setOpen={setOpen} />}
      <StyledForm>
        <div className="a-container">
          <ArrowButton
            onClick={() => navigate('/test1')}
            whileHover={{ scale: 2, rotate: 360 }}
            className="fas fa-arrow-left fa-2x"
            style={{
              color: '#EE6C4D',
            }}
          ></ArrowButton>
          <div className="formBox">
            <div className="letterBox">A</div>
            <FormCard1>
              <h2 className="formTitle">Registration Form</h2>

              <form action="">
                <div className="personalInfo">
                  <h4 className="sectionTitle">Personal Information</h4>
                  <label>First name</label>
                  <input type="text" className="inputBar" ></input>
                  <label>Last name</label>
                  <input type="text" className="inputBar"></input>
                  <label>Date of birth</label>
                  <div className="dates">
                    <input
                      type="text"
                      placeholder="Day"
                      className="inputBar short"
                    ></input>
                    <input
                      type="text"
                      placeholder="Month"
                      className="inputBar short"
                    ></input>
                    <input
                      type="text"
                      placeholder="Year"
                      className="inputBar short"
                    ></input>
                  </div>
                </div>
                <div className="accountInfo">
                  <h4 className="sectionTitle">Account Information</h4>
                  <label>Email</label>
                  <input type="email" className="inputBar"></input>
                  <label>Password</label>
                  <input type="password" className="inputBar"></input>
                  <label>Confirm password</label>
                  <input type="password" className="inputBar"></input>
                </div>
                <div className="contactInfo">
                  <h4 className="sectionTitle">Contact Information</h4>
                  <label>Phone</label>
                  <input type="tel" className="inputBar"></input>
                  <label>Address</label>
                  <input type="text" className="inputBar"></input>
                  <div className="cityContainer">
                    <label className="item-a">Zip code</label>
                    <input
                      type="text"
                      className="inputBar medium item-b"
                    ></input>
                    <label className="item-c">City</label>
                    <input
                      type="text"
                      className="inputBar mediumLong item-d"
                    ></input>
                  </div>
                </div>
                <input type="submit" className="button" onClick={handleClick} />
              </form>
            </FormCard1>
          </div>
        </div>
        <div className="b-container">
          <div className="formBox">
            <div className="letterBox">B</div>
            <FormCard2>
              <form action="">
                <h2 className="formTitle">Registration Form</h2>
                <div className="personalInfo">
                  <label>Full name</label>
                  <input type="text" className="inputBar" ></input>
                  <label>Date of birth</label>
                  <div className="dates">
                    <input
                      type="text"
                      placeholder="Day"
                      className="inputBar short"
                    ></input>
                    <input
                      type="text"
                      placeholder="Month"
                      className="inputBar short"
                    ></input>
                    <input
                      type="text"
                      placeholder="Year"
                      className="inputBar short"
                    ></input>
                  </div>
                </div>
                <div className="accountInfo">
                  <label>Email</label>
                  <input type="email" className="inputBar" ></input>
                  <label>Password</label>
                  <input type="password" className="inputBar" ></input>
                  <label>Confirm password</label>
                  <input type="password" className="inputBar" ></input>
                </div>
                <div className="contactInfo">
                  <label>Phone</label>
                  <input type="tel" className="inputBar"
                  ></input>
                  <label>Address</label>
                  <input type="text" className="inputBar" ></input>
                  <div className="cityContainer">
                    <label className="item-a" >Zip code</label>
                    <input
                      type="text"
                      className="inputBar medium item-b"
                    ></input>
                    <label className="item-c">City</label>
                    <input type="text" className="inputBar item-d"></input>
                  </div>
                </div>
                <input
                  type="submit"
                  className="button"
                  value="Register"
                  onClick={handleClick}
                />
              </form>
            </FormCard2>
          </div>
          {/* rotera pilen */}
          <ArrowButton
            onClick={() => navigate('/test3')}
            whileHover={{ scale: 2, rotate: 360 }}
            className="fas fa-arrow-right fa-2x"
            style={{
              color: '#196B69',
            }}
          ></ArrowButton>
        </div>
      </StyledForm>
    </AnimatedPage>
  );
};

//Syle

const StyledForm = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  color: #3d3d3d;
  background: #000;

  .a-container {
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e0fbfc;

    .formBox {
      /* backgroundcolor: #000; */
      /* display: flex;
        flex-direction: column; */
    }
    .letterBox {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 0 1.5rem 2rem;
      background: #3d5a80;
      color: #f4f4f4;
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
    background: #b4a0ff;
    .formBox {
      /* backgroundcolor: #000; */
      /* display: flex;
        flex-direction: column; */
    }
    .letterBox {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 0 1.5rem 2rem;
      background: #da627d;
      height: 2.5rem;
      width: 2.5rem;
      border-radius: 5px;
      text-align: center;
      box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
      font-size: 2rem;
      font-weight: 700;
      color: #f4f4f4;
    }
  }
`;

const FormCard1 = styled.div`
  background: #3d5a80;
  width: 30vw;
  height: 85vh;
  margin: 0 2rem;
  border-radius: 5px;
  box-shadow: 0px 6px 15px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  /* justify-content:center; */
  flex-direction: column;
  .formTitle {
    font-size: 2.5rem;
    color: #ee6c4d;
    margin-top: 1rem;
  }
  form {
    margin: 0 auto;
    height: 100%;
    width: 50%;
  }
  .personalInfo {
    display: flex;
    flex-direction: column;
  }
  .dates {
    display: flex;
    justify-content: space-between;
  }
  .accountInfo {
    display: flex;
    flex-direction: column;
  }
  .contactInfo {
    display: flex;
    flex-direction: column;
  }
  .sectionTitle {
    color: #f4f4f4;
    margin: 0.7rem 0;
  }
  label {
    color: #f4f4f4;
    font-size: 0.8rem;
    margin-left: 0.7rem;
  }
  .inputBar {
    height: 2rem;
    border-radius: 40px;
    /* border: 1px solid #3d3d3d; */
    border: none;
    margin: 0.2rem 0;
    padding-left: 1rem;
    outline: none;
    ::placeholder{ 
      opacity: .7; 
    }
  }
  .short {
    width: 5.5rem;
    text-align: center;
    padding-right: 1rem;
  }
  .medium {
    width: 6rem;
  }
  .mediumLong{
    width: 100%
  }
  .cityContainer {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 0 15px;
  }
  .item-a {
    grid-column: 1 / 2;
    grid-row: 1;
  }
  .item-b {
    grid-column: 1 / 2;
    grid-row: 2;
  }
  .item-c {
    grid-column: 2 / 3;
    grid-row: 1;
  }
  .item-d {
    grid-column: 2 / 3;
    grid-row: 2;
  }
  .button {
    background: #ee6c4d;
    color: #f4f4f4;
    border-radius: 50px;
    width: 184px;
    height: 44px;
    font-size: 1.1rem;
    font-weight: bold;
    border: none;
    margin: 1rem 1.8rem;
    cursor: pointer;
  }
  .button:hover{
    background: #E35331;
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 1280px) {
    width: 35vw;
    .formTitle {
      font-size: 1.8rem;
    }
    .sectionTitle {
      font-size: 0.8rem;
    }
    .inputBar {
      height: 1.5rem;
      font-size: 0.8rem;
      margin: 0.15rem 0;
    }
    .short {
      width: 5rem;
      text-align: center;
    }
    .medium {
      width: 5.5rem;
    }
    .button {
      width: 144px;
      height: 32px;
      font-size: 0.9rem;
      margin: 1.2rem 3rem;
    }
  }
  @media (min-width: 1920px) {
    label {
      font-size: 0.8rem;
    }
    .sectionTitle {
      font-size: 1.2rem;
    }
    .inputBar {
      height: 2rem;
    }
    .button {
      margin: 1.2rem 3rem;
    }
  }
  @media (min-width: 2500px) {
    .formTitle {
      font-size: 3rem;
      /* padding: 2rem 0; */
    }
    label {
      font-size: 1.2rem;
      margin: 0.5rem 0 0 0.7rem;
    }
    .sectionTitle {
      font-size: 1.5rem;
      margin: 0.7rem 0;
    }
    .inputBar {
      height: 3rem;
      margin: 0.5rem 0;
      font-size: 1.3rem;
      padding-left: 1rem;
    }
    .short {
      width: 7rem;
      text-align: center;
      padding-right: 1rem;
    }
    .medium {
      width: 6.5rem;
    }
    .button {
      height: 65px;
      font-size: 1.5rem;
      margin-top: 2rem;
    }
  }
`;
const FormCard2 = styled.div`
  background: #da627d;
  width: 30vw;
  height: 85vh;
  margin: 0 2rem;
  border-radius: 5px;
  box-shadow: 0px 6px 15px 2px rgba(0, 0, 0, 0.1);
  .formTitle {
    font-size: 2.5rem;
    color: #f4f4f4;
    padding: 1rem 0;
  }
  form {
    /* background: #cdcdcd; */
    margin: 0 auto;
    height: 100%;
    width: 80%;
  }
  .personalInfo {
    display: flex;
    flex-direction: column;
  }
  .dates {
    display: flex;
    justify-content: space-between;
  }
  .accountInfo {
    display: flex;
    flex-direction: column;
  }
  .contactInfo {
    display: flex;
    flex-direction: column;
  }
  label {
    color: #f4f4f4;
    font-size: 0.8rem;
    margin: 0.5rem 0 0 0.7rem;
  }
  .inputBar {
    height: 2.5rem;
    border-radius: 40px;
    /* border: 1px solid #3d3d3d; */
    border: none;
    margin: 0.3rem 0;
    padding-left: 1rem;
    outline: none;
    ::placeholder{ 
      opacity: .7; 
    }
  }
  .short {
    width: 8.5rem;
    text-align: center;
    padding-right: 1rem;
  }
  .medium {
    width: 9rem;
  }
  .cityContainer {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 0 15px;
  }
  .item-a {
    grid-column: 1 / 2;
    grid-row: 1;
  }
  .item-b {
    grid-column: 1 / 2;
    grid-row: 2;
  }
  .item-c {
    grid-column: 2 / 3;
    grid-row: 1;
  }
  .item-d {
    grid-column: 2 / 3;
    grid-row: 2;
  }
  .button {
    background: #218380;
    color: #f4f4f4;
    border-radius: 50px;
    width: 100%;
    height: 44px;
    font-size: 1.1rem;
    font-weight: bold;
    border: none;
    margin-top: 2.5rem;
    cursor: pointer;
  }
  .button:hover {
    background: #126D6B;
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 1280px) {
    width: 35vw;
    .formTitle {
      font-size: 1.8rem;
    }
    .sectionTitle {
      font-size: 0.8rem;
    }
    .inputBar {
      height: 2rem;
      font-size: 0.8rem;
      margin: 0.15rem 0;
    }
    .short {
      width: 8rem;
      text-align: center;
    }
    .medium {
      width: 5.5rem;
    }
    .mediumLong {
      width: 100%;
    }
    .button {
      height: 32px;
      font-size: 0.9rem;
      margin-top: 1.5rem;
    }
  }
  @media (min-width: 1920px) {
    label {
      font-size: 1rem;
      margin: 0.7rem 0 0 0.9rem;
    }
    .sectionTitle {
      font-size: 1.2rem;
    }
    .inputBar {
      height: 2.2rem;
    }
  }
  @media (min-width: 2500px) {
    .formTitle {
      font-size: 3rem;
      padding: 2rem 0;
    }
    label {
      font-size: 1.2rem;
      margin: 0.8rem 0 0 0.7rem;
    }
    .inputBar {
      height: 3rem;
      margin: 0.5rem 0;
      font-size: 1.3rem;
      padding-left: 1rem;
    }
    .short {
      width: 12rem;
      text-align: center;
      padding-right: 1rem;
    }
    .medium {
      width: 11rem;
    }
    .button {
      height: 75px;
      font-size: 2rem;
      margin-top: 3rem;
    }
  }
`;

const ArrowButton = styled(motion.button)`
  padding: 0.5rem 1.2rem;
  border: none;
  background: none;
`;

export default Test2;
