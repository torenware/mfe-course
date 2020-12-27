import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

// Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory }) => {

  // @see https://github.com/ReactTraining/history/blob/master/docs/api-reference.md
  // If we are running in isolation, we use a default browser history, otherwise,
  // maintain a memory history for our MFE bookkeeping.
  const history = defaultHistory || createMemoryHistory();

  // Update the container's notion of history. Note that when this particular
  // MFE is called in isolation, we will not be passed anything from a container.
  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);

  // We need to pass back some way of updating this MFE to the container.
  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    }
  };
};



if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#_auth-dev-root');

  if (el) {
    // Make sure we get onNavigate as null when called in dev.
    mount(el, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };
