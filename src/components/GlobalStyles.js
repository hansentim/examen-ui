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
        @media (min-width: 1920px){
        font-size: 120%;
    }

    }
   body{
        background: #FEFEFE;
        height: 90vh;
        font-family: 'Montserrat', sans-serif;
        color: #202020;
        overflow-x: hidden;
       
        }
       

   
    `;

export default GlobalStyles;
