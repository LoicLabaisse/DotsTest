import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage/homePage";
import PageTwo from "./components/Page2/pageTwo";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/accueil" exact component={HomePage} />
        <Route path="/page2" exact component={PageTwo} />
      </Switch>
    </div>
  );
}

export default App;
