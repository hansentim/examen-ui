//Globalstyle
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
       
    }

    html{
        @media (max-width: 1280px){
        font-size: 85%;
        }

    }
   body{
        background: #FEFEFE;
        height: 90vh;
        font-family: 'Montserrat', sans-serif;
        color: #202020;
        overflow-x: hidden;
      background: #f1f1f1;;
        &::-webkit-scrollbar {
    width: 0.5rem;
  
    }
    &::-webkit-scrollbar-thumb {
        background-color: #868686;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
        background: white;
    }
        
            }
       

   
    `;

export default GlobalStyles;
