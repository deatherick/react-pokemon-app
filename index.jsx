import React from "react"; // Add missing import
import ReactDOM from "react-dom/client";
import { App } from "./src/App";
import { store } from './src/app/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);