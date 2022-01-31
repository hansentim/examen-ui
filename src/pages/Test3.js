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
              <div className='formContainer'>
                <h2>Hobbies</h2>
                <div className="switchBox">
                  <label className="form-control">
                    <input type="checkbox" name="checkbox" />
                  </label>
                  <h5>Photography</h5>
                </div>
                <div className="switchBox">
                  <label className="form-control">
                    <input type="checkbox" name="checkbox" />
                  </label>
                  <h5>Football</h5>
                </div>
                <div className="switchBox">
                  <label className="form-control">
                    <input type="checkbox" name="checkbox" />
                  </label>
                  <h5>Cycling</h5>
                </div>
                <div className="switchBox">
                  <label className="form-control">
                    <input type="checkbox" name="checkbox" />
                  </label>
                  <h5>Jogging</h5>
                </div>
                <div className="switchBox">
                  <label className="form-control">
                    <input type="checkbox" name="checkbox" />
                  </label>
                  <h5>Gaming</h5>
                </div>
                <div className="switchBox">
                  <label className="form-control">
                    <input type="checkbox" name="checkbox" />
                  </label>
                  <h5>Writing</h5>
                </div>
                <div className="switchBox">
                  <label className="form-control">
                    <input type="checkbox" name="checkbox" />
                  </label>
                  <h5>Gardening</h5>
                </div>
                <div className="switchBox">
                  <label className="form-control">
                    <input type="checkbox" name="checkbox" />
                  </label>
                  <h5>Cooking</h5>
                </div>
              </div>
            </FormCard1>
          </div>
        </div>
        <div className="b-container">
          <div className="formBox">
            <div className="letterBox">B</div>
            <FormCard2>
            <div className='formContainer'>
                <h2>Hobbies</h2>
                <div className="switchBox">
                  <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider"></span>
                  </label>
                  <h5>Photography</h5>
                </div>
                <div className="switchBox">
                  <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider"></span>
                  </label>
                  <h5>Football</h5>
                </div>
                <div className="switchBox">
                  <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider"></span>
                  </label>
                  <h5>Cycling</h5>
                </div>
                <div className="switchBox">
                  <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider"></span>
                  </label>
                  <h5>Jogging</h5>
                </div>
                <div className="switchBox">
                  <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider"></span>
                  </label>
                  <h5>Gaming</h5>
                </div>
                <div className="switchBox">
                  <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider"></span>
                  </label>
                  <h5>Writing</h5>
                </div>
                <div className="switchBox">
                  <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider"></span>
                  </label>
                  <h5>Gardening</h5>
                </div>
                <div className="switchBox">
                  <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider"></span>
                  </label>
                  <h5>Cooking</h5>
                </div>
              </div>
            </FormCard2>
          </div>
          {/* rotera pilen */}
          <ArrowButton
            onClick={() => navigate('/test4')}
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
    display: flex;
    width: 100%;
    height: 100vh;
    color: #3d3d3d;
    background: #F48668;


    .a-container {
        height: 100%;
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #F48668;
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
    background: #DD614A;
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
  height: 55vh;
  margin: 0 2rem;
  border-radius: 5px;
  box-shadow: 0px 6px 15px 2px rgba(0, 0, 0, 0.1);
  .formContainer{
    height: 100%;
    padding: 1.5rem 3rem;
    h2{
      margin-bottom: 2rem;
      font-size: 1.8rem
    }
  }
  .switchBox {
    display: flex;
    justify-content: left;
    align-items: center;
    padding-bottom: 1rem;
    h5{
      font-size: 1.2rem;
      margin-left: 1.5rem
    }
  }
  input[type='checkbox'] {
    /* Add if not using autoprefixer */
    -webkit-appearance: none;

    /* font: inherit; */

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
`;
const FormCard2 = styled.div`
  background: #fdfdfd;
  width: 30vw;
  height: 55vh;
  margin: 0 2rem;
  border-radius: 5px;
  box-shadow: 0px 6px 15px 2px rgba(0, 0, 0, 0.1);
  .formContainer{
    height: 100%;
    padding: 1.5rem 3rem;
    h2{
      margin-bottom: 2rem;
      font-size: 1.8rem
    }
  }
  .switchBox {
    display: flex;
    justify-content: left;
    align-items: center;
    padding-bottom: 1rem;
    h5{
      font-size: 1.2rem;
      margin-left: 1.5rem
    }
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
    background-color: #F66666;
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
`;

const ArrowButton = styled(motion.button)`
  padding: 0.5rem 1.2rem;
  border: none;
  background: none;
`;

export default Test2;
