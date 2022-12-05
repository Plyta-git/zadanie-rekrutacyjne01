import {
  Main,
  MainPanel,
  UserNamePanel,
  StyledUserPanel,
  UserInfo,
  Img,
  User,
  UserName,
  NextProfileButton,
} from "./StylesUserPanel";
import imgAddUser from "../../assets/addUser.svg";
import imgApply from "../../assets/apply.svg";
import { BoxProps } from "./Types";

export const UserPanel = ({
  usersData,
  setcurrentUserID,
  sImg,
  isLoadingAPI,
  isError,
}: BoxProps) => {
  const errorData = { name: "Error", birth_year: "000", eye_color: "000" };
  const { name, birth_year, eye_color } = isError ? errorData : usersData[0];
  const charAge =
    birth_year === "unknown" ? "unknown" : Number(birth_year.slice(0, -3)) + 10;

  return (
    <Main>
      <MainPanel>
        <StyledUserPanel>
          <Img src={sImg} />
          <User>
            <UserNamePanel>
              <UserName>{name}</UserName>
              <div>
                <img alt="AddUser" src={imgAddUser} />
                <img alt="Apply" src={imgApply} />
              </div>
            </UserNamePanel>
            <UserInfo>
              <div>age(10ABY): {charAge}</div>
              <div>eye color: {eye_color}</div>
            </UserInfo>
          </User>
        </StyledUserPanel>
        {!isLoadingAPI ? (
          <NextProfileButton active={true} onClick={() => setcurrentUserID((p) => p + 1)}>
            next profiles
          </NextProfileButton>
          ):
          (<NextProfileButton onClick={() => alert("Dont spam, data is loading...")}>
            Loading...
          </NextProfileButton>
        )}
      </MainPanel>
    </Main>
  );
};
