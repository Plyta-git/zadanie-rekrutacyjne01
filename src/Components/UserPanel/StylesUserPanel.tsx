import styled from "styled-components";

export const MainPanel = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 66%;
  border-radius: 200px 20px 100px 50px;
`;

export const StyledUserPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(280px);
  width: 100%;
  padding-top: 20%;
  background: #cec7c7;
  border-radius: 500px 60px 300px 100px;
  filter: drop-shadow(12px 4px 4px rgba(0, 0, 0, 0.6));
`;

export const Main = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const User = styled.div`
  font-family: "Inter";
  margin-top: 26px;
  margin-bottom: 70px;
`;

export const UserInfo = styled.div`
  font-style: italic;
  font-weight: 100;
  font-size: 20px;
  line-height: 24px;
`;

export const UserNamePanel = styled.div`

  font-style: normal;
  font-weight: 800;
  line-height: 61px;
  display: flex;
  justify-content: start;
  align-items: center;
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > div > img {
    cursor: pointer;
    margin: 10px;
    width: 2.5vw;
    @media only screen and (max-width: 900px){
      margin: 4px;
      width: 4vw;
  }}
`;

export const UserName = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 2.6vw;
  line-height: 61px;
  @media only screen and (max-width: 900px){
    font-size: 6vw;
  }
`;


export const NextProfileButton = styled.a<{active?: boolean}>`
  margin-top: 20px; 
  margin-bottom: 30px;
  cursor: pointer;
  background: #35660E;
  background: ${props => props.active ? '#35660E' : "#253a14"};
  box-shadow: 10px 4px 4px rgba(0, 0, 0, 0.75);
  border-radius: 20px;
  color: ${props => props.active ? '#ffffff' : "#bbbbbb"};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-style: italic;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  -webkit-text-stroke: 1px ${props => props.active ? '#ffffff' : "#313131"};
  padding: 8px 40px 12px 40px;
`;