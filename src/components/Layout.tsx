import { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

import AddAssessment from "./add-assessment.component";
import Assessment from "./assessment.component";
import AssessmentsList from "./assessments-list.component";
import EditAssessment from "./EditAssessment";
import ViewAssessment from "./ViewAssessment";
import Login from "./Login";

type Props = {
  location: any,
  history: any
};

class Layout extends Component<Props> {

  render() {
    return (
      (this.props.location.pathname === '/' || this.props.location.pathname === '/login') ?
        <Login />
        :
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to={"/assessments"} className="navbar-brand">
              ManoShala LLP
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
          </nav>

          <div className="container mt-3">

            <Switch>
              <Route
                exact
                path={["/", "/assessments"]}
                component={AssessmentsList}
              />
              <Route exact path="/login" component={Login} />
              <Route exact path="/add" component={AddAssessment} />
              <Route path="/assessments/:id" component={Assessment} />
              <Route path="/assessment_edit/:id" component={EditAssessment} />
              <Route path="/assessments_view/:id" component={ViewAssessment} />
            </Switch>
          </div>
        </div>
    );
  }
}

export default Layout;
