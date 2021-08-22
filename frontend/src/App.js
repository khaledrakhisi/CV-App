import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Footer from "./shared/components/navigations/Footer";
import MainNavigation from "./shared/components/navigations/MainNavigation";

function App() {
  return (
    <Router>
      <MainNavigation />
      <Route path="/" exact>
        <HomePage/>
      </Route>
      <Footer/>
    </Router>
  );
}

export default App;
