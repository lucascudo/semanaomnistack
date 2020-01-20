import React, { useEffect, useState } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [ github_username, setGithubUsername ] = useState('');
  const [ techs, setTechs ] = useState('');
  const [ latitude, setLatitude ] = useState('');
  const [ longitude, setLongitude ] = useState('');

  async function handleAddDev(e) {
    e.preventDefault();
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setLatitude(latitude);
      setLongitude(longitude);
    }, console.log, {
      timeout: 30000,
    });
  }, []);

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input
              name="github_username"
              id="github_username"
              value={github_username}
              onChange={(e) => setGithubUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              name="techs"
              id="techs"
              value={techs}
              onChange={(e) => setTechs(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                name="latitude"
                id="latitude"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                required
              />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                name="longitude"
                id="longitude"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
          <ul>
            <li className="dev-item">
              <header>
                <img src="https://avatars2.githubusercontent.com/u/13350752" alt="Lucas Rocha" />
                <div className="user-info">
                  <strong>Lucas Rocha</strong>
                  <span>NodeJS, ReactJS, ReactNative</span>
                </div>
              </header>
              <p>Father, Developer and Tech Enthusiast.</p>
              <a href="https://github.com/lucascudo">Acessar perfil no Github</a>
            </li>
            <li className="dev-item">
              <header>
                <img src="https://avatars2.githubusercontent.com/u/13350752" alt="avatar" />
                <div className="user-info">
                  <strong>Lucas Rocha</strong>
                  <span>NodeJS, ReactJS, ReactNative</span>
                </div>
              </header>
              <p>Father, Developer and Tech Enthusiast.</p>
              <a href="https://github.com/lucascudo">Acessar perfil no Github</a>
            </li>
            <li className="dev-item">
              <header>
                <img src="https://avatars2.githubusercontent.com/u/13350752" alt="avatar" />
                <div className="user-info">
                  <strong>Lucas Rocha</strong>
                  <span>NodeJS, ReactJS, ReactNative</span>
                </div>
              </header>
              <p>Father, Developer and Tech Enthusiast.</p>
              <a href="https://github.com/lucascudo">Acessar perfil no Github</a>
            </li>
            <li className="dev-item">
              <header>
                <img src="https://avatars2.githubusercontent.com/u/13350752" alt="avatar" />
                <div className="user-info">
                  <strong>Lucas Rocha</strong>
                  <span>NodeJS, ReactJS, ReactNative</span>
                </div>
              </header>
              <p>Father, Developer and Tech Enthusiast.</p>
              <a href="https://github.com/lucascudo">Acessar perfil no Github</a>
            </li>
          </ul>
      </main>
    </div>
  );
}

export default App;
