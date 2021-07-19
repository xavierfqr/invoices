import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';
import InvoiceDetails from './components/invoiceDetails/InvoiceDetails';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './app.css';

const App = () => {

  const location = useLocation();

  return (
    <div className="container">
      <Sidebar/>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <Main/>
          </Route>
          <Route 
            path="/invoice/:id"
            render={({location}) => {
              const { state } : any = location
              return <InvoiceDetails status={state.status}/>
            }}>
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
