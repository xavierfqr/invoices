import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';
import InvoiceDetails from './components/invoiceDetails/InvoiceDetails';
import { Switch, Route } from 'react-router-dom';
import './app.css';

const App = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/">
          <Sidebar/>
          <Main/>
        </Route>
        <Route path="/invoice/:id">
          <InvoiceDetails/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
