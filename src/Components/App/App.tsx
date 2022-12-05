import { TopBar } from "../TopBar/TopBar";
import { UserPanel } from "../UserPanel/UserPanel";
import { useEffect, useState } from "react";
import { TypeUsersData } from "./Types";
import { usersAPI_URL, InitialUserData, imgAPI_URL } from "../../data/Data";
import { Wrapper, Container } from "./StylesApp";
import imgTest from "../../assets/img.jpg";
import Form from "../Form/Form";

function App() {
  const [usersData, setUsersData] = useState<TypeUsersData>(InitialUserData);
  const [currentUserID, setcurrentUserID] = useState(1);
  const [sImg, setSImg] = useState(imgTest);
  const [isLoadingAPI, setIsLoadingAPI] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    setIsLoadingAPI(true);
    let isImageLoading = true;
    let isDataLoading = true;

    fetch(usersAPI_URL + currentUserID)
      .then((res) => res.json())
      .then((jsRes) => onJsRes(jsRes))
      .catch((e) => catchError(e));
    fetch(imgAPI_URL)
      .then((res) => res.blob())
      .then((imgBlob) => onImgRes(imgBlob))
      .catch((e) => catchError(e));

    const catchError = (e: string) => {
      setIsLoadingAPI(false);
      isImageLoading = isDataLoading = false;
      setIsError(true);
      alert(e);
      console.log(e);
    };
    const onJsRes = (jsRes: any) => {
      setIsError(false);
      if (!jsRes || !jsRes.name) throw "cant load data";
      setUsersData((p) => [jsRes, ...p]);
      isDataLoading = false;
      setIsLoadingAPI(isImageLoading || isDataLoading);
    };
    const onImgRes = (imgBlob: any) => {
      setIsError(false);
      if (!imgBlob) throw "cant load img";
      setSImg(URL.createObjectURL(imgBlob));
      isImageLoading = false;
      setIsLoadingAPI(isImageLoading || isDataLoading);
    };
  }, [currentUserID]);

  return (
    <Wrapper>
      <Container>
        {!isFormOpen ? (
          <>
            <TopBar setIsFormOpen={setIsFormOpen} />
            <UserPanel
              isError={isError}
              isLoadingAPI={isLoadingAPI}
              sImg={sImg}
              setcurrentUserID={setcurrentUserID}
              usersData={usersData}
            />
          </>
        ) : (
          <Form usersData={usersData} />
        )}
      </Container>
    </Wrapper>
  );
}

export default App;
