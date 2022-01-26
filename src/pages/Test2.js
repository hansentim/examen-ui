import { useNavigate } from 'react-router-dom';
//Styles & Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';

const Test2 = () => {
  const navigate = useNavigate();
  return (
    <AnimatedPage>
      <StyledForm>
        <div className="a-container">
          <div className="formBox">
            <div className="letterBox">A</div>
            <FormCard1>
                <h2 className='formTitle'>Registration Form</h2>
                <div className='personalinfo'>
                    
                    <form action="">
                        <h4>Personal Information</h4>
                        <label>First name</label>
                        <input type="text"></input>
                        <label>Last name</label>
                        <input type="text"></input>
                        <label>Date of birth</label>
                        <input type="text" value="Day"></input>
                        <input type="text" value="Month"></input>
                        <input type="text" value="Year"></input>
                        <h4>Account Information</h4>
                        <label>Email</label>
                        <input type="email"></input>
                        <label>Password</label>
                        <input type="password"></input>
                        <label>Confirm Password</label>
                        <input type="password"></input>
                        <h4>Contact Information</h4>
                        <label>Phone</label>
                        <input type="tel"></input>
                        <label>Address</label>
                        <input type="text"></input>
                        <label>Zip code</label>
                        <input type="text"></input>
                        <label>City</label>
                        <input type="text"></input>
                    </form>
                    
                </div>
                
            </FormCard1>
          </div>
        </div>
        <div className="b-container">
          <div className="formBox">
            <div className="letterBox">B</div>
            <FormCard2>
                <h2>Registration Form</h2>
                
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
        background: #E0FBFC;
        .formBox {
            backgroundcolor: #000;
        /* display: flex;
        flex-direction: column; */
        }
        .letterBox {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 0 1.5rem 2rem;
        background: #3D5A80;
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
    background: #B4A0FF;
    .formBox {
        backgroundcolor: #000;
        /* display: flex;
        flex-direction: column; */
    }
    .letterBox {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 0 1.5rem 2rem;
        background: #DA627D;
        height: 2.5rem;
        width: 2.5rem;
        border-radius: 5px;
        text-align: center;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        font-size: 2rem;
        font-weight: 700;
        color: #f4f4f4
    }
}
`;

const FormCard1 = styled.div`
  background: #3D5A80;
  width: 30vw;
  height: 80vh;
  margin: 0 2rem;
  border-radius: 5px;
  box-shadow: 0px 6px 15px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items:center;
  /* justify-content:center; */
  flex-direction: column;
  .formTitle{
      font-size: 2rem;
      color: #EE6C4D;
      margin-top: 1.5rem;
  }
`;
const FormCard2 = styled.div`
  background: #DA627D;
  width: 30vw;
  height: 80vh;
  margin: 0 2rem;
  border-radius: 5px;
  box-shadow: 0px 6px 15px 2px rgba(0, 0, 0, 0.1);
`;

const ArrowButton = styled(motion.button)`
  padding: 0.5rem 1.2rem;
  border: none;
  background: none;
`;

export default Test2;
