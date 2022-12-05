import React, { useState } from 'react';
import { CheckBox, Label } from './LabelInput';
import {SaveButton, StyledForm, H1} from './StylesForm'

const Form = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    fetch('https://swapi.dev/api/people/1/', {
      method: 'POST',
      body: JSON.stringify({
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
      <Label text={"Login"} value={login} type="text" changeHandler={setLogin}/>
      <Label text={"Hasło"} value={password} type="password" changeHandler={setPassword} pattern={'^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'}/>
      <Label text={"E-mail"} value={email} type="email" changeHandler={setEmail}/>
      <Label text={"Numer telefonu"} value={number} type="tel" changeHandler={setNumber} pattern={"[0-9]{9}"} />
      <CheckBox setAccepted={setAccepted} accepted={accepted}/>
      <SaveButton type="submit">zapisz</SaveButton>
    </StyledForm></>
  );
}

export default Form;