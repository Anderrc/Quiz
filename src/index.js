import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Index from './components/pages/index/index';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AskFlag from './components/pages/ask-flags/ask-flags';
import AskName from './components/pages/ask-name/ask-name';

ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/banderas" component={AskFlag} />
          <Route exact path="/capitales" component={AskName} />

          {/* <Route exact path="/home" component={Home} />
          <Route exact path="/product/:id" component={Product} /> */}
          <Route render={() => <h1>Not found!</h1>} />
        </Switch>
      </div>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
