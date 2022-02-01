import { useNavigate } from 'react-router-dom';
//Styles & Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import logo from '../img/chillalogo.png'

const Test4 = () => {
  const navigate = useNavigate();
  return (
    <AnimatedPage>
      <StyledForm>
        <div className="a-container">
        <ArrowButton
          onClick={() => navigate('/test3')}
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
                    <img src={logo} alt="" />
                    <h5>Vi tar hand om dina uppgifter</h5>
                    <p>Chilla vill ge dig en säker och god upplevelse. För detta använder vi kakor. Vissa av dessa kakor är nödvändiga för att vår hemsida ska fungera, så ät inte upp de! Andra kakor hjälper dig få en skräddarsydd upplevelse. Genom att trycka på "ACCEPTERA" godkänner du användningen av de kakor som är markerade. </p>
                    <button>ACCEPTERA</button>
                    <div className='switchGrid'>
                      <div className="switchBox">
                        <label className="switch">
                          <input type="checkbox" checked/>
                          <span className="slider"></span>
                        </label>
                        <h4>Nödvändiga</h4>
                        </div>
                        <div className="switchBox">
                          <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider"></span>
                          </label>
                          <h4>Funktionella</h4>
                        </div>
                        <div className="switchBox">
                          <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider"></span>
                          </label>
                          <h4>Statistiska</h4>
                        </div>
                        <div className="switchBox">
                          <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider"></span>
                          </label>
                          <h4>Marketing</h4>
                      </div>
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
              <img src={logo} alt="" />
              <h5>Vi tar hand om dina uppgifter</h5>
              <p>Chilla vill ge dig en säker och god upplevelse. För detta använder vi kakor. Vissa av dessa kakor är nödvändiga för att vår hemsida ska fungera, så ät inte upp de! Andra kakor hjälper dig få en skräddarsydd upplevelse. Genom att trycka på "ACCEPTERA" godkänner du användningen av de kakor som är markerade. </p>
              <button>ACCEPTERA</button>
              <div className='switchGrid'>
                <div className="switchBox">
                  <label className="form-control">
                    <input type="checkbox" checked/>
                  </label>
                  <h4>Nödvändiga</h4>
                  </div>
                  <div className="switchBox">
                    <label className="form-control">
                      <input type="checkbox" checked/>
                    </label>
                    <h4>Funktionella</h4>
                  </div>
                  <div className="switchBox">
                    <label className="form-control">
                      <input type="checkbox" checked/>
                    </label>
                    <h4>Statistiska</h4>
                  </div>
                  <div className="switchBox">
                    <label className="form-control">
                      <input type="checkbox" checked/>
                    </label>
                    <h4>Marketing</h4>
                </div>
              </div>
            </div>
            </FormCard2>
          </div>
          {/* rotera pilen */}
          <ArrowButton
            onClick={() => navigate('/home')}
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
        background: #54BD92;
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
    background: #2A9E6E;
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
  height: 70vh;
  margin: 0 2rem;
  border-radius: 5px;
  box-shadow: 0px 6px 15px 2px rgba(0, 0, 0, 0.1);
  .formContainer {
    height: 100%;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding: 1rem 4rem;
    img{
        margin-top: 1rem;
        height: 5rem;
        }
    h4{
      padding-top: .5rem;
    }
    h5{
        padding-top: 1.5rem;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    p{
        padding-top: 1.5rem;
        text-align: center;
    }
    button{
        margin-top: 1rem;
        padding: 1rem 2rem;
        background: #036440;
        color: #f4f4f4;
        border: none;
        border-radius: 5px;
    }
    
  }
  .switchGrid{
    padding-top: 3rem;
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
    box-shadow: 0 0 1px #fbb439;
  }

  input:checked + .slider:before {
    transform: translateX(1.5em);
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
    display:flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding: 1rem 4rem;
    img{
        margin-top: 1rem;
        height: 5rem;
        }
    h4{
      padding-top: .5rem;
    }
    h5{
        padding-top: 1.5rem;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    p{
        padding-top: 1.5rem;
        text-align: center;
    }
    button{
        margin-top: 1rem;
        padding: 1rem 2rem;
        background: #036440;
        color: #f4f4f4;
        border: none;
        border-radius: 5px;
    }
    
  }
  .switchGrid{
    padding-top: 3rem;
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

const ArrowButton = styled(motion.button)`
  padding: 0.5rem 1.2rem;
  border: none;
  background: none;
`;

export default Test4;
