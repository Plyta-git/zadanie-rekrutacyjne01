import { StyledLabel,StyledCheckbox } from "./StylesForm";
import {BoxPropsCheckBox, BoxPropsLabel} from './Types'

export const Label = ({value,type,changeHandler,text,pattern,}: BoxPropsLabel) => {
  return (
    <StyledLabel>
      {text}:
      <input required pattern={pattern} type={type} value={value} onChange={(e) => changeHandler(e.target.value)}
      />
    </StyledLabel>
  );
};

export const CheckBox = ({accepted,setAccepted,acceptedNoClicked}:BoxPropsCheckBox) => (
  <StyledCheckbox acceptedNoClicked={acceptedNoClicked} >
    <input type="checkbox" checked={accepted} onChange={(e) => setAccepted(e.target.checked)} />
    Akceptuję regulamin
  </StyledCheckbox>
);
