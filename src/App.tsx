import KsFooter from "./components/pagetemplate/KsFooter"
import KsNavbar from "./components/pagetemplate/KsNavbar"

import LoginPage from "./pages/LoginPage"
import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Columns, Column, Container } from "trunx"

export default function App() {
    return (
        <Router>
        <div className="App">
            <KsNavbar />
            <Switch>
                
                <Route exact path="/">
                    <Home />
                </Route>
                
                <Route exact path="/LoginPage">
                    <LoginPage />
                </Route>

                <Route exact path="/RegisterPage">
                    <RegisterPage />
                </Route>
                
            </Switch>
            <KsFooter />
        </div>
        </Router>
        
    )
}