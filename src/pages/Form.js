//Styles & Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Form = () => {
  return (
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
          whileHover={{ scale: 2, rotate: 360 }}
          className="fas fa-arrow-right fa-2x"
          style={{
            color: '#fdfdfd',
          }}
        ></ArrowButton>
      </div>
    </StyledForm>
  );
};

const StyledForm = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  margin: 0 auto;
  background: #f89668;
  .container {
    display: flex;
    align-items: center;
    .formBox {
      display: flex;
      flex-direction: column;
    }
    .letterBox {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 0 2rem 2rem;
      background: #fdfdfd;
      height: 50px;
      width: 50px;
      border-radius: 5px;
      text-align: center;
      box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);
      font-size: 2rem;
      font-weight: 700;
    }
  }
`;

const FormCard = styled.div`
  background: #fdfdfd;
  width: 30vw;
  height: 50vh;
  margin: 0 2rem;
  border-radius: 5px;
  box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.2);
`;

const ArrowButton = styled(motion.button)`
  padding: 0.5rem 1.2rem;
  border: none;
  background: none;
`;

export default Form;
