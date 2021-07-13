import KsFooter from "./components/pagetemplate/KsFooter";
import KsNavbar from "./components/pagetemplate/KsNavbar";

import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./components/Dashboard";
import RegisterUserTypePage from "./pages/RegisterUserTypePage";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from "./components/contexts/AuthContex";
import AttatchCompanyPage from "./pages/AttatchCompanyPage";
import CreateNewCompanyPage from "./pages/CreateNewCompanyPage";
import RegisterCompanyRepresentantPage from "./pages/RegisterCompanyReperesentantPage";



export default function App() {



    return (
        <AuthProvider>
            <Router>
                <div className="App">
                    <KsNavbar />
                    <Switch>
                        <Route exact path="/" component={Home} />

                        <Route exact path="/RegisterUserTypePage" component={RegisterUserTypePage} />

                        <Route exact path="/LoginPage" component={LoginPage} />

                        <Route exact path="/RegisterPage" component={RegisterPage} />

                        <Route exact path="/Dashboard" component={Dashboard} />

                        <Route exact path="/AttachCompanyPage" component={AttatchCompanyPage} />

                        <Route exact path="/CreateNewCompanyPage" component={CreateNewCompanyPage} />

                        <Route exact path="/RegisterCompanyRepresentant" component={RegisterCompanyRepresentantPage} />
                    </Switch>
                    <KsFooter />
                </div>
            </Router>
        </AuthProvider>
    )
}

