import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// // Bootstrap CSS
import "../src/assets/css/bootstrap.min.css";
// Fontawesome CSS
import "../src/assets/plugins/fontawesome/css/fontawesome.min.css";
import "../src/assets/plugins/fontawesome/css/all.min.css";
// Feathericon CSS
import "../src/assets/css/feathericon.min.css";
import "../src/assets/plugins/morris/morris.css";
//Main CSS
import "../src/assets/css/custom.css";
// Data table css
import "./assets/plugins/datatables/datatables.min.css";
// react tostify
import "react-toastify/dist/ReactToastify.css";


import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
