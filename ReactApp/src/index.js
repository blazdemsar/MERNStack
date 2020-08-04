import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux"; // application now be handled by this
import App from "./App/app.js";
import store from "./store";

render(
    <Provider store={store}>
        <App/>
    </Provider>, // React application wrapped up using provider from react-redux
    document.getElementById("root") //rendering react application over root element created in index.html : bootstraping
);