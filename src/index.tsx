import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle }  from './styles/global';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

/*
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <div>
        <Routes>
          <Route path = "/Home" element = {<Home/>}/>
        </Routes>
      </div>
    </HashRouter>
  </React.StrictMode>
)
*/
