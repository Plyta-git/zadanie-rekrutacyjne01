import styled from "styled-components";

interface Props {
  onSubmit: (e: { preventDefault: () => void }) => void;
}

export const H1 = styled.h1` 
  margin-top: 100px;
  margin-bottom: 50px;
  margin-left:auto;
  font-size: 20px;
  font-weight: 800;
  font-family: 'Inter';
  text-align: right;
  position: relative;
  line-height: 165%;
  letter-spacing: 0.15em;
  &::after{
    position:absolute;
    right:0;
    bottom:-30px;
    content: "";
    width: 166px;
    height: 10px;
    background-color: #071594;
  }
`

export const StyledLabel = styled.label<{acceptedNoClicked?: boolean}>`
  line-height: 33px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  display: flex;
  flex-direction:column;
  width: 100%;
  margin-top: 25px;
  border-bottom: 2px solid black;
  & > input {
    border: none;
    margin-top: 45px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
  }
  & > input:invalid{
    border-bottom: ${props => props.acceptedNoClicked ? 'red' : "#000"};
  }
`;

export const SaveButton = styled.button`
  margin-top: 30px;
  margin-bottom: 30px;
  font-family: 'Lato';
  border: none;
  font-style: italic;
  font-weight: 400;
  font-size: 30px;
  line-height: 100%;
	outline: inherit;
  cursor: pointer;
  background: #071594;
  box-shadow: 10px 4px 4px rgba(0, 0, 0, 0.75);
  border-radius: 20px;
  color: #ffffff;
  font-style: italic;
  -webkit-text-stroke: 1px #ffffff;
  padding: 8px 70px 12px 70px;
`;

export const StyledForm = styled.form<Props>`
  padding: 0 16%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;

export const StyledCheckbox = styled.label<{acceptedNoClicked?: boolean}>`
  font-family: "Inter";
  width: 100%;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 165%;
  margin-top: 30px;
  margin-right: auto;
  display: grid;
  grid-template-columns: 1em auto;
  gap:20px;
  position:relative;
  & > input{
    width: 24px;
    height: 24px;
    border-radius: 15%;
    border: 3px solid ${props => props.acceptedNoClicked ? 'red' : "#000"};
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
  }
  & > input:checked{
    background-color: #071594;
    border: 3px solid #071594;
  }
  &::after{
    position:absolute;
    right: 0;
    font-family: 'Inter';
    font-style: italic;
    font-weight: 300;
    font-size: 20px;
    line-height: 165%;
    color:red;
    ${props => props.acceptedNoClicked ? 'content: "Wymagana akceptacja regulaminu";': 'content: "";'};
  }
`;
