import { TopBar } from "../TopBar/TopBar";
import { UserPanel } from "../UserPanel/UserPanel";
import { useEffect, useState } from "react";
import { TypeUsersData } from "./Types";
import { usersAPI_URL, InitialUserData, imgAPI_URL } from "../../data/Data";
import {Wrapper, Container} from './StylesApp'
import imgTest from "../../assets/img.jpg";

function App() {
  const [usersData, setUsersData] = useState<TypeUsersData>(InitialUserData);
  const [currentUserID, setcurrentUserID] = useState(1);
  const [sImg, setSImg] = useState(imgTest);
  const [isLoadingAPI, setIsLoadingAPI] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoadingAPI(true)
    let isImageLoading = true;
    let isDataLoading = true;
    fetch(usersAPI_URL+currentUserID)
      .then((res) => res.json())
      .then((jsRes) => {
        setIsError(false)
        if(!jsRes.name) {
          setIsError(true)
          alert("cant load data")
        }
        setUsersData((p)=>([jsRes, ...p]));
        isDataLoading=false
        setIsLoadingAPI(isImageLoading || isDataLoading)
    }).catch((e)=>{
      setIsError(true)
      alert(e.message)
    });
    fetch(imgAPI_URL)
      .then((res) => res.blob())
      .then((imgBlob) => {
        setSImg(URL.createObjectURL(imgBlob));
        isImageLoading=false;
        setIsLoadingAPI(isImageLoading || isDataLoading)
      }).catch((e)=>{
        setIsError(true)
        alert(e.message)
      });
  },[currentUserID]);

  return (
    <Wrapper>
      <Container>
       <TopBar />
        <UserPanel isError={isError} isLoadingAPI={isLoadingAPI} sImg={sImg} setcurrentUserID={setcurrentUserID} usersData={usersData}/>
      </Container>
    </Wrapper>
  );
}

export default App;
