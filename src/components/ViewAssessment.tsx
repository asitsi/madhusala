import { Component } from 'react';
import IAssessmentData from '../types/assessment.type';
import AssessmentDataService from "../services/assessment.service";

type Props = {
  match: any,
  history: any
};

type State = {
  info: any,
};

class ViewAssessment extends Component<Props, State> {
  scriptUrl = "https://script.google.com/macros/s/AKfycbyzOobJAgOngXpSPpaqaZ18eHufvL0wgjCjh8hZXiSWuUOP2ACgT76rytrkPqK5PjrF/exec";

  constructor(props: Props) {
    super(props);
    this.state = {
      info: null,
    }
  }

  componentDidMount() {
    if (typeof this.props.match.params.id !== 'undefined' && this.props.match.params.id !== '') {
      this.getAssessmentDetailById();
    }
  }

  getAssessmentDetailById() {
    AssessmentDataService.get(this.props.match.params.id)
      .then((response: any) => {
        if (Object.keys(response.data.data).length > 0) {
          this.setState({ info: response.data.data })
        }
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  render() {
    return (
      <div className='container mb-5'>
        <h5 className="mt-4 mb-0"><b>Screening Information</b></h5>
        <div className='profileview'>

          <div className='view_block'>
            <h3>Screening Date</h3>
            <p>{this.state.info?.date}</p>
          </div>
          <div className='view_block'>
            <h3>Screening Time (24H Format)</h3>
            <p>{this.state.info?.time}</p>
          </div>
          <div className='view_block'>
            <h3>Screening Expert</h3>
            <p>{this.state.info?.expert}</p>
          </div>
          <div className='view_block'>
            <h3>Lead Owner</h3>
            <p>{this.state.info?.lead_owner}</p>
          </div>
          <div className='view_block'>
            <h3>Lead Status</h3>
            <p>{this.state.info?.lead_status}</p>
          </div>
          <div className='view_block'>
            <h3>Screening Call Picked</h3>
            <p>{this.state.info?.call_picked}</p>
          </div>
        </div>

        <h5 className="mt-4 mb-0"><b>Client Information</b></h5>
        <div className='profileview '>
          <div className='view_block'>
            <h3>Name</h3>
            <p>{this.state.info?.client_information?.name}</p>
          </div>
          <div className='view_block'>
            <h3>Email</h3>
            <p>{this.state.info?.client_information?.email}</p>
          </div>
          <div className='view_block'>
            <h3>Phone</h3>
            <p>{this.state.info?.client_information?.phone}</p>
          </div>
          <div className='view_block'>
            <h3>Age</h3>
            <p>{this.state.info?.client_information?.age}</p>
          </div>
          <div className='view_block'>
            <h3>Gender</h3>
            <p>{this.state.info?.client_information?.gender}</p>
          </div>
          <div className='view_block'>
            <h3>Country</h3>
            <p>{this.state.info?.client_information?.country}</p>
          </div>
          <div className='view_block'>
            <h3>State</h3>
            <p>{this.state.info?.client_information?.state ?
              this.state.info?.client_information?.state
              :
              "NA"
            }</p>
          </div>
          <div className='view_block'>
            <h3>City</h3>
            <p>{this.state.info?.client_information?.city}</p>
          </div>
          <div className='view_block'>
            <h3>Budget</h3>
            <p>{this.state.info?.screening_result?.budget}</p>
          </div>
          <div className='view_block'>
            <h3>Educational Qualification</h3>
            <p>{this.state.info?.client_information?.educational_qualification}</p>
          </div>
          <div className='view_block'>
            <h3>Relationship Status</h3>
            <p>{this.state.info?.client_information?.relationship_status}</p>
          </div>
          <div className='view_block'>
            <h3>Occupation</h3>
            <p>{this.state.info?.client_information?.occupation}</p>
          </div>
          <div className='view_block'>
            <h3>Occupation Type</h3>
            <p>{this.state.info?.client_information?.occupation_type}</p>
          </div>
          <div className='view_block'>
            <h3>Student</h3>
            <p>{this.state.info?.client_information?.student}</p>
          </div>
        </div>

        <h5 className="mt-4 mb-0"><b>Psychological Information</b></h5>
        <div className='profileview'>
          <div className='view_block w-100'>
            <h3>Issues</h3>
            <p className='text-capitalize'>
              {this.state.info?.screening_information?.issues.map((issues: any) =>
                <span>{issues}, </span>,
              )}
            </p>
          </div>
          <div className='view_block'>
            <h3>Symptoms</h3>
            <p>{this.state.info?.screening_information?.symptoms}</p>
          </div>
          <div className='view_block'>
            <h3>Frequency of Symptoms</h3>
            <p className='text-capitalize'>{this.state.info?.screening_information?.frequency_of_symptoms}</p>
          </div>
          <div className='view_block'>
            <h3>Medication History</h3>
            <p>{this.state.info?.screening_information?.medication_history}</p>
          </div>
          <div className='view_block'>
            <h3>Therapeutic Histroy</h3>
            <p>{this.state.info?.screening_information?.therapeutic_histroy}</p>
          </div>
          <div className='view_block w-50'>
            <h3>Types of Theraputic History</h3>
            <p className='text-capitalize'>
              {this.state.info?.screening_information?.types_of_theraputic_history.map((therapies: any) =>
                <span>{therapies}, </span>
              )}
            </p>
          </div>
          <div className='view_block'>
            <h3>Urgency of Intervention</h3>
            <p>{this.state.info?.screening_information?.urgency_of_intervention}</p>
          </div>
          <div className='view_block'>
            <h3>Reason for Interest</h3>
            <p>{this.state.info?.screening_result?.reason_for_interest}</p>
          </div>
          <div className='view_block'>
            <h3>Length of Concern</h3>
            <p>{this.state.info?.screening_result?.length_of_concern}</p>
          </div>
          <div className='view_block'>
            <h3>Current Physical Fitness</h3>
            <p>{this.state.info?.screening_result?.current_physical_fitness}</p>
          </div>
          <div className='view_block'>
            <h3>Health Problems</h3>
            <p>{this.state.info?.screening_result?.health_problems}</p>
          </div>
          <div className='view_block'>
            <h3>Physical Pain</h3>
            <p>{this.state.info?.screening_result?.physical_pain}</p>
          </div>
        </div>


        <h5 className="mt-4 mb-0"><b>Treatment Preferences</b></h5>
        <div className='profileview '>
          <div className='view_block'>
            <h3>Therapy Delivery Modes</h3>
            <p>{this.state.info?.treatment_preferences?.therapy_delivery_modes}</p>
          </div>
          <div className='view_block'>
            <h3>Therapy Type</h3>
            <p className='text-capitalize'>
              {this.state.info?.treatment_preferences?.therapy_type.map((therapy: any) =>
                <span>{therapy}, </span>
              )}
            </p>
          </div>
          <div className='view_block'>
            <h3>Preferred Language</h3>
            <p className='text-capitalize'>{this.state.info?.treatment_preferences?.preferred_language}</p>
          </div>
        </div>

        <h5 className="mt-4 mb-0"><b>Screening Result</b></h5>
        <div className='profileview '>
          <div className='view_block'>
            <h3>Suggested expert name 1</h3>
            <p>{this.state.info?.screening_result?.suggested_expert_name1 || this.state.info?.screening_result?.suggested_expert_name}</p>
          </div>
          <div className='view_block'>
            <h3>Suggested expert name 2</h3>
            <p>{this.state.info?.screening_result?.suggested_expert_name2}</p>
          </div>
          <div className='view_block'>
            <h3>Suggested expert name 3</h3>
            <p>{this.state.info?.screening_result?.suggested_expert_name3}</p>
          </div>
          <div className='view_block'>
            <h3>Suggest therapy type</h3>
            <p>{this.state.info?.screening_result?.suggest_therapy_type}</p>
          </div>
          <div className='view_block'>
            <h3>Physical pain description</h3>
            <p>
              {this.state.info?.screening_result?.physical_pain_description ?
                this.state.info?.screening_result?.physical_pain_description
                :
                "NA"
              }
            </p>
          </div>



        </div>

        <h5 className="mt-4 mb-0"><b>Notes</b></h5>
        <div className='profileview'>
          <div className='view_block w-100'>
            <h3>Notes</h3>
            <p>{this.state.info?.notes}</p>
          </div>
        </div>




      </div>
    )
  }

}

export default ViewAssessment