import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Notes from "./pages/Notes/Notes";
import Works from "./pages/Works/Works";
import Footer from "./shared/components/navigations/Footer";
import MainNavigation from "./shared/components/navigations/MainNavigation";

function App() {
  return (
    <Router>
    <MainNavigation />
    <main>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/works" exact>
          <Works />
        </Route>
        <Route path="/blog" exact>
          
        </Route>
        <Route path="/about" exact>
          
        </Route>
        <Route path="/notes" exact>
          <Notes/>
        </Route>
      </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
