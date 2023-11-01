import { useState } from 'react'
import './App.css'

function App() {
  const [hi, setHi] = useState("");
  const [mi, setMi] = useState("");
  const [hf, setHf] = useState("");
  const [mf, setMf] = useState("");
  const [result, setResult] = useState('Resultado');

  function soma() {
    let resH = hi + hf;
    let resM = mi + mf;

    while (resM > 59) {
      resM -= 60;
      resH++;
    }

    setResult(`${resH}:${resM}`);
  }

  function subtrai() {
    let tempHi = hi;
    let tempHf = hf;
    let resM = mi - mf;
    let resH = 0;

    while (tempHi > 1) {
      resM += 60;
      tempHi--;
    }

    while (tempHf > 1) {
      resM += 60;
      tempHf--;
    }

    if (resM < 0) {
      resM *= -1;
    }

    while (resM > 59) {
      resH++;
      resM -= 60;
    }

    setResult(`${resH}:${resM}`);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Calculadora de Horas</h1>
      <input type="number" placeholder="Hora Inicial" value={hi} onChange={(e) => setHi(Number(e.target.value))} />:&nbsp;
      <input type="number" placeholder="Minuto Inicial" value={mi} onChange={(e) => setMi(Number(e.target.value))} /><br /><br />
      <input type="number" placeholder="Hora Final" value={hf} onChange={(e) => setHf(Number(e.target.value))} />:&nbsp;
      <input type="number" placeholder="Minuto Final" value={mf} onChange={(e) => setMf(Number(e.target.value))} /><br /><br />
      <button onClick={soma}>Somar</button>&nbsp;
      <button onClick={subtrai}>Subtrair</button>
      <p>{result}</p>
    </div>
  );
}

export default App