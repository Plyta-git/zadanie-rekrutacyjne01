import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #d9d9d9;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  
`;

export const Container = styled.div`
  width: 58%;
  background-color: white;
  overflow: auto;
  @media only screen and (max-width: 900px){
    width:100%;
  } 
`;

