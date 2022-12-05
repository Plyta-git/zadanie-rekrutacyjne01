export type BoxPropsLabel = {
  text: string;
  value: string;
  type: string;
  pattern?: string;
  changeHandler: (value: React.SetStateAction<string>) => void;
  acceptedNoClicked: boolean;
};

export type BoxPropsCheckBox = {
  setAccepted: React.Dispatch<React.SetStateAction<boolean>>;
  accepted: boolean;
  acceptedNoClicked: boolean;
};
