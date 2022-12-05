
export type BoxProps = {
  usersData: {
    name: string;
    birth_year: string;
    eye_color: string;
    created: string;
    vehicles: string[];
  }[],
  setcurrentUserID: React.Dispatch<React.SetStateAction<number>>,
  sImg: string,
  isLoadingAPI: boolean,
  isError: boolean,
};
