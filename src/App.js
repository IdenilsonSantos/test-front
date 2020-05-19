import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './Components/NavBar';
import BagPage from './Pages/Bag';
import PaymentPage from './Pages/Payment';
import ConfirmationPage from './Pages/Confirmation';

const App = () => (
  <>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={BagPage} />
        <Route exact path="/payment" component={PaymentPage} />
        <Route exact path="/confirmation" component={ConfirmationPage} />
      </Switch>
    </BrowserRouter>
  </>
)

export default App
