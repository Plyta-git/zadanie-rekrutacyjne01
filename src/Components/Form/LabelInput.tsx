import styled from "styled-components";

type BoxProps = {
    text: string;
    value: string,
    type: string,
    pattern?: string,
    changeHandler: (value: React.SetStateAction<string>) => void
  }

const Input = styled.input`
  border: none;
  border-bottom: 2px solid black;
`

export const Label = ({value,type,changeHandler,text,pattern}: BoxProps) => {
  return (
    <label>
      {text}:
      <Input
        pattern={pattern}
        type={type}
        value={value}
        onChange={(e) => changeHandler(e.target.value)}
      />
    </label>
  );
};
