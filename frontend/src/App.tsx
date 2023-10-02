import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch('http://localhost:3000')
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  const reset = () => {
    setData([]);
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {data.length > 0 && data.map((el) => <div style={{ color: 'red' }}>{el}</div>)}
      <button onClick={reset}>Clear</button>
    </div>
  );
}

export default App;
