import React, { useState } from 'react';
import { Label } from './LabelInput';

const Form = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');

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
    <form onSubmit={handleSubmit}>
      <Label text={"Login"} value={login} type="text" changeHandler={setLogin}/>
      <Label text={"Hasło"} value={password} type="password" changeHandler={setPassword} pattern={'^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'}/>
      <Label text={"Numer"} value={number} type="tel" changeHandler={setNumber} pattern={"[0-9]{9}"} />
      <Label text={"emial"} value={email} type="email" changeHandler={setEmail}/>
      <button type="submit">Wyślij</button>
    </form>
  );
}

export default Form;