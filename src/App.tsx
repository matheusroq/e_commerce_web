import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux';
import { ERoutes } from './routes';
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <ERoutes />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
