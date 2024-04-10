import { Component } from "react";
import { RouteComponentProps } from "react-router-dom";

import AssessmentDataService from "../services/assessment.service";

interface RouterProps {
  // type for `match.params`
  id: string; // must be type `string` since value comes from the URL
}

type Props = RouteComponentProps<RouterProps>;

type State = {
  currentAssessment: {
    data: any;
    id: string;
    published: boolean;
  };
  message: string;
};

export default class Assessment extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.getAssessment = this.getAssessment.bind(this);
    this.deleteAssessment = this.deleteAssessment.bind(this);

    this.state = {
      currentAssessment: {
        id: "",
        data: {
          client_information: {
            name: "",
            email: "",
            phone: "",
          }
        },
        published: false,
      },
      message: "",
    };
  }

  componentDidMount() {
    this.getAssessment(this.props.match.params.id);
  }

  getAssessment(id: string) {
    AssessmentDataService.get(id)
      .then((response: any) => {
        this.setState({
          currentAssessment: response.data,
        });
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  deleteAssessment() {
    AssessmentDataService.delete(this.state.currentAssessment.id)
      .then((response: any) => {
        this.props.history.push("/assessments");
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  render() {
    const { currentAssessment } = this.state;

    return (
      <div>
        {currentAssessment ? (
          <div className="edit-form">
            <h4>Assessment</h4>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={currentAssessment.data.client_information.name}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  value={currentAssessment.data.client_information.email}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  value={currentAssessment.data.client_information.phone}
                />
              </div>
            </form>
            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteAssessment}
            >
              Delete
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Assessment...</p>
          </div>
        )}
      </div>
    );
  }
}
