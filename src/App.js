import { useState } from 'react';


function App() {
  const [base, setBase] = useState(0);
  const [altura, setAltura] = useState(0);
  const [area, setArea] = useState(0);
  const calcularArea = () => {

    setArea = altura.current.value * base.current.value;
  }
  const textChangeBase = (e) => {
    setBase(e.target.value);
  }
  const textChangeAltura = (e) => {
    setAltura(e.target.value);
  }
  return (
    <>

      <button onClick={() => calcularArea()}>Calcular:</button>
      <input type="text" onChange={e => textChangeBase(e)} />
      <input type="text" onChange={e => textChangeAltura(e)} />
      {area}
    </ >
  );
}

export default App;
