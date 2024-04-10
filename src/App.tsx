import { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddAssessment from "./components/add-assessment.component";
import Assessment from "./components/assessment.component";
import AssessmentsList from "./components/assessments-list.component";
import EditAssessment from "./components/EditAssessment";
import ViewAssessment from "./components/ViewAssessment";
import Login from "./components/Login";
import 'react-bootstrap-typeahead/css/Typeahead.css';

type Props = {
    location: any,
    history: any
};

class App extends Component<Props> {

    logout = () => {
        localStorage.clear()
        this.setState({
          refresh : Math.random()
        })
    }

    render() {

        const isAuthenticate = localStorage.getItem("authentication")


        if (this.props.location.pathname === '/' || this.props.location.pathname === '/login' || isAuthenticate === null) {
            return <Login />

        } else {
            return <div className="manoshala-app">
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <Link to={"/assessments"} className="navbar-brand">
                        ManoShala - Magpie
                    </Link>
                    <div className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={"/assessments"} className="nav-link">
                                Assessments
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/add"} className="nav-link">
                                Add
                            </Link>
                        </li>
                    </div>
                    <Link to="/" className="navbar-brand" onClick={() => this.logout()}>
                        Logout
                    </Link>
                </nav>

               <div className="content-wrap">
               <div className="container">
                    <Switch>
                        <Route exact path="/assessments" component={AssessmentsList} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/add" component={AddAssessment} />
                        <Route path="/assessments/:id" component={Assessment} />
                        <Route path="/assessment_edit/:id" component={EditAssessment} />
                        <Route path="/assessments_view/:id" component={ViewAssessment} />
                    </Switch>
                </div>
               </div>
            </div>
        }
    }
}

export default App;