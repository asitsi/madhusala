import { Component } from "react";
import AssessmentDataService from "../services/assessment.service";
import { Link } from "react-router-dom";
import IAssessmentData from "../types/assessment.type";
import BootstrapTable from "react-bootstrap-table-next";
import moment from "moment";
import { Modal, Button } from "react-bootstrap";

type Props = {};
type IAssessmentDataWithPublishingFlag = {
  data: any;
  id: string;
  published: boolean;
};
type State = {
  assessments: Array<IAssessmentDataWithPublishingFlag>;
  storedData: any;
  currentAssessment: IAssessmentDataWithPublishingFlag | null;
  currentIndex: number;
  searchName: string;
  isOpen: boolean;
  deleteId: string;
  phone: string;
  leadStatus: string;
  isMessageModal: boolean;
  messageEmail: string;
  messageNumber: any;
  assesmentMessage: any;
  activePage: any;
  maxPages: any;
  checked: boolean;
  selectedId: any;
  SelectedList: any;
  isNewCompaingeModal: boolean;
  campaignMessage: any;
  client_data: any;
};
export default class AssessmentsList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.retrieveAssessments = this.retrieveAssessments.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveAssessment = this.setActiveAssessment.bind(this);

    this.state = {
      storedData: [],
      assessments: [],
      currentAssessment: null,
      currentIndex: -1,
      searchName: "",
      isOpen: false,
      deleteId: "",
      phone: "",
      leadStatus: "",
      isMessageModal: false,
      messageEmail: "",
      messageNumber: "",
      assesmentMessage: "",
      activePage: 1,
      maxPages: [],
      checked: false,
      selectedId: "",
      SelectedList: [],
      isNewCompaingeModal: false,
      campaignMessage: "",
      client_data: [],
    };
  }

  openModal = (id: string) => this.setState({ isOpen: true, deleteId: id });

  closeModal = () => this.setState({ isOpen: false, deleteId: "" });

  dateTime = moment(new Date()).format("_YYYY-MM-DD_HH:mm:ss");

  openSendMessageModal = (email: any, phone: any) =>
    this.setState({
      isMessageModal: true,
    });

  openNewCampaingeModal = () => {
    this.setState({
      isNewCompaingeModal: !this.state.isNewCompaingeModal,
    });
  };

  closeSendMessageModal = () => {
    this.setState({ isMessageModal: false, isNewCompaingeModal: false });
  };

  componentDidMount() {
    this.retrieveAssessments();
  }

  retrieveAssessments() {
    AssessmentDataService.getAll()
      .then((response: any) => {
        const data = response.data.reverse();
        this.setState({ assessments: data, storedData: data });
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveAssessments();
    this.setState({
      currentAssessment: null,
      currentIndex: -1,
    });
  }

  setActiveAssessment(
    assessment: IAssessmentDataWithPublishingFlag,
    index: number
  ) {
    this.setState({
      currentAssessment: assessment,
      currentIndex: index,
    });
  }

  addNewCampaign = () => {
    const congocartCredentials = {
      username: "abhisheksw4@gmail.com",
      password: "Success@123",
      bot_id: "37",
    };
    AssessmentDataService.getToken(congocartCredentials)
      .then((response: any) => {
        localStorage.setItem("authToken", response.data.auth_token);
      })
      .catch((e: Error) => {
        console.log(e);
      });
    AssessmentDataService.createCampaign(
      this.state.campaignMessage)
      .then((response: any) => {
        AssessmentDataService.sendCampaignMessage(
          this.state.client_data,
          response.data.campaign_id,
          response.data.campaign_name);
      })
      .catch((e: Error) => {
        console.log(e);
      });
    this.retrieveAssessments();
    this.openNewCampaingeModal();
  };

  deleteAssessment = () => {
    AssessmentDataService.delete(this.state.deleteId)
      .then((response: any) => {
        this.closeModal();
        this.retrieveAssessments();
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
  sendCampaignMessage = () => {
    this.setState({
      isMessageModal: false,
    });
    this.retrieveAssessments();
  };

  filterData = () => {
    if (this.state.phone !== "" || this.state.leadStatus !== "") {
      const data = [...this.state.storedData];
      const array = data.filter((x) => {
        if (
          this.state.phone !== "" &&
          x.data.client_information.phone !== null
        ) {
          return x.data.client_information.phone.includes(this.state.phone);
        } else if (
          this.state.leadStatus !== "" &&
          typeof x.data.lead_status !== "undefined" &&
          x.data.lead_status !== null
        ) {
          return x.data.lead_status === this.state.leadStatus;
        }
      });

      this.setState({ assessments: array });
    } else {
      this.setState({ assessments: this.state.storedData });
    }
  };

  AssessmentColumnData = [
    {
      dataField: "data.client_information.name",
      text: "Name",
      sort: true,
    },
    {
      dataField: "data.client_information.email",
      text: "Email",
      sort: true,
    },
    {
      dataField: "data.client_information.phone",
      text: "Mobile No.",
      sort: true,
    },
    {
      dataField: "data.lead_status",
      text: "Lead status",
      sort: true,
    },
    {
      dataField: "",
      text: "Action",
      sort: true,
      formatter: (cell: any, row: any) => {
        return (
          <div className="d-flex">
            <span
              title="Message"
              onClick={() =>
                this.openSendMessageModal(
                  row.data.client_information.email,
                  row.data.client_information.phone
                )
              }
              className="cursor_pointer mr-2"
            >
              <img src="/img/Send.png" width="20" />
            </span>
            <Link
              to={`/assessments_view/${row.id}`}
              className="mr-2"
              title="View"
            >
              <img src="/img/view.png" width="25" />
            </Link>
            <Link
              title="Edit"
              to={`/assessment_edit/${row.id}`}
              className="mr-2"
            >
              <img src="/img/edit.png" width="20" />
            </Link>
            <span
              title="Delete"
              onClick={() => this.openModal(row.id)}
              className="cursor_pointer"
            >
              <img src="/img/delete.png" width="20" />
            </span>
          </div>
        );
      },
    },
  ];

  render() {
    const { assessments, currentAssessment, currentIndex } = this.state;
    const assessmentData = assessments.map((data) => {
      return data;
    });
    return (
      <div className="">
        <h4 className="mt-2">Filter Data</h4>
        <div className="mb-4">
          <div className="row">
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  id="phone"
                  value={this.state.phone}
                  onChange={(e) =>
                    this.setState({ phone: e.target.value, leadStatus: "" })
                  }
                />
              </div>
            </div>
            <div className="col-sm-1">
              <label className="d-block"></label>
              <span className="pt-4 d-block text-center">OR</span>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="lead_status">Lead Status</label>
                <select
                  className="form-control"
                  id="lead_status"
                  value={this.state.leadStatus}
                  onChange={(e) =>
                    this.setState({ leadStatus: e.target.value, phone: "" })
                  }
                >
                  <option value="">Please select</option>
                  <option value="UPCOMING_SCREENING">Upcoming Screening</option>
                  <option value="MONTHLY">Monthly Follow-up</option>
                  <option value="RESCHEDULE">Reschedule</option>
                  <option value="TEXT_SCR">Text Screening</option>
                  <option value="DAY1_FIRST">
                    Booking Followup Day 1 First
                  </option>
                  <option value="DAY1_SECOND">
                    Booking Followup Day 1 Second
                  </option>
                  <option value="DAY2">Booking Followup Day 2</option>
                  <option value="DAY3">Booking Followup Day 3</option>
                  <option value="BOOKED">Booked</option>
                  <option value="EXPERT_BOOKING">Expert Booking</option>
                  <option value="SUBSCRIBED">Subscribed</option>
                  <option value="DEAD">Dead</option>
                  <option value="URGENT">Urgent</option>
                  <option value="WORKSHOP">WORKSHOP</option>
                </select>
              </div>
            </div>

            <div className="col-sm-2 ">
              <label className="d-block"></label>
              <button
                className="btn btn-primary mt-4"
                onClick={() => this.filterData()}
              >
                Search
              </button>
            </div>
            <div className="col-sm-3 text-right">
              <label className="d-block"></label>
              {this.state.client_data.length && this.state.checked === true ? (
                <button
                  className="btn btn-primary mt-4"
                  onClick={() => this.openNewCampaingeModal()}
                >
                  New Campaign
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="table-vertical-scroll">
              <div className="table-responsive">
                <BootstrapTable
                  keyField="id"
                  data={assessmentData}
                  columns={this.AssessmentColumnData}
                  selectRow={{
                    mode: "checkbox",
                    clickToSelect: false,
                    onSelect: (row: any) => {
                      let clientData = {
                        phone_number: row.data.client_information.phone,
                        name: row.data.client_information.name,
                        dynamic_data: {},
                      };
                      let data = this.state.client_data;
                      this.setState({
                        client_data: data.concat([clientData]),
                        checked: true,
                      });
                    },
                    onSelectAll: (isSelected, rows: any) => {
                      for (let i = 0; i < rows.length; i++) {
                        let clientData = {
                          phone_number: rows[i].data.client_information.phone,
                          name: rows[i].data.client_information.name,
                          dynamic_data: {},
                        };
                        let data = this.state.client_data;
                        this.setState({
                          client_data: data.concat([clientData]),
                          checked: true,
                        });
                      }
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Delete Model */}
        <Modal centered show={this.state.isOpen} onHide={this.closeModal}>
          <Modal.Header>
            <Modal.Title>Delete Assessment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to delete this assessment
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => this.deleteAssessment()}>
              Yes
            </Button>
            <Button variant="secondary" onClick={this.closeModal}>
              No
            </Button>
          </Modal.Footer>
        </Modal>
        {/* Send Message Modal */}
        <Modal
          show={this.state.isMessageModal}
          onHide={this.closeSendMessageModal}
          size="lg"
          centered
        >
          <Modal.Header>
            <Modal.Title>Select Template</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="modal-body-content">
              <div className="form-group">
                <label htmlFor="select_message">Select Message</label>
                <select
                  className="form-control"
                  id="select_message"
                  value={this.state.assesmentMessage}
                  onChange={(e) => {
                    this.setState({
                      assesmentMessage: e.target.value,
                    });
                  }}
                >
                  <option value="">Please select</option>
                  <option value="Heyy :) How have you been?">
                    Heyy :) How have you been?
                  </option>
                  <option value=" Hello :) I hope you are doing well!">
                    Hello :) I hope you are doing well!
                  </option>
                  <option value="I hope you are taking care of your mental health.">
                    I hope you are taking care of your mental health.
                  </option>
                  <option value="How was your weekend?">
                    How was your weekend?
                  </option>
                  <option
                    value=" Did you get time to go through the experts I suggested to
                    you?"
                  >
                    Did you get time to go through the experts I suggested to
                    you?
                  </option>
                  <option value=" How was the session? Did you like it?">
                    How was the session? Did you like it?
                  </option>
                  <option value="How you are feeling today?">
                    How you are feeling today?
                  </option>
                  <option value=" Is there something that is bothering you?">
                    Is there something that is bothering you?
                  </option>
                  <option value="Please take care 🙂">
                    Please take care 🙂
                  </option>
                  <option value="Any issues you are facing while booking the session?">
                    Any issues you are facing while booking the session?
                  </option>
                  <option
                    value="I would still suggest you should go ahead with a session
                    with our expert as he/she would help you"
                  >
                    I would still suggest you should go ahead with a session
                    with our expert as he/she would help you{" "}
                  </option>
                  <option
                    value="Hey the expert is available at this time and date. Let me
                    know if anyone of the date and time suits you."
                  >
                    Hey the expert is available at this time and date. Let me
                    know if anyone of the date and time suits you.
                  </option>
                  <option
                    value="Okay great! Here is the link, please book the session and
                    share the screenshot of the payment"
                  >
                    Okay great! Here is the link, please book the session and
                    share the screenshot of the payment
                  </option>
                </select>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={() => this.sendCampaignMessage()}
            >
              Submit
            </Button>
            <Button variant="secondary" onClick={this.closeSendMessageModal}>
              No
            </Button>
          </Modal.Footer>
        </Modal>
        {/* new campaign modal */}
        <Modal
          show={this.state.isNewCompaingeModal}
          onHide={this.closeSendMessageModal}
          size="lg"
          centered
        >
          <Modal.Header>
            <Modal.Title>Select Template</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="modal-body-content">
              <div className="form-group">
                <label htmlFor="select_message">Select Message</label>
                <select
                  className="form-control"
                  id="select_message"
                  value={this.state.campaignMessage}
                  onChange={(e) => {
                    this.setState({
                      campaignMessage: e.target.value,
                    });
                  }}
                >
                  <option value="">Please select</option>
                  <option value="auto_how_you_been">
                    Heyy :) How have you been?
                  </option>
                  <option value="auto_doing_well">
                    Hello :) I hope you are doing well!
                  </option>
                  <option value="auto_taking_care">
                    I hope you are taking care of your mental health.
                  </option>
                  <option value="auto_how_was_weekend">
                    How was your weekend?
                  </option>
                  <option value="auto_go_through_expert_suggested">
                    Did you get time to go through the experts I suggested to
                    you?
                  </option>
                  <option value="auto_session_feedback">
                    How was the session? Did you like it?
                  </option>
                  <option value="auto_session_feedback">
                    How you are feeling today?
                  </option>
                  <option value="auto_something_bothering_you">
                    Is there something that is bothering you?
                  </option>
                  <option value="auto_pleasea_take_care">
                    Please take care 🙂
                  </option>
                  <option value="auto_any_issues_facing">
                    Any issues you are facing while booking the session?
                  </option>
                  <option value="auto_suggest_go_ahead_session">
                    I would still suggest you should go ahead with a session
                    with our expert as he/she would help you{" "}
                  </option>
                  <option value="auto_expert_timing">
                    Hey the expert is available at this time and date. Let me
                    know if anyone of the date and time suits you.
                  </option>
                  <option value="auto_please_book">
                    Okay great! Here is the link, please book the session and
                    share the screenshot of the payment
                  </option>
                </select>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => this.addNewCampaign()}>
              Submit
            </Button>
            <Button variant="secondary" onClick={this.closeSendMessageModal}>
              No
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
