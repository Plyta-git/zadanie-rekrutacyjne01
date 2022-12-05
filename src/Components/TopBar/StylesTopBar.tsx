import styled from "styled-components";

export const StyledTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  & > div {
    margin: 11px 22px;
  }
`;

export const FormButton = styled.div`
  cursor: pointer;
  background: #40483a;
  box-shadow: 10px 4px 4px rgba(0, 0, 0, 0.75);
  border-radius: 20px;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-style: italic;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  -webkit-text-stroke: 1px #d9d9d9;
  padding: 10px 40px 20px 40px;
`;
