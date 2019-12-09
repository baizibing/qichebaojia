import dva from "dva";
import RoterView from "./router/index";
import { createModel } from "./store/index";
const cbh = require("history").createBrowserHistory;
const app = dva({
  history: cbh()
});

createModel(app);
app.router(RoterView);
app.start("#root");
