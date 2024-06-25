import styled from "styled-components";
import { ItemBody } from "../home-item-container/home-item-container-style";

export const FormDiv=styled(ItemBody)`
height:39vh;
width:35vh;
opacity:0.9;

button{
    position:relative;
    top:-10%;
    font-size:1.65vh;
    margin:0 auto;
};
input{
  height:1vh;

}

// /Iphone SE/
@media only screen and (width: 375px)
and(height:667px)
{
    height:35vh;
    width:20vh;
    button{
        font-size:1.8vh;
    }
  }

  @media only screen and (width: 344px) {
    height:27vh;
    width:20vh;
    button{
        font-size:1vh;
    }
  }
  @media only screen and (width: 344px) 
  and (height:882px) {
    height:28vh;
    width:20vh;
    button{
        font-size:1vh;
    }
  }
  // Samsung Galaxy S8+
  @media only screen and (width: 360px) {
    height:35vh;
    width:30vh;
    button{
        font-size:1.4vh;
    }
  }

  
  //  /Iphone 12 Pro
  @media only screen and (device-width:390px)

  {
      height:35vh;
      width:30vh;
      button{
          font-size:1vh;
      }
    }
  // /iphone XR/
  @media only screen and (device-width:414px)

  {
      height:30vh;
      width:30vh;
      button{
          font-size:1vh;
      }
    }

    // Samsung Galaxy A51/71
  @media only screen and (device-width:412px)

  {
      height:30vh;
      width:30vh;
      button{
          font-size:1vh;
      }
    }

    // IPad Air
  @media only screen and (device-width:820px)

{
    height:30vh;
    width:19vh;
    button{
        font-size:1vh;
    }
  }
  // Asus Zenbook Fold
  @media  only screen and (device-width: 853px)
and (device-height:1280px)
{
    height:25vh;
    width:18vh;
    font-size:1.5vh;
    button{
        font-size:1vh;
    }
    input{
      height:2vh;
    }
  }

  // Surface Pro 7
  @media only screen and (width:912px) 


  {
      height:25vh;
      width:19vh;
      button{
          font-size:1vh;
      }
    }
    // Nest Hub
    @media only screen and (width: 1024px) and (height:600px){
      height:41vh;
      width:40vh;
      button{
          font-size:1.6vh;
      }
    }

// IPad Pro
@media  only screen and (device-width: 1024px)
and (device-height:1366px)
{
    height:30vh;
    width:18vh;
    font-size:1.5vh;
    button{
        font-size:1vh;
    }
    input{
      height:2vh;
    }
  }
}






`