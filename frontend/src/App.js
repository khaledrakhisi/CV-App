import { React, useCallback, useState, Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import About from "./pages/About/About";
// import Auth from "./pages/Authentication/Auth";
// import Fun from "./pages/Fun/Fun";
import HomePage from "./pages/Home/HomePage";
// import Notes from "./pages/Notes/Notes";
import Works from "./pages/Works/Works";
import { AuthContext } from "./shared/components/context/AuthContext";
import Footer from "./shared/components/navigations/Footer";
import MainNavigation from "./shared/components/navigations/MainNavigation";
import LoadingSpinner from "./shared/components/UIElements/LoadingSpinner";

// const MainNavigation = lazy(() => import("./shared/components/navigations/MainNavigation"));
// const HomePage = lazy(() => import("./pages/Home/HomePage"));
const About = lazy(() => import("./pages/About/About"));
const Auth = lazy(() => import("./pages/Authentication/Auth"));
const Fun = lazy(() => import("./pages/Fun/Fun"));
// const Footer = lazy(() => import("./shared/components/navigations/Footer"));
const Notes = lazy(() => import("./pages/Notes/Notes"));
// const Works = lazy(() => import("./pages/Works/Works"));
// const LoadingSpinner = lazy(() => import("./shared/components/UIElements/LoadingSpinner"));

function App() {
  const [loggedinUser, setLoggedinUser] = useState(null);
  const login = useCallback((user) => {
    setLoggedinUser(user);
  }, []);
  const logoff = useCallback(() => {
    setLoggedinUser(false);
  }, []);

  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "US"
  );

  const storeLanguageInLocalStorage = (language) => {
    // console.log("lang >> " + language);
    localStorage.setItem("language", language);
  };
  const eh_languageChanged = (language) => {
    setLanguage(language);
    storeLanguageInLocalStorage(language);
  };

  return (
    <AuthContext.Provider
      value={{ loggedinUser: loggedinUser, login: login, logoff: logoff }}
    >
      <Router>
        <MainNavigation
          language={language}
          onLanguageSelect={eh_languageChanged}
        />
        <main>
          <Suspense
            fallback={
              <div className="center">
                {/* Loading... */}
                <LoadingSpinner/>
              </div>
            }
          >
            <Switch>
              <Route path="/admin" exact>
                <Auth language={language} />
              </Route>
              <Route path="/" exact>
                <HomePage language={language} />
              </Route>
              <Route path="/works" exact>
                <Works language={language} />
              </Route>
              <Route path="/fun" exact>
                <Fun language={language} />
              </Route>
              <Route path="/about" exact>
                <About language={language} />
              </Route>
              <Route path="/notes" exact>
                <Notes language={language} />
              </Route>
            </Switch>
          </Suspense>
        </main>
        <Footer />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
