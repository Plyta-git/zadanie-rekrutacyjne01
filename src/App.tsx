import styled from "styled-components";
import imgTest from "./img.jpg";
import { TopBar } from "./Components/TopBar/TopBar";
import { UserPanel } from "./Components/UserPanel/UserPanel";
import { useEffect, useState } from "react";

type TypeUsersData = {
  name: string;
  birth_year: string;
  eye_color: string;
  created: string;
  vehicles: string[];
}[]

const InitialUserData = [{
  name: "string",
  birth_year: "string",
  eye_color: "string",
  created: "string",
  vehicles: ["string"],
}]

const SApp = styled.div`
  background-color: #d9d9d9;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;

`;

const Container = styled.div`
  width: 58%;
  background-color: white;
  overflow: auto;
`;


function App() {
  const [usersData, setUsersData] = useState<TypeUsersData>(InitialUserData);
  const [currentUserID, setcurrentUserID] = useState(1);

  useEffect(() => {
    fetch(`https://swapi.py4e.com/api/people/${currentUserID}/`)
      .then((res) => res.json())
      .then((jsRes) => {
        setUsersData((p)=>([jsRes, ...p]));
        console.log(usersData)
    });
  },[]);

  return (
    <SApp>
      <Container>
       <TopBar />
        <UserPanel usersData={usersData}/>
      </Container>
    </SApp>
  );
}

export default App;
