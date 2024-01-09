import { useState } from 'react'
import Router from 'routes';
import './App.css'
import { useNavigate } from 'react-router-dom';
import { pathName } from 'constants/routePath';

function App() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  return (
    <>
      <div className="card">
        <button onClick={() => navigate(pathName.home)}>
          Home
        </button>
        <button onClick={() => navigate(pathName.about)}>
          About
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Router />
    </>
  )
}

export default App
