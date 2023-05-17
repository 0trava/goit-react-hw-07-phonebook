// Встановлення бібліотеки:
// $ npm install @reduxjs/toolkit
// $ npm install redux
// $ npm install @redux-devtools/extension




import React from 'react';
import ReactDOM from 'react-dom/client'; //бібліотека, яка надає методи для рендерингу
import {App} from 'components/App';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';

// Імпортуємо 
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
