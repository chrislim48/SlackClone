import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './Login';
import Homepage from './Homepage';

// https://reactrouter.com/web/api/BrowserRouter

/**
 * Simple component with no state.
 *
 * @return {object} JSX
 */
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Login/>
          </Route>
          <Route path="/homepage" exact>
            <Homepage/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
