import { useCallback, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About/About";
import Auth from "./pages/Authentication/Auth";
import HomePage from "./pages/Home/HomePage";
import Notes from "./pages/Notes/Notes";
import Works from "./pages/Works/Works";
import { AuthContext } from "./shared/components/context/AuthContext";
import Footer from "./shared/components/navigations/Footer";
import MainNavigation from "./shared/components/navigations/MainNavigation";

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
    console.log("lang >> " + language);
    localStorage.setItem("language", language);
  }
  const eh_languageChanged = (language)=>{    
    setLanguage(language);
    storeLanguageInLocalStorage(language);
  }
  
  return (
    <AuthContext.Provider
      value={{ loggedinUser: loggedinUser, login: login, logoff: logoff }}
    >
      <Router>
        <MainNavigation language={language} onLanguageSelect={eh_languageChanged}/>
        <main>
          <Switch>
            <Route path="/admin" exact>
              <Auth language={language}/>
            </Route>
            <Route path="/" exact>
              <HomePage language={language}/>
            </Route>
            <Route path="/works" exact>
              <Works language={language}/>
            </Route>
            <Route path="/blog" exact></Route>
            <Route path="/about" exact>
              <About language={language}/>
            </Route>
            <Route path="/notes" exact>
              <Notes language={language}/>
            </Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
