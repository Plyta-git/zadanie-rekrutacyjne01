import { useState } from 'react';
import { CheckBox, Label } from './LabelInput';
import {SaveButton, StyledForm, H1} from './StylesForm'
import { TypeUsersData } from '../App/Types';

type Props = {
  usersData: TypeUsersData
}

const Form = ({usersData}: Props) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [acceptedNoClicked, setAcceptedNoClicked] = useState(false);
  
  //const star_wars_data = usersData.map(({name,created,vehicles})=>({name,created,vehicles}))
  const star_wars_data = {
    names: usersData.map(({name})=>(name)),
    created: usersData.map(({created})=>(created)),
    vehicles: usersData.map(({vehicles})=>(vehicles)),
  }

  
  console.log(star_wars_data)
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if(!accepted){
      setAcceptedNoClicked(true)
      return
    }
    fetch('https://swapi.dev/api/people/1/', {
      method: 'POST',
      body: JSON.stringify({
        star_wars_data,
        login,
        password,
        number,
        email
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  };

  return (
    <>
    <StyledForm onSubmit={handleSubmit}>
    <H1>FORMULARZ REJESTRACYJNY</H1>
      <Label text={"Login"} value={login} type="text" changeHandler={setLogin} acceptedNoClicked={acceptedNoClicked} />
      <Label text={"Hasło"} value={password} type="password" changeHandler={setPassword} pattern={'^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'} acceptedNoClicked={acceptedNoClicked} />
      <Label text={"E-mail"} value={email} type="email" changeHandler={setEmail} acceptedNoClicked={acceptedNoClicked} />
      <Label  text={"Numer telefonu"} value={number} type="tel" changeHandler={setNumber} pattern={"[0-9]{9}"}  acceptedNoClicked={acceptedNoClicked} />
      <CheckBox acceptedNoClicked={acceptedNoClicked}  setAccepted={setAccepted} accepted={accepted}/>
      <SaveButton type="submit">zapisz</SaveButton>
    </StyledForm></>
  );
}

export default Form;