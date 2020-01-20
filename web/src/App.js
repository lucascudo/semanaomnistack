import React, { useEffect, useState } from 'react';

import api from './services/api';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevForm from './components/DevForm';
import DevItem from './components/DevItem';

function App() {
  const [ devs, setDevs ] = useState([]);

  async function handleAddDev(dev) {
    const response = await api.post('/devs', dev);
    setDevs([ ...devs, response.data ]);
  }

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }

    loadDevs();
  }, []);

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
          <ul>
            {devs.map((dev) => (
              <DevItem key={dev._id} dev={dev} />
            ))}
          </ul>
      </main>
    </div>
  );
}

export default App;
