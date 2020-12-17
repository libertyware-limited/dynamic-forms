import React from 'react';

import styles from './app.module.scss';

import { Route, Link } from 'react-router-dom';

import { ViewContainer } from './container/view-container';

export function App() {
  return (
    <div className={styles.app}>
      <header className="flex">
        <h1>Welcome to react dynamic form example!</h1>
      </header>

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/forms">DynamicForms</Link>
          </li>
        </ul>
      </div>
      <Route
        path="/"
        exact
        render={() => (
          <div>
            This is the generated root route.{' '}
            <Link to="/page-2">Click here for page 2.</Link>
          </div>
        )}
      />
      <Route path="/forms" component={ViewContainer} />
      <Route
        path="/page-2"
        exact
        render={() => (
          <div>
            <Link to="/">Click here to go back to root page.</Link>
          </div>
        )}
      />
      {/* END: routes */}
    </div>
  );
}

export default App;
