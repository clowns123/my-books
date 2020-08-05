import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

// pages
import Home from './pages/Home';
import Signin from './pages/Signin';
import NotFound from './pages/NotFound';
import FatalError from './pages/FatalError';
<<<<<<< HEAD
import PersonContext from './context/PersonContext';

const persons = [
  { id: 0, name: 'Mark', age: 38 },
  { id: 1, name: 'Hanna', age: 27 },
];

export default function App() {
=======
import Counter from './components/Counter';
import PersonContext from './Context/PersonContext';
import store from './store';

const persons = [{ id: 0, name: 'mark' }];
export default function App({ store }) {
>>>>>>> c9b7713146fc37de51c23fb4bc4791f9b78bed41
  return (
    <ErrorBoundary FallbackComponent={FatalError}>
      <PersonContext.Provider value={persons}>
        <BrowserRouter>
          <Switch>
            <Route path="/signin" component={Signin} />
            <Route path="/" exact component={Home} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </PersonContext.Provider>
    </ErrorBoundary>
  );
}
