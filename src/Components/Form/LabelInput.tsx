import { StyledLabel,StyledCheckbox } from "./StylesForm";

type BoxPropsLabel = {
  text: string;
  value: string;
  type: string;
  pattern?: string;
  changeHandler: (value: React.SetStateAction<string>) => void;
};

type BoxPropsCheckBox = {
  setAccepted: React.Dispatch<React.SetStateAction<boolean>>
  accepted: boolean
};

export const Label = ({
  value,
  type,
  changeHandler,
  text,
  pattern,
}: BoxPropsLabel) => {
  return (
    <StyledLabel>
      {text}:
      <input required
        pattern={pattern}
        type={type}
        value={value}
        onChange={(e) => changeHandler(e.target.value)}
      />
    </StyledLabel>
  );
};

export const CheckBox = ({accepted,setAccepted}:BoxPropsCheckBox) => (
  <StyledCheckbox>
    <input
      type="checkbox"
      checked={accepted}
      onChange={(e) => setAccepted(e.target.checked)}
      required
    />
    Akceptuję regulamin
  </StyledCheckbox>
);
