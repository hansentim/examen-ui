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
                <h2 className='formTitle'>Registration Form</h2>
                
                    <form action="">
                      <div className='personalInfo'>
                        <h4 className='sectionTitle'>Personal Information</h4>
                        <label>First name</label>
                        <input type="text" className='inputBar'></input>
                        <label>Last name</label>
                        <input type="text" className='inputBar'></input>
                        <label>Date of birth</label>
                        <div className='dates'>
                          <input type="text" placeholder="Day" className='inputBar short'></input>
                          <input type="text" placeholder="Month" className='inputBar short'></input>
                          <input type="text" placeholder="Year" className='inputBar short'></input>
                        </div>
                      </div>
                      <div className='accountInfo'>
                        <h4 className='sectionTitle'>Account Information</h4>
                        <label>Email</label>
                        <input type="email" className='inputBar'></input>
                        <label>Password</label>
                        <input type="password" className='inputBar'></input>
                        <label>Confirm password</label>
                        <input type="password" className='inputBar'></input>
                      </div>
                      <div className='contactInfo'>
                        <h4 className='sectionTitle'>Contact Information</h4>
                        <label>Phone</label>
                        <input type="tel" className='inputBar'></input>
                        <label>Address</label>
                        <input type="text" className='inputBar'></input>
                        <div className='cityContainer'>
                          <label className='item-a'>Zip code</label>
                          <input type="text" className='inputBar medium item-b'></input>
                          <label className='item-c'>City</label>
                          <input type="text" className='inputBar mediumLong item-d'></input>
                        </div>
                      </div>
                      <input type="submit" className='button'/>
                    </form>
                
            </FormCard1>
          </div>
        </div>
        <div className="b-container">
          <div className="formBox">
            <div className="letterBox">B</div>
            <FormCard2>
                
                <form action="">
              <h2 className='formTitle'>Registration Form</h2>
                      <div className='personalInfo'>
                        <label>Full name</label>
                        <input type="text" className='inputBar'></input>
                        <label>Date of birth</label>
                        <div className='dates'>
                          <input type="text" placeholder="Day" className='inputBar short'></input>
                          <input type="text" placeholder="Month" className='inputBar short'></input>
                          <input type="text" placeholder="Year" className='inputBar short'></input>
                        </div>
                      </div>
                      <div className='accountInfo'>
                        <label>Email</label>
                        <input type="email" className='inputBar'></input>
                        <label>Password</label>
                        <input type="password" className='inputBar'></input>
                        <label>Confirm password</label>
                        <input type="password" className='inputBar'></input>
                      </div>
                      <div className='contactInfo'>
                        <label>Phone</label>
                        <input type="tel" className='inputBar'></input>
                        <label>Address</label>
                        <input type="text" className='inputBar'></input>
                        <div className='cityContainer'>
                          <label className='item-a'>Zip code</label>
                          <input type="text" className='inputBar medium item-b'></input>
                          <label className='item-c'>City</label>
                          <input type="text" className='inputBar item-d'></input>
                        </div>
                      </div>
                      <input type="submit" className='button' value="Register"/>
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
  height: 85vh;
  margin: 0 2rem;
  border-radius: 5px;
  box-shadow: 0px 6px 15px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items:center;
  /* justify-content:center; */
  flex-direction: column;
  .formTitle{
      font-size: 2.5rem;
      color: #EE6C4D;
      margin-top: 1rem;
  }
  form{
    margin: 0 auto;
    height: 100%;
    width: 50%;
    
  }
  .personalInfo{
    display: flex;
    flex-direction: column;
  }
  .dates{
    display: flex;
    justify-content: space-between;
  }
  .accountInfo{
    display: flex;
    flex-direction: column;
  }
  .contactInfo{
    display: flex;
    flex-direction: column;
  }
  .sectionTitle{
    color: #f4f4f4;
    margin: .7rem 0;
  }
  label{
    color: #f4f4f4;
    font-size: .8rem;
    margin-left: .7rem;
  }
  .inputBar{
    height: 2rem;
    border-radius: 40px;
    border: 1px solid #3D3D3D;
    margin: .2rem 0;
    padding-left: .5rem
  }
  .short{
    width: 5.5rem;
    text-align: center;
    padding-right: .5rem
  }
  .medium{
    width: 6rem
  }
  .cityContainer{
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 0 15px;
  }
  .item-a{
    grid-column: 1 / 2;
  grid-row: 1;
  }
  .item-b{
    grid-column: 1 / 2;
    grid-row: 2;
  }
  .item-c{
    grid-column: 2 / 3;
    grid-row: 1;
  }
  .item-d{
    grid-column: 2 / 3;
    grid-row: 2;
  }
  .button{
    background: #EE6C4D;
    color: #f4f4f4;
    border-radius: 50px;
    width: 184px;
    height: 44px;
    font-size: 1.1rem;
    font-weight: bold;
    border: none;
    margin: 1rem 1.8rem;
  }
  @media (max-width: 1280px) {
    width: 35vw;
    .formTitle{
      font-size: 1.8rem
    }
    .sectionTitle{
      font-size: 0.8rem
    }
    .inputBar{
      height: 1.5rem;
      font-size: .8rem;
      margin: .15rem 0;
    }
    .short{
      width: 5rem;
      text-align: center;
    }
    .medium{
      width: 5.5rem;
    }
    .mediumLong{
      width: 100%;
    }
    .button{
    width: 144px;
    height: 32px;
    font-size: .9rem;
    margin: 1.2rem 3rem;
    }
  }
  @media (min-width: 1920px) {
    label{
      font-size: .8rem;
    }
    .sectionTitle{
      font-size: 1.2rem
    }
    .inputBar{
      height: 2rem;
    }
    .button{
    margin: 1.2rem 3rem;
    }
  }
`;
const FormCard2 = styled.div`
  background: #DA627D;
  width: 30vw;
  height: 85vh;
  margin: 0 2rem;
  border-radius: 5px;
  box-shadow: 0px 6px 15px 2px rgba(0, 0, 0, 0.1);
  .formTitle{
    font-size: 2.5rem;
    color: #f4f4f4;
    padding: 1rem 0;
}
form{
  /* background: #cdcdcd; */
  margin: 0 auto;
  height: 100%;
  width: 80%;
  
}
.personalInfo{
  display: flex;
  flex-direction: column;
}
.dates{
  display: flex;
  justify-content: space-between;
}
.accountInfo{
  display: flex;
  flex-direction: column;
}
.contactInfo{
  display: flex;
  flex-direction: column;
}
label{
  color: #f4f4f4;
  font-size: .8rem;
  margin: .5rem 0 0 .7rem;
}
.inputBar{
  height: 2.5rem;
  border-radius: 40px;
  border: 1px solid #3D3D3D;
  margin: .3rem 0;
}
.short{
  width: 8.5rem;
  text-align: center;
}
.medium{
  width: 9rem
}
.cityContainer{
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 0 15px;
}
.item-a{
  grid-column: 1 / 2;
grid-row: 1;
}
.item-b{
  grid-column: 1 / 2;
  grid-row: 2;
}
.item-c{
  grid-column: 2 / 3;
  grid-row: 1;
}
.item-d{
  grid-column: 2 / 3;
  grid-row: 2;
}
.button{
  background: #218380;
  color: #f4f4f4;
  border-radius: 50px;
  width: 100%;
  height: 44px;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  margin-top: 2.5rem;
}
@media (max-width: 1280px) {
  width: 35vw;
  .formTitle{
    font-size: 1.8rem
  }
  .sectionTitle{
    font-size: 0.8rem
  }
  .inputBar{
    height: 2rem;
    font-size: .8rem;
    margin: .15rem 0;
  }
  .short{
    width: 8rem;
    text-align: center;
  }
  .medium{
    width: 5.5rem;
  }
  .mediumLong{
    width: 100%;
  }
  .button{
    height: 32px;
  font-size: 0.9rem;
  margin-top: 1.5rem;
  }
}
@media (min-width: 1920px) {
  label{
    font-size: 1rem;
    margin: .7rem 0 0 .9rem;
  }
  .sectionTitle{
    font-size: 1.2rem
  }
  .inputBar{
    height: 2.2rem;
  }
}
}
}
`;

const ArrowButton = styled(motion.button)`
  padding: 0.5rem 1.2rem;
  border: none;
  background: none;
`;

export default Test2;
