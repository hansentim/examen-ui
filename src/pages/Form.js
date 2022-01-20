import { useNavigate } from 'react-router-dom';
//Styles & Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';

const Form = () => {
  const navigate = useNavigate();
  return (
    <AnimatedPage>
      <StyledForm>
        <div className="container">
          <div className="formBox">
            <div className="letterBox">A</div>
            <FormCard>form a</FormCard>
          </div>
          <div className="formBox">
            <div className="letterBox">B</div>
            <FormCard>form b</FormCard>
          </div>
          {/* rotera pilen */}
          <ArrowButton
            onClick={() => navigate('/thanks')}
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

//Syle

const StyledForm = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  color: #3d3d3d;
  margin: 0 auto;

  /* background: #f89668; */
  .container {
    display: flex;
    align-items: center;
    padding: 2rem 0;

    .formBox {
      display: flex;
      flex-direction: column;
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

const FormCard = styled.div`
  background: #fdfdfd;
  width: 30vw;
  height: 55vh;
  margin: 0 2rem;
  border-radius: 5px;
  box-shadow: 0px 6px 15px 2px rgba(0, 0, 0, 0.1);
`;

const ArrowButton = styled(motion.button)`
  padding: 0.5rem 1.2rem;
  border: none;
  background: none;
`;

export default Form;
