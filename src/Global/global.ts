import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
    width: 100%;
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  :root {
    --brand-01: #4529e6;
    --brand-02: #5126ea;
    --brand-03: #b0a6f0;
    --brand-04: #edeafd;

    --grey-00: #0B0D0D;
    --grey-01: #212529;
    --grey-02: #495057;
    --grey-03: #868e96;
    --grey-04: #ADB5BD;
    --grey-05: #CED4DA;
    --grey-06: #DEE2E6;
    --grey-07: #E9ECEF;
    --grey-08: #F1F3F5;
    --grey-09: #F8F9FA;
    --grey-10: #FDFDFD;

    --white: #ffffff;
    --whiteFixed: #ffffff;

    --alert-1: #CD2B31;
    --alert-2: #FDD8D8;
    --alert-3: #FFE5E5;

    --sucess-1: #18794E;
    --sucess-2: #CCEBD7;
    --sucess-3: #DDF3E4;

    --random-01: #E34D8C;
    --random-02: #C04277;
    --random-03: #7D2A4D;
    --random-04: #7000FF;
    --random-05: #6200E3;
    --random-06: #36007D;
    --random-07: #349974;
    --random-08: #2A7D5F;
    --random-09: #153D2E;
    --random-10: #6100FF;
    --random-11: #5700E3;
    --random-12: #30007D;
  }

  body,html{
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    overflow-x: hidden;

    background-color: var(--white);
    color: var(--grey-01);
  }
    
  ul, li, a{
    list-style: none;
    text-decoration: none; 
  }

  body, input, button, textarea {
    font-family: 'Poppins';
  }
  
  button {
    text-align: center;
    cursor: pointer;
  }
`;
