import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import reducers from './redux/reducers';
import Routes from './routes/routes';
import { loadState, saveState } from './localStorage'

const history = createBrowserHistory();
const persistedState = loadState();

const store = createStore(
  reducers(history),
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Index = () => (
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <Routes />
    </ConnectedRouter>
  </Provider>
);

store.subscribe(() => {
  saveState(store.getState())
});

ReactDOM.render(<Index store={store}/>, document.getElementById('react-app'));

