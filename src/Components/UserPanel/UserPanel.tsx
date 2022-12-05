import { useEffect, useState } from "react";
import imgTest from "../../img.jpg";
import {Main, MainPanel,UserNamePanel, StyledUserPanel, UserInfo, Img, User, UserName, NextProfileButton} from './StylesUserPanel'
import imgAddUser from '../../assets/addUser.svg'
import imgApply from '../../assets/apply.svg'
import {BoxProps} from './Types'
import { imgFetchURL } from "../../Data";

export const UserPanel = ({ usersData }: BoxProps) => {
  const [sImg, setSImg] = useState(imgTest);
  useEffect(() => {
    fetch(imgFetchURL)
      .then((res) => res.blob())
      .then((imgBlob) => {
        setSImg(URL.createObjectURL(imgBlob));
      });
  }, []);

  return (
    <Main>
      <MainPanel>
        <StyledUserPanel>
          <Img src={sImg} />
          <User>
            <UserNamePanel>
              <UserName>
                {usersData[0].name}
              </UserName>
              <div>
                <img src={imgAddUser} />
                <img src={imgApply} />
              </div>
            </UserNamePanel>
            <UserInfo>
              <div>age: {usersData[0].birth_year}</div>
              <div>eye color: {usersData[0].eye_color}</div>
            </UserInfo>
          </User>
        </StyledUserPanel>
        <NextProfileButton onClick={()=> console.log(123)} >next profiles</NextProfileButton>
      </MainPanel>
    </Main>
  );
};
