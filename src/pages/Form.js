import { SpiningArrow } from '../animations';
//Styles & Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Form = () => {
  return (
    <StyledForm>
      <div className="container">
        <FormCard>form a</FormCard>
        <FormCard>form b</FormCard>
        <ArrowButton
          whileHover={{ scale: 2, rotate: 360 }}
          className="fas fa-arrow-right fa-2x"
          style={{ color: '#fdfdfd' }}
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
  }
`;

const FormCard = styled.div`
  background: #fdfdfd;
  width: 30vw;
  height: 50vh;
  margin: 0 2rem;
`;

const ArrowButton = styled(motion.button)`
  padding: 0.5rem 1.2rem;
  border: none;
  background: none;
`;

export default Form;
