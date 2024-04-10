import { Component } from 'react';
import IAssessmentData from '../types/assessment.type';
import AssessmentDataService from "../services/assessment.service";

type Props = {
  match: any,
  history: any
};

type State = IAssessmentData & {
  nameError: boolean,
  emailError: boolean,
  phoneError: boolean,
  genderError: boolean,
  ageError: boolean,
  [key: string]: any
};

class EditAssessment extends Component<Props, State> {
  scriptUrl = "https://script.google.com/macros/s/AKfycbyzOobJAgOngXpSPpaqaZ18eHufvL0wgjCjh8hZXiSWuUOP2ACgT76rytrkPqK5PjrF/exec";

  constructor(props: Props) {
    super(props);

    this.state = {
      date: "",
      time: "",
      expert: "",
      name: "",
      email: "",
      phone: "",
      call_picked: "",
      age: "",
      gender: "",
      country: "india",
      state: "",
      city: "",
      nationality: "indian",
      languages: [],
      educational_qualification: "",
      relationship_status: "",
      dependents: "",
      student: "",
      occupation: "",
      occupation_type: "",
      family_mental_history: "",
      symptoms: "",
      frequency_of_symptoms: "",
      medication_history: "",
      therapeutic_histroy: "",
      types_of_theraputic_history: [],
      urgency_of_intervention: "",
      gender_of_therapist: "",
      age_group_of_therapist: "",
      therapy_delivery_modes: [],
      therapy_type: [],
      preferred_language: "",
      expert_suggested: "",
      suggested_expert_name1: "",
      suggested_expert_name2: "",
      suggested_expert_name3: "",
      suggest_therapy_type: "",
      notes: "",
      issues: [],
      reason_for_interest: "",
      length_of_concern: "",
      current_physical_fitness: "",
      exercise_routine: "",
      health_problems: "",
      physical_pain: "",
      physical_pain_description: "",
      budget: "",
      lead_owner: "",
      lead_status: "",
      nameError: false,
      emailError: false,
      phoneError: false,
      genderError: false,
      ageError: false,
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
          const data = response.data.data;
          this.setState({
            name: data.client_information.name,
            email: data.client_information.email,
            phone: data.client_information.phone,
            age: data.client_information.age,
            gender: data.client_information.gender,
            country: data.client_information.country,
            state: data.client_information.state,
            city: data.client_information.city,
            nationality: data.client_information.nationality,
            languages: data.client_information.languages_known,
            educational_qualification: data.client_information.educational_qualification,
            relationship_status: data.client_information.relationship_status,
            dependents: data.client_information.dependents,
            student: data.client_information.student,
            occupation: data.client_information.occupation,
            occupation_type: data.client_information.occupation_type,
            family_mental_history: data.client_information.family_mental_history,
            date: data.date,
            time: data.time,
            notes: data.notes,
            expert: data.expert,

            gender_of_therapist: data.expert_preferences.gender_of_therapist,
            age_group_of_therapist: data.expert_preferences.age_group_of_therapist,

            issues: data.screening_information.issues,
            symptoms: data.screening_information.symptoms,
            frequency_of_symptoms: data.screening_information.frequency_of_symptoms,
            medication_history: data.screening_information.medication_history,
            therapeutic_histroy: data.screening_information.therapeutic_histroy,
            types_of_theraputic_history: data.screening_information.types_of_theraputic_history,
            urgency_of_intervention: data.screening_information.urgency_of_intervention,

            reason_for_interest: data.screening_result.reason_for_interest,
            length_of_concern: data.screening_result.length_of_concern,
            current_physical_fitness: data.screening_result.current_physical_fitness,
            exercise_routine: data.screening_result.exercise_routine,
            health_problems: data.screening_result.health_problems,
            physical_pain: data.screening_result.physical_pain,
            physical_pain_description: data.screening_result.physical_pain_description,
            budget: data.screening_result.budget,
            expert_suggested: data.screening_result.expert_suggested,
            suggested_expert_name1: data.screening_result.suggested_expert_name1,
            suggested_expert_name2: data.screening_result.suggested_expert_name2,
            suggested_expert_name3: data.screening_result.suggested_expert_name3,
            suggest_therapy_type: data.screening_result.suggest_therapy_type,

            therapy_delivery_modes: data.treatment_preferences.therapy_delivery_modes,
            therapy_type: data.treatment_preferences.therapy_type,
            preferred_language: data.treatment_preferences.preferred_language,

            lead_owner: typeof data.status !== 'undefined' ? data.status.lead_owner : '',
            lead_status: typeof data.status !== 'undefined' ? data.status.lead_status : '',
            call_picked: this.state.call_picked,
          })
        }

      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  onChangeField = (event: any) => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  }

  onChangeLanguage = (e: any) => {
    if (!e.target.checked) {
      const result = this.state.languages.filter(x => x !== e.target.name);
      this.setState({ languages: [...result] });

    } else {
      this.setState(prevState => ({ languages: [...prevState.languages, e.target.name] }))
    }
  }

  onChangeIssues = (e: any) => {
    if (!e.target.checked) {
      const result = this.state.issues.filter(x => x !== e.target.name);
      this.setState({ issues: [...result] });

    } else {
      this.setState(prevState => ({ issues: [...prevState.issues, e.target.name] }));
    }
  }

  onChangeTypesOfTheraputicHistory = (e: any) => {
    if (!e.target.checked) {
      const result = this.state.types_of_theraputic_history.filter(x => x !== e.target.name);
      this.setState({ types_of_theraputic_history: [...result] });

    } else {
      this.setState(prevState => ({ types_of_theraputic_history: [...prevState.types_of_theraputic_history, e.target.name] }));
    }
  }

  onChangeTherapyDeliveryMode = (e: any) => {
    if (!e.target.checked) {
      const result = this.state.therapy_delivery_modes.filter(x => x !== e.target.name);
      this.setState({ therapy_delivery_modes: [...result] });

    } else {
      this.setState(prevState => ({ therapy_delivery_modes: [...prevState.therapy_delivery_modes, e.target.name] }));
    }
  }

  onChangeTherapyType = (e: any) => {
    if (!e.target.checked) {
      const result = this.state.therapy_type.filter(x => x !== e.target.name);
      this.setState({ therapy_type: [...result] });

    } else {
      this.setState(prevState => ({ therapy_type: [...prevState.therapy_type, e.target.name] }));
    }
  }

  fieldValidation = (fieldName: string) => {
    this.setState({ [fieldName]: true })
    return false;
  }

  resetValidationState = () => {
    this.setState({
      nameError: false, emailError: false, phoneError: false, ageError: false, genderError: false,
      cityError: false, studentError: false, occupationError: false, issueError: false,
      frequency_of_symptomsError: false, length_of_concernError: false, physical_painError: false, budgetError: false,
      gender_of_therapistError: false, age_group_of_therapistError: false, therapy_delivery_modesError: false,
      therapy_typeError: false, preferred_languageError: false,
      suggested_expert_nameError: false, suggest_therapy_typeError: false,
      lead_ownerError: false, lead_statusError: false, call_pickedError: false
    });
  }

  saveAssessment = () => {

    this.resetValidationState();

    if (this.state.call_picked == "no") {
      if (this.state.name === '' && this.state.email === '' && this.state.phone === '') {
        this.setState({ nameError: true, emailError: true, phoneError: true })
      } else if (this.state.name === '') {
        return this.fieldValidation('nameError');

      } else if (this.state.email === '') {
        return this.fieldValidation('emailError');

      } else if (this.state.phone === '') {
        return this.fieldValidation('phoneError');
      }
    } else {
      if (this.state.name === '' && this.state.email === '' && this.state.phone === '' && this.state.age === '' &&
        this.state.gender === '' && this.state.city === '' && this.state.student === '' && this.state.occupation === '' &&
        this.state.issues.length === 0 && this.state.symptoms === '' && this.state.frequency_of_symptoms === '' &&
        this.state.length_of_concern === '' && this.state.physical_pain === '' && this.state.budget === '' &&
        this.state.gender_of_therapist === '' && this.state.age_group_of_therapist === '' &&
        this.state.therapy_delivery_modes.length === 0 && this.state.therapy_type.length === 0 &&
        this.state.preferred_language === '' && this.state.suggested_expert_name1 === '' &&
        this.state.suggested_expert_name2 === '' && this.state.suggested_expert_name3 === '' && this.state.suggest_therapy_type === '' && this.state.lead_owner === '' &&
        this.state.lead_status === '') {
        this.setState({
          nameError: true, emailError: true, phoneError: true, ageError: true, genderError: true,
          cityError: true, studentError: true, occupationError: true, issueError: true,
          frequency_of_symptomsError: true, length_of_concernError: true, physical_painError: true, budgetError: true,
          gender_of_therapistError: true, age_group_of_therapistError: true, therapy_delivery_modesError: true,
          therapy_typeError: true, preferred_languageError: true,
          suggested_expert_nameError: true, suggest_therapy_typeError: true,
          lead_ownerError: true, lead_statusError: true, call_pickedError: true,
        });
        return false;

      } else if (this.state.call_picked === '') {
        return this.fieldValidation('call_pickedError');

      } else if (this.state.lead_owner === '') {
        return this.fieldValidation('lead_ownerError');

      } else if (this.state.lead_status === '') {
        return this.fieldValidation('lead_statusError');

      } else if (this.state.name === '') {
        return this.fieldValidation('nameError');

      } else if (this.state.email === '') {
        return this.fieldValidation('emailError');

      } else if (this.state.phone === '') {
        return this.fieldValidation('phoneError');

      } else if (this.state.age === '') {
        return this.fieldValidation('ageError');

      } else if (this.state.gender === '') {
        return this.fieldValidation('genderError');

      } else if (this.state.city === '') {
        return this.fieldValidation('cityError');

      } else if (this.state.student === '') {
        return this.fieldValidation('studentError');

      } else if (this.state.occupation === '') {
        return this.fieldValidation('occupationError');

      } else if (this.state.issues.length === 0) {
        return this.fieldValidation('issueError');

      } else if (this.state.frequency_of_symptoms === '') {
        return this.fieldValidation('frequency_of_symptomsError');

      } else if (this.state.length_of_concern === '') {
        return this.fieldValidation('length_of_concernError');

      } else if (this.state.physical_pain === '') {
        return this.fieldValidation('physical_painError');

      } else if (this.state.call_picked === '') {
        return this.fieldValidation('call_pickedError');

      } else if (this.state.budget === '') {
        return this.fieldValidation('budgetError');

      } else if (this.state.gender_of_therapist === '') {
        return this.fieldValidation('gender_of_therapistError');

      } else if (this.state.age_group_of_therapist === '') {
        return this.fieldValidation('age_group_of_therapistError');

      } else if (this.state.therapy_delivery_modes.length === 0) {
        return this.fieldValidation('therapy_delivery_modesError');

      } else if (this.state.therapy_type.length === 0) {
        return this.fieldValidation('therapy_typeError');

      } else if (this.state.preferred_language === '') {
        return this.fieldValidation('preferred_languageError');

      } else if (this.state.suggested_expert_name1 === '') {
        return this.fieldValidation('suggested_expert_nameError');

      } else if (this.state.suggest_therapy_type === '') {
        return this.fieldValidation('suggest_therapy_typeError');
      }
    }

    const data: IAssessmentData = {
      date: this.state.date,
      time: this.state.time,
      expert: this.state.expert,
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      age: this.state.age,
      gender: this.state.gender,
      country: this.state.country,
      state: this.state.state,
      city: this.state.city,
      nationality: this.state.nationality,
      languages: this.state.languages,
      educational_qualification: this.state.educational_qualification,
      relationship_status: this.state.relationship_status,
      dependents: this.state.dependents,
      student: this.state.student,
      occupation: this.state.occupation,
      occupation_type: this.state.occupation_type,
      family_mental_history: this.state.family_mental_history,
      symptoms: this.state.symptoms,
      frequency_of_symptoms: this.state.frequency_of_symptoms,
      medication_history: this.state.medication_history,
      therapeutic_histroy: this.state.therapeutic_histroy,
      types_of_theraputic_history: this.state.types_of_theraputic_history,
      urgency_of_intervention: this.state.urgency_of_intervention,
      gender_of_therapist: this.state.gender_of_therapist,
      age_group_of_therapist: this.state.age_group_of_therapist,
      therapy_delivery_modes: this.state.therapy_delivery_modes,
      therapy_type: this.state.therapy_type,
      preferred_language: this.state.preferred_language,
      expert_suggested: this.state.expert_suggested,
      suggested_expert_name1: this.state.suggested_expert_name1,
      suggested_expert_name2: this.state.suggested_expert_name2,
      suggested_expert_name3: this.state.suggested_expert_name3,
      suggest_therapy_type: this.state.suggest_therapy_type,
      notes: this.state.notes,
      reason_for_interest: this.state.reason_for_interest,
      length_of_concern: this.state.length_of_concern,
      current_physical_fitness: this.state.current_physical_fitness,
      exercise_routine: this.state.exercise_routine,
      health_problems: this.state.health_problems,
      physical_pain: this.state.physical_pain,
      physical_pain_description: this.state.physical_pain_description,
      budget: this.state.budget,
      issues: this.state.issues,
      lead_owner: this.state.lead_owner,
      lead_status: this.state.lead_status,
      call_picked: this.state.call_picked,
    };

    let formData = new FormData();
    formData.append('date', this.state.date);
    formData.append('time', this.state.time);
    formData.append('expert', this.state.expert);
    formData.append('name', this.state.name);
    formData.append('email', this.state.email);
    formData.append('phone', this.state.phone);
    formData.append('age', this.state.age);
    formData.append('gender', this.state.gender);
    formData.append('country', this.state.country);
    formData.append('state', this.state.state);
    formData.append('city', this.state.city);
    formData.append('nationality', this.state.nationality);
    formData.append('languages', JSON.stringify(this.state.languages));
    formData.append('educational_qualification', this.state.educational_qualification);
    formData.append('relationship_status', this.state.relationship_status);
    formData.append('dependents', this.state.dependents);
    formData.append('student', this.state.student);
    formData.append('occupation', this.state.occupation);
    formData.append('occupation_type', this.state.occupation_type);
    formData.append('family_mental_history', this.state.family_mental_history);
    formData.append('issues', JSON.stringify(this.state.issues));
    formData.append('symptoms', this.state.symptoms);
    formData.append('frequency_of_symptoms', this.state.frequency_of_symptoms);
    formData.append('medication_history', this.state.medication_history);
    formData.append('therapeutic_histroy', this.state.therapeutic_histroy);
    formData.append('types_of_theraputic_history', JSON.stringify(this.state.types_of_theraputic_history));
    formData.append('urgency_of_intervention', this.state.urgency_of_intervention);
    formData.append('reason_for_interest', this.state.reason_for_interest);
    formData.append('length_of_concern', this.state.length_of_concern);
    formData.append('current_physical_fitness', this.state.current_physical_fitness);
    formData.append('exercise_routine', this.state.exercise_routine);
    formData.append('health_problems', this.state.health_problems);
    formData.append('physical_pain', this.state.physical_pain);
    formData.append('physical_pain_description', this.state.physical_pain_description);
    formData.append('budget', this.state.budget);
    formData.append('gender_of_therapist', this.state.gender_of_therapist);
    formData.append('age_group_of_therapist', this.state.age_group_of_therapist);
    formData.append('therapy_delivery_modes', JSON.stringify(this.state.therapy_delivery_modes));
    formData.append('therapy_type', JSON.stringify(this.state.therapy_type));
    formData.append('preferred_language', this.state.preferred_language);
    formData.append('expert_suggested', this.state.expert_suggested);
    formData.append('suggested_expert_name1', this.state.suggested_expert_name1);
    formData.append('suggested_expert_name2', this.state.suggested_expert_name2);
    formData.append('suggested_expert_name3', this.state.suggested_expert_name3);
    formData.append('suggest_therapy_type', this.state.suggest_therapy_type);
    formData.append('notes', this.state.notes);
    formData.append('lead_owner', this.state.lead_owner);
    formData.append('lead_status', this.state.lead_status);
    formData.append('call_picked', this.state.call_picked);

    fetch(this.scriptUrl, { method: 'POST', body: formData })
      .then(res => { console.log("Sheet Updated Successfully"); })
      .catch(err => console.log(err))

    AssessmentDataService.update(data, this.props.match.params.id)
      .then((response: any) => {
        this.props.history.push('/assessments');
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  render() {
    return (
      <div>
        <div className="mb-5">
          <div>
            <h1 className="mt-4 mb-2">Project Magpie</h1>
          </div>
          <h5 className="mt-4 mb-2"><b>Screening Information</b></h5>
          <div className="row">
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="call_picked">Complete Screening?**</label>
                <br />
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="call_picked" id="inlineRadio131"
                    value="yes" required onChange={(e) => this.onChangeField(e)} />
                  <label className="form-check-label" htmlFor="inlineRadio131">Yes</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="call_picked" id="inlineRadio141"
                    value="no" required onChange={(e) => this.onChangeField(e)} />
                  <label className="form-check-label" htmlFor="inlineRadio141">No</label>
                </div>
                {this.state.call_pickedError && <span className='text-danger d-block'>Field is required</span>}
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="date">Screening Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  required
                  value={this.state.date}
                  onChange={(e) => this.onChangeField(e)}
                  name="date"
                />
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="time">Screening Time (24H Format)</label>
                <input
                  type="time"
                  className="form-control"
                  id="time"
                  required
                  value={this.state.time}
                  onChange={(e) => this.onChangeField(e)}
                  name="time"
                />
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="expert">Screening Expert</label>
                <select
                  className="form-control"
                  id="expert"
                  required
                  value={this.state.expert}
                  onChange={(e) => this.onChangeField(e)}
                  name="expert"
                >
                  <option value="">Select Screening Expert</option>
                  {/* <option value="screening_expert01_mahi">Mahi</option> */}
                  <option value="screening_expert02_tamanna">Tamanna</option>
                  <option value="screening_expert03_khushboo">Khushboo</option>
                  <option value="screening_expert04_rachel">Rachel</option>
                </select>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="lead_owner">Lead Owner*</label>
                <select className="form-control" name="lead_owner" required
                  value={this.state.lead_owner} onChange={(e) => this.onChangeField(e)}
                >
                  <option value="">Select lead owner</option>
                  <option value="tamanna">Tamanna</option>
                  <option value="rachel">Rachel</option>
                  <option value="apporva">Khushboo</option>
                </select>
                {this.state.lead_ownerError && <span className='text-danger'>Field is required</span>}
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="lead_status">Lead Status*</label>
                <select className="form-control" name="lead_status" required
                  value={this.state.lead_status} onChange={(e) => this.onChangeField(e)}
                >
                  <option value="">Select Lead Status</option>
                  <option value="UPCOMING_SCREENING">Upcoming Screening</option>
                  <option value="MONTHLY">Monthly Follow-up</option>
                  <option value="RESCHEDULE">Reschedule</option>
                  <option value="TEXT_SCR">Text Screening</option>
                  <option value="DAY1_FIRST">Booking Followup Day 1 First</option>
                  <option value="DAY1_SECOND">Booking Followup Day 1 Second</option>
                  <option value="DAY2">Booking Followup Day 2</option>
                  <option value="DAY3">Booking Followup Day 3</option>
                  <option value="BOOKED">Booked</option>
                  <option value="EXPERT_BOOKING">Expert Booking</option>
                  <option value="SUBSCRIBED">Subscribed</option>
                  <option value="DEAD">Dead</option>
                  <option value="URGENT">Urgent</option>
                  <option value="WORKSHOP">WORKSHOP</option>
                </select>
                {this.state.lead_statusError && <span className='text-danger'>Field is required</span>}
              </div>
            </div>
          </div>

          <h5 className="mt-4 mb-2"><b>Client Information</b></h5>
          <div className="row">
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="name">Name*</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  value={this.state.name}
                  onChange={(e) => this.onChangeField(e)}
                  name="name"
                />
                {this.state.nameError && <span className='text-danger'>Field is required</span>}
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  required
                  value={this.state.email}
                  onChange={(e) => this.onChangeField(e)}
                  name="email"
                />
                {this.state.emailError && <span className='text-danger'>Field is required</span>}
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="phone">Phone*</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  required
                  value={this.state.phone}
                  onChange={(e) => this.onChangeField(e)}
                  name="phone"
                />
                {this.state.phoneError && <span className='text-danger'>Field is required</span>}
              </div>
            </div>
            <div className="col-sm-3"></div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="age">Age*</label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  required
                  value={this.state.age}
                  onChange={(e) => this.onChangeField(e)}
                  name="age"
                />
                {this.state.ageError && <span className='text-danger'>Field is required</span>}
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="gender">Gender*</label>
                <select
                  className="form-control"
                  id="gender"
                  required
                  value={this.state.gender}
                  onChange={(e) => this.onChangeField(e)}
                  name="gender"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {this.state.genderError && <span className='text-danger'>Field is required</span>}
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="state">State</label>
                <select
                  className="form-control"
                  name="state"
                  required
                  id="state"
                  value={this.state.state}
                  onChange={(e) => this.onChangeField(e)}
                >
                  <option value="">Select State</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Andaman and Nicobar Islands">
                    Andaman and Nicobar Islands
                  </option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadar and Nagar Haveli">
                    Dadar and Nagar Haveli
                  </option>
                  <option value="Daman and Diu">Daman and Diu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Puducherry">Puducherry</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="city">City*</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  required
                  name="city"
                  value={this.state.city}
                  onChange={(e) => this.onChangeField(e)}
                />
                {this.state.cityError && <span className='text-danger'>Field is required</span>}
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="budget">Budget*</label>
                <select
                  className="form-control"
                  name="budget"
                  required
                  id="budget"
                  value={this.state.budget}
                  onChange={(e) => this.onChangeField(e)}
                >
                  <option value="">Selected Budget Group</option>
                  <option value="0">Free</option>
                  <option value="<500">Less than 500</option>
                  <option value="500-1000">500-1000</option>
                  <option value="1001-1500">1001-1500</option>
                  <option value=">1500">More than 1500</option>
                </select>
                {this.state.budgetError && <span className='text-danger'>Field is required</span>}
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="educational_qualification">Educational Qualification</label>
                <select
                  className="form-control"
                  name="educational_qualification"
                  required
                  id="educational_qualification"
                  value={this.state.educational_qualification}
                  onChange={(e) => this.onChangeField(e)}
                >
                  <option value="">Select Education Level</option>
                  <option value="no_formal_education">No Formal Education</option>
                  <option value="pre_high_school">Pre High School</option>
                  <option value="high_school">High School</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="bachelor">Bachelor</option>
                  <option value="masters">Masters</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="relationship_status">Relationship Status</label>
                <select
                  className="form-control"
                  name="relationship_status"
                  required
                  id="relationship_status"
                  value={this.state.relationship_status}
                  onChange={(e) => this.onChangeField(e)}
                >
                  <option value="">Select Relationship Status</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                  <option value="seperated">Seperated</option>
                  <option value="widowed">Widowed</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="dependents">Dependents</label>
                <br />
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="dependents" id="inlineRadio1" value="yes"
                    checked={this.state.dependents === 'yes'}
                    onChange={(e) => this.onChangeField(e)} />
                  <label className="form-check-label" htmlFor="inlineRadio1">Yes</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="dependents" id="inlineRadio2" value="no"
                    checked={this.state.dependents === 'no'}
                    onChange={(e) => this.onChangeField(e)} />
                  <label className="form-check-label" htmlFor="inlineRadio2">No</label>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="student">Student*</label>
                <br />
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="student" id="inlineRadio132" value="yes"
                    checked={this.state.student === 'yes'}
                    onChange={(e) => this.onChangeField(e)} />
                  <label className="form-check-label" htmlFor="inlineRadio132">Yes</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="student" id="inlineRadio142" value="no"
                    checked={this.state.student === 'no'}
                    onChange={(e) => this.onChangeField(e)} />
                  <label className="form-check-label" htmlFor="inlineRadio142">No</label>
                </div>
                {this.state.studentError && <span className='text-danger d-block'>Field is required</span>}
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="occupation">Occupation*</label>
                <input
                  type="text"
                  className="form-control"
                  id="occupation"
                  required
                  name="occupation"
                  value={this.state.occupation}
                  onChange={(e) => this.onChangeField(e)}
                />
                {this.state.occupationError && <span className='text-danger'>Field is required</span>}
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="occupation_type">Occupation Type</label>
                <select
                  className="form-control"
                  name="occupation_type"
                  required
                  id="occupation_type"
                  value={this.state.occupation_type}
                  onChange={(e) => this.onChangeField(e)}
                >
                  <option value="">Select If Applicable</option>
                  <option value="government">Government</option>
                  <option value="private">Private</option>
                  <option value="personal">Personal</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="family_mental_history">
                  Family Mental Health Histroy
                </label>
                <br />
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="family_mental_history" id="inlineRadio3"
                    value="yes" checked={this.state.family_mental_history === 'yes'}
                    onChange={(e) => this.onChangeField(e)} />
                  <label className="form-check-label" htmlFor="inlineRadio3">Yes</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="family_mental_history" id="inlineRadio4"
                    value="no" checked={this.state.family_mental_history === 'no'}
                    onChange={(e) => this.onChangeField(e)} />
                  <label className="form-check-label" htmlFor="inlineRadio4">No</label>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <h5 className="mt-4 mb-2"><b>Psychological Information</b></h5>
              <h6>Issues*</h6>
              <div className="form-group">
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="overwhelming_sadness"
                    id="overwhelming_sadness"
                    checked={this.state.issues.includes('overwhelming_sadness')}
                    onChange={(e) => this.onChangeIssues(e)}
                  />
                  <label className="form-check-label" htmlFor="overwhelming_sadness">
                    Overwhelming Sadness
                  </label>
                </div>
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="depressed_mood"
                    id="depressed_mood"
                    checked={this.state.issues.includes('depressed_mood')}
                    onChange={(e) => this.onChangeIssues(e)}
                  />
                  <label className="form-check-label" htmlFor="depressed_mood">
                    Depressed Mood
                  </label>
                </div>
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="grief"
                    id="grief"
                    checked={this.state.issues.includes('grief')}
                    onChange={(e) => this.onChangeIssues(e)}
                  />
                  <label className="form-check-label" htmlFor="grief">
                    Grief
                  </label>
                </div>
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="unable_to_enjoy_activities"
                    id="unable_to_enjoy_activities"
                    checked={this.state.issues.includes('unable_to_enjoy_activities')}
                    onChange={(e) => this.onChangeIssues(e)}
                  />
                  <label className="form-check-label" htmlFor="unable_to_enjoy_activities">
                    Unable To Enjoy Activities
                  </label>
                </div>
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="decreased_need_for_sleep"
                    id="decreased_need_for_sleep"
                    checked={this.state.issues.includes('decreased_need_for_sleep')}
                    onChange={(e) => this.onChangeIssues(e)}
                  />
                  <label className="form-check-label" htmlFor="decreased_need_for_sleep">
                    Decreased Need For Sleep
                  </label>
                </div>
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="loss_of_interest"
                    id="loss_of_interest"
                    checked={this.state.issues.includes('loss_of_interest')}
                    onChange={(e) => this.onChangeIssues(e)}
                  />
                  <label className="form-check-label" htmlFor="loss_of_interest">
                    Loss of interest
                  </label>
                </div>
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="difficulties_in_concentration"
                    id="difficulties_in_concentration"
                    checked={this.state.issues.includes('difficulties_in_concentration')}
                    onChange={(e) => this.onChangeIssues(e)}
                  />
                  <label className="form-check-label" htmlFor="difficulties_in_concentration">
                    Difficulties In Concentration
                  </label>
                </div>
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="increase_in_appetite"
                    id="increase_in_appetite"
                    checked={this.state.issues.includes('increase_in_appetite')}
                    onChange={(e) => this.onChangeIssues(e)}
                  />
                  <label className="form-check-label" htmlFor="increase_in_appetite">
                    Increase In Appetite
                  </label>
                </div>
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="decrease_in_appetite"
                    id="decrease_in_appetite"
                    checked={this.state.issues.includes('decrease_in_appetite')}
                    onChange={(e) => this.onChangeIssues(e)}
                  />
                  <label className="form-check-label" htmlFor="decrease_in_appetite">
                    Decrease In Appetite
                  </label>
                </div>
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="excessive_guilt"
                    id="excessive_guilt"
                    checked={this.state.issues.includes('excessive_guilt')}
                    onChange={(e) => this.onChangeIssues(e)}
                  />
                  <label className="form-check-label" htmlFor="excessive_guilt">
                    Excessive Guilt
                  </label>
                </div>
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="increased_irritability"
                    id="increased_irritability"
                    checked={this.state.issues.includes('increased_irritability')}
                    onChange={(e) => this.onChangeIssues(e)}
                  />
                  <label className="form-check-label" htmlFor="increased_irritability">
                    Increased Irritability
                  </label>
                </div>
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="racing_thoughts"
                    id="racing_thoughts"
                    checked={this.state.issues.includes('racing_thoughts')}
                    onChange={(e) => this.onChangeIssues(e)}
                  />
                  <label className="form-check-label" htmlFor="racing_thoughts">
                    Racing thoughts
                  </label>
                </div>
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="impulsivity"
                    id="impulsivity"
                    checked={this.state.issues.includes('impulsivity')}
                    onChange={(e) => this.onChangeIssues(e)}
                  />
                  <label className="form-check-label" htmlFor="impulsivity">
                    Impulsivity
                  </label>
                </div>
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="Crying spells"
                    id="Crying spells"
                    checked={this.state.issues.includes('Crying spells')}
                    onChange={(e) => this.onChangeIssues(e)}
                  />
                  <label className="form-check-label" htmlFor="Crying spells">
                    Crying Spells
                  </label>
                </div>
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="anxiety"
                    id="anxiety"
                    checked={this.state.issues.includes('anxiety')}
                    onChange={(e) => this.onChangeIssues(e)}
                  />
                  <label className="form-check-label" htmlFor="anxiety">
                    Anxiety
                  </label>
                </div>
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="panic _attacks"
                    id="panic _attacks"
                    checked={this.state.issues.includes('panic _attacks')}
                    onChange={(e) => this.onChangeIssues(e)}
                  />
                  <label className="form-check-label" htmlFor="panic _attacks">
                    Panic Attacks
                  </label>
                </div>
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="unexplained_fears"
                    id="unexplained_fears"
                    checked={this.state.issues.includes('unexplained_fears')}
                    onChange={(e) => this.onChangeIssues(e)}
                  />
                  <label className="form-check-label" htmlFor="unexplained_fears">
                    Unexplained Fears
                  </label>
                </div>
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="excessive_worrying"
                    id="excessive_worrying"
                    checked={this.state.issues.includes('excessive_worrying')}
                    onChange={(e) => this.onChangeIssues(e)}
                  />
                  <label className="form-check-label" htmlFor="excessive_worrying">
                    Excessive Worrying
                  </label>
                </div>
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="avoidance"
                    id="avoidance"
                    checked={this.state.issues.includes('avoidance')}
                    onChange={(e) => this.onChangeIssues(e)}
                  />
                  <label className="form-check-label" htmlFor="avoidance">
                    Avoidance
                  </label>
                </div>
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="hallucinations"
                    id="hallucinations"
                    checked={this.state.issues.includes('hallucinations')}
                    onChange={(e) => this.onChangeIssues(e)}
                  />
                  <label className="form-check-label" htmlFor="hallucinations">
                    Hallucinations
                  </label>
                </div>
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="suspiciousness"
                    id="suspiciousness"
                    checked={this.state.issues.includes('suspiciousness')}
                    onChange={(e) => this.onChangeIssues(e)}
                  />
                  <label className="form-check-label" htmlFor="suspiciousness">
                    Suspiciousness
                  </label>
                </div>
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="increased_libido"
                    id="increased_libido"
                    checked={this.state.issues.includes('increased_libido')}
                    onChange={(e) => this.onChangeIssues(e)}
                  />
                  <label className="form-check-label" htmlFor="increased_libido">
                    Increased Libido
                  </label>
                </div>
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="decreased_libido"
                    id="decreased_libido"
                    checked={this.state.issues.includes('decreased_libido')}
                    onChange={(e) => this.onChangeIssues(e)}
                  />
                  <label className="form-check-label" htmlFor="decreased_libido">
                    Decreased Libido
                  </label>
                </div>
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="relationship"
                    id="relationship"
                    defaultValue="relationship"
                    onChange={this.onChangeIssues}
                  />
                  <label className="form-check-label" htmlFor="relationship">
                    Relationship
                  </label>
                </div>
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="breakup"
                    id="breakup"
                    defaultValue="breakup"
                    onChange={this.onChangeIssues}
                  />
                  <label className="form-check-label" htmlFor="breakup">
                    Breakup
                  </label>
                </div>
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="family_issues"
                    id="family_issues"
                    defaultValue="family_issues"
                    onChange={this.onChangeIssues}
                  />
                  <label className="form-check-label" htmlFor="family_issues">
                    Family Issues
                  </label>
                </div>
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="overthinking"
                    id="overthinking"
                    defaultValue="overthinking"
                    onChange={this.onChangeIssues}
                  />
                  <label className="form-check-label" htmlFor="overthinking">
                    Overthinking
                  </label>
                </div>
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="clinical_disorders"
                    id="clinical_disorders"
                    defaultValue="clinical_disorders"
                    onChange={this.onChangeIssues}
                  />
                  <label className="form-check-label" htmlFor="clinical_disorders">
                    Clinical Disorders
                  </label>
                </div>
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="suicidal_ideations"
                    id="suicidal_ideations"
                    defaultValue="suicidal_ideations"
                    onChange={this.onChangeIssues}
                  />
                  <label className="form-check-label" htmlFor="suicidal_ideations">
                    Suicidal Ideations
                  </label>
                </div>
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="loneliness"
                    id="loneliness"
                    defaultValue="loneliness"
                    onChange={this.onChangeIssues}
                  />
                  <label className="form-check-label" htmlFor="loneliness">
                    Loneliness
                  </label>
                </div>
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="procrastination"
                    id="procrastination"
                    defaultValue="procrastination"
                    onChange={this.onChangeIssues}
                  />
                  <label className="form-check-label" htmlFor="procrastination">
                    Procrastination
                  </label>
                </div>
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="increased_need_for_sleep"
                    id="increased_need_for_sleep"
                    defaultValue="increased_need_for_sleep"
                    onChange={this.onChangeIssues}
                  />
                  <label className="form-check-label" htmlFor="increased_need_for_sleep">
                    Increased Need For Sleep
                  </label>
                </div>
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="work_stress"
                    id="work_stress"
                    defaultValue="work_stress"
                    onChange={this.onChangeIssues}
                  />
                  <label className="form-check-label" htmlFor="work_stress">
                    Work Stress
                  </label>
                </div>
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="exam_stress"
                    id="exam_stress"
                    defaultValue="exam_stress"
                    onChange={this.onChangeIssues}
                  />
                  <label className="form-check-label" htmlFor="exam_stress">
                    Exam Stress
                  </label>
                </div>
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="self_esteem"
                    id="self_esteem"
                    defaultValue="self_esteem"
                    onChange={this.onChangeIssues}
                  />
                  <label className="form-check-label" htmlFor="self_esteem">
                    Self Esteem
                  </label>
                </div>
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="trauma"
                    id="trauma"
                    defaultValue="trauma"
                    onChange={this.onChangeIssues}
                  />
                  <label className="form-check-label" htmlFor="trauma">
                    Trauma
                  </label>
                </div>
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="self_harm"
                    id="self_harm"
                    defaultValue="self_harm"
                    onChange={this.onChangeIssues}
                  />
                  <label className="form-check-label" htmlFor="self_harm">
                    Self Harm
                  </label>
                </div>
                {this.state.issueError && <span className='text-danger d-block'>Field is required</span>}
              </div>

            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="symptoms">Other Symptoms</label>
                <input
                  type="text"
                  className="form-control"
                  id="symptoms"
                  required
                  name="symptoms"
                  value={this.state.symptoms}
                  onChange={(e) => this.onChangeField(e)}
                />
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="frequency_of_symptoms">Frequency Of Symptoms*</label>
                <select
                  className="form-control"
                  name="frequency_of_symptoms"
                  required
                  id="frequency_of_symptoms"
                  value={this.state.frequency_of_symptoms}
                  onChange={(e) => this.onChangeField(e)}
                >
                  <option value="">Select If Applicable</option>
                  <option value="sometimes">Sometimes</option>
                  <option value="often">Often</option>
                  <option value="always">Always</option>
                </select>
                {this.state.frequency_of_symptomsError && <span className='text-danger'>Field is required</span>}
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="medication_history">
                  Therapeutic Medication History
                </label><br />
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="medication_history" id="inlineRadio5" value="yes"
                    checked={this.state.medication_history === 'yes'}
                    onChange={(e) => this.onChangeField(e)} />
                  <label className="form-check-label" htmlFor="inlineRadio5">Yes</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="medication_history" id="inlineRadio6" value="no"
                    checked={this.state.medication_history === 'no'}
                    onChange={(e) => this.onChangeField(e)} />
                  <label className="form-check-label" htmlFor="inlineRadio6">No</label>
                </div>
              </div>

            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="therapeutic_histroy">Therapeutic Histroy</label>
                <br />
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="therapeutic_histroy" id="inlineRadio7" value="yes"
                    checked={this.state.therapeutic_histroy === 'yes'}
                    onChange={(e) => this.onChangeField(e)} />
                  <label className="form-check-label" htmlFor="inlineRadio7">Yes</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="therapeutic_histroy" id="inlineRadio8" value="no"
                    checked={this.state.therapeutic_histroy === 'no'}
                    onChange={(e) => this.onChangeField(e)} />
                  <label className="form-check-label" htmlFor="inlineRadio8">No</label>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="types_of_theraputic_history">
                  Types of Theraputic History
                </label>
                <br />
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="Alternative"
                    id="Alternative"
                    defaultValue="Alternative"
                    checked={this.state.types_of_theraputic_history.includes('Alternative')}
                    onChange={(e) => this.onChangeTypesOfTheraputicHistory(e)}
                  />
                  <label className="form-check-label" htmlFor="Alternative">
                    Alternative
                  </label>
                </div>
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="Counseling"
                    id="Counseling"
                    defaultValue="Counseling"
                    checked={this.state.types_of_theraputic_history.includes('Counseling')}
                    onChange={(e) => this.onChangeTypesOfTheraputicHistory(e)}
                  />
                  <label className="form-check-label" htmlFor="Counseling">
                    Counseling
                  </label>
                </div>
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="Clinical"
                    id="type_clinical"
                    defaultValue="Clinical"
                    checked={this.state.types_of_theraputic_history.includes('Clinical')}
                    onChange={(e) => this.onChangeTypesOfTheraputicHistory(e)}
                  />
                  <label className="form-check-label" htmlFor="type_clinical">
                    Clinical
                  </label>
                </div>
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="Psychiatry"
                    id="Psychiatry"
                    defaultValue="Psychiatry"
                    checked={this.state.types_of_theraputic_history.includes('Psychiatry')}
                    onChange={(e) => this.onChangeTypesOfTheraputicHistory(e)}
                  />
                  <label className="form-check-label" htmlFor="Psychiatry">
                    Psychiatry
                  </label>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="urgency_of_intervention">
                  Urgency of Intervention
                </label>
                <select
                  className="form-control"
                  name="urgency_of_intervention"
                  required
                  id="urgency_of_intervention"
                  value={this.state.urgency_of_intervention}
                  onChange={(e) => this.onChangeField(e)}
                >
                  <option value="">Not Selected</option>
                  <option value="low">Low</option>
                  <option value="mid">Mid</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="reason_for_interest">Reason Of Interest</label>
                <textarea
                  className="form-control"
                  id="reason_for_interest"
                  required
                  name="reason_for_interest"
                  value={this.state.reason_for_interest}
                  onChange={(e) => this.onChangeField(e)}
                />
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="length_of_concern">Length Of Concern*</label>
                <select
                  className="form-control"
                  name="length_of_concern"
                  id="length_of_concern"
                  value={this.state.length_of_concern}
                  onChange={(e) => this.onChangeField(e)}
                >
                  <option value="">Select If Applicable</option>
                  <option value="<1week">Less Than A Week</option>
                  <option value="<1month">Less Than A Month</option>
                  <option value="few_months">Few Months</option>
                  <option value="1year">Almost A Year</option>
                  <option value="few_years">Couple Of Years</option>
                  <option value="long_term">Long Term</option>
                </select>
                {this.state.length_of_concernError && <span className='text-danger'>Field is required</span>}
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="current_physical_fitness">Current Physical Fitness</label>
                <select
                  className="form-control"
                  name="current_physical_fitness"
                  id="current_physical_fitness"
                  value={this.state.current_physical_fitness}
                  onChange={(e) => this.onChangeField(e)}
                >
                  <option value="">Select If Applicable</option>
                  <option value="not_fit">Not Fit At All</option>
                  <option value="neither">Not Fit Or Unfit</option>
                  <option value="reasonably_fit">Reasonably Fit</option>
                  <option value="fit">fit</option>
                </select>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="health_problems">Health Problems</label>
                <textarea
                  className="form-control"
                  id="health_problems"
                  name="health_problems"
                  value={this.state.health_problems}
                  onChange={(e) => this.onChangeField(e)}
                />
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="physical_pain">Physical Pain*</label>
                <br />
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="physical_pain" id="inlineRadio133" value="yes"
                    checked={this.state.physical_pain === 'yes'}
                    onChange={(e) => this.onChangeField(e)} />
                  <label className="form-check-label" htmlFor="inlineRadio133">Yes</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="physical_pain" id="inlineRadio143" value="no"
                    checked={this.state.physical_pain === 'no'}
                    onChange={(e) => this.onChangeField(e)} />
                  <label className="form-check-label" htmlFor="inlineRadio143">No</label>
                </div>
                {this.state.physical_painError && <span className='text-danger d-block'>Field is required</span>}
              </div>
            </div>
            <div className="col-sm-12">
              <h5 className="mt-4 mb-2"><b>Expert Preferences</b></h5>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="gender_of_therapist">Gender of Therapist*</label>
                <select
                  className="form-control"
                  name="gender_of_therapist"
                  required
                  id="gender_of_therapist"
                  value={this.state.gender_of_therapist}
                  onChange={(e) => this.onChangeField(e)}
                >
                  <option value="">No Preference</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {this.state.gender_of_therapistError && <span className='text-danger'>Field is required</span>}
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="age_group_of_therapist">Age Group of Therapist*</label>
                <select
                  className="form-control"
                  name="age_group_of_therapist"
                  required
                  id="age_group_of_therapist"
                  value={this.state.age_group_of_therapist}
                  onChange={(e) => this.onChangeField(e)}
                >
                  <option value="">No Preference</option>
                  <option value="<25">Less Than 25</option>
                  <option value="<30">Less Than 30</option>
                  <option value="<35">Less Than 35</option>
                  <option value="<40">Less Than 40</option>
                  <option value=">40">More Than 40</option>
                </select>
                {this.state.age_group_of_therapistError && <span className='text-danger'>Field is required</span>}
              </div>
            </div>
            <div className="col-sm-12">
              <h5 className="mt-4 mb-2"><b>Treatment Preferences</b></h5>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="therapy_delivery_modes">Therapy Delivery Mode*</label>
                <br />
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="Virtual"
                    id="Virtual"
                    defaultValue="Virtual"
                    checked={this.state.therapy_delivery_modes.includes('Virtual')}
                    onChange={(e) => this.onChangeTherapyDeliveryMode(e)}
                  />
                  <label className="form-check-label" htmlFor="Virtual">
                    Virtual
                  </label>
                </div>
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="Physical"
                    id="Physical"
                    defaultValue="Physical"
                    checked={this.state.therapy_delivery_modes.includes('Physical')}
                    onChange={(e) => this.onChangeTherapyDeliveryMode(e)}
                  />
                  <label className="form-check-label" htmlFor="Physical">
                    Physical
                  </label>
                </div>
                {this.state.therapy_delivery_modesError && <span className='text-danger d-block'>Field is required</span>}
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="therapy_type">Therapy Type*</label>
                <br />
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="Creative"
                    id="Creative"
                    defaultValue="Creative"
                    checked={this.state.therapy_type.includes('Creative')}
                    onChange={(e) => this.onChangeTherapyType(e)}
                  />
                  <label className="form-check-label" htmlFor="Creative">
                    Creative
                  </label>
                </div>
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="Counseling"
                    id="Counseling"
                    defaultValue="Counseling"
                    checked={this.state.therapy_type.includes('Counseling')}
                    onChange={(e) => this.onChangeTherapyType(e)}
                  />
                  <label className="form-check-label" htmlFor="Counseling">
                    Counseling
                  </label>
                </div>
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="Clinical"
                    id="Clinical"
                    defaultValue="Clinical"
                    checked={this.state.therapy_type.includes('Clinical')}
                    onChange={(e) => this.onChangeTherapyType(e)}
                  />
                  <label className="form-check-label" htmlFor="Clinical">
                    Clinical
                  </label>
                </div>
                <div className="form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="Psychiatry"
                    id="Psychiatry"
                    defaultValue="Psychiatry"
                    checked={this.state.therapy_type.includes('Psychiatry')}
                    onChange={(e) => this.onChangeTherapyType(e)}
                  />
                  <label className="form-check-label" htmlFor="Psychiatry">
                    Psychiatry
                  </label>
                </div>
                {this.state.therapy_typeError && <span className='text-danger d-block'>Field is required</span>}
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="preferred_language">Preferred Language*</label>
                <select
                  className="form-control"
                  name="preferred_language"
                  required
                  id="preferred_language"
                  value={this.state.preferred_language}
                  onChange={(e) => this.onChangeField(e)}
                >
                  <option value="">No Preference</option>
                  <option value="english">English</option>
                  <option value="hindi">Hindi</option>
                  <option value="other">Other</option>
                </select>
                {this.state.preferred_languageError && <span className='text-danger'>Field is required</span>}
              </div>
            </div>
            <div className="col-sm-12">
              <h5 className="mt-4 mb-2"><b>Screening Result</b></h5>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="suggested_expert_name1">Suggested Expert Name 1*</label>
                <select
                  className="form-control"
                  name="suggested_expert_name1"
                  required
                  id="suggested_expert_name1"
                  value={this.state.suggested_expert_name1}
                  onChange={(e) => this.onChangeField(e)}
                >
                  <option value="">Select If Applicable</option>
                  <option value="expert18_avani">Avani</option>
                  <option value="expert22_ananda">Ananda</option>
                  <option value="expert36_ankita">Ankita</option>
                  <option value="expert26_anoushka">Anoushka</option>
                  {/* <option value="expert14_aprajita">Aprajita</option> */}
                  <option value="expert2_anupama">Anupama</option>
                  <option value="expert33_dechen">Dechen</option>
                  <option value="expert19_khyati">Khyati</option>
                  <option value="expert21_krishna">Krishna</option>
                  <option value="expert29_khushbua">Khushbu A</option>
                  <option value="expert31_kaynaat">Kaynaat</option>
                  <option value="expert32_kruttikka">Kruttikka</option>
                  <option value="expert44_kashika">Kashika</option>
                  <option value="expert25_khushboo">Khushboo</option>
                  <option value="expert23_mansoor">Mansoor</option>
                  <option value="expert24_mansi">Mansi</option>
                  <option value="expert3_meharmeet">Meharmeet</option>
                  <option value="expert9_mahi">Mahi</option>
                  <option value="expert30_munira">Munira</option>
                  <option value="expert40_meharmeet">Meharmeet</option>
                  <option value="expert43_mehr">Mehr</option>
                  <option value="expert35_nidhi">Nidhi</option>
                  {/* <option value="expert12_purvva">Purvva</option> */}
                  <option value="expert8_poojita">Poojita</option>
                  <option value="expert27_preetha">Preetha</option>
                  <option value="expert41_rashi">Rashi</option>
                  <option value="expert39_rachel">Rachel</option>
                  <option value="expert46_risha">Risha</option>
                  <option value="expert11_shruti">Shruti</option>
                  <option value="expert15_sharmeen">Sharmeen</option>
                  {/* <option value="expert16_sandeep">Sandeep</option> */}
                  <option value="expert28_sakina">Sakina</option>
                  <option value="expert34_shefali">Shefali</option>
                  <option value="expert38_sikha">Sikha</option>
                  <option value="expert17_sanjoli">Sanjoli</option>
                  <option value="expert6_sonam">Sonam</option>
                  <option value="expert7_sanchari">Sanchari</option>
                  <option value="expert42_supriya">Supriya</option>
                  <option value="expert45_srimoyee">Srimoyee</option>
                  <option value="expert48_sonia">Sonia</option>
                  <option value="expert47_tanuushree">Tanuushree</option>
                  <option value="expert4_tamannarajpal">Tamanna Rajpal</option>
                  <option value="expert5_tamannagrewal">Tamanna Grewal</option>
                  <option value="expert10_tanya">Tanya</option>
                  {/* <option value="expert13_tripura">Tripura</option> */}
                  <option value="expert20_yogita">Yogita</option>
                  <option value="expert37_yamini">Yamini</option>
                  <option value="expert1_zoha">Zoha</option>
                  <option value="workshop1_art">Art Therapy</option>
                  <option value="workshop2_caregiver">Caregiver Therapy</option>
                  <option value="workshop3_drama">Drama Therapy</option>
                  <option value="workshop4_movement">Movement Therapy</option>
                  <option value="workshop5_music">Music Therapy</option>
                  <option value="workshop6_mindfulness">Mindfulness Therapy</option>
                  <option value="expert0_psychiatry">Psychiatry</option>
                </select>
                {this.state.suggested_expert_nameError && <span className='text-danger'>Field is required</span>}
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="suggested_expert_name2">Suggested Expert Name 2</label>
                <select
                  className="form-control"
                  name="suggested_expert_name2"
                  required
                  id="suggested_expert_name2"
                  value={this.state.suggested_expert_name2}
                  onChange={(e) => this.onChangeField(e)}
                >
                  <option value="">Select If Applicable</option>
                  <option value="expert18_avani">Avani</option>
                  <option value="expert22_ananda">Ananda</option>
                  <option value="expert36_ankita">Ankita</option>
                  <option value="expert26_anoushka">Anoushka</option>
                  {/* <option value="expert14_aprajita">Aprajita</option> */}
                  <option value="expert2_anupama">Anupama</option>
                  <option value="expert33_dechen">Dechen</option>
                  <option value="expert19_khyati">Khyati</option>
                  <option value="expert21_krishna">Krishna</option>
                  <option value="expert29_khushbua">Khushbu A</option>
                  <option value="expert31_kaynaat">Kaynaat</option>
                  <option value="expert32_kruttikka">Kruttikka</option>
                  <option value="expert44_kashika">Kashika</option>
                  <option value="expert25_khushboo">Khushboo</option>
                  <option value="expert23_mansoor">Mansoor</option>
                  <option value="expert24_mansi">Mansi</option>
                  <option value="expert3_meharmeet">Meharmeet</option>
                  <option value="expert9_mahi">Mahi</option>
                  <option value="expert30_munira">Munira</option>
                  <option value="expert40_meharmeet">Meharmeet</option>
                  <option value="expert43_mehr">Mehr</option>
                  <option value="expert35_nidhi">Nidhi</option>
                  {/* <option value="expert12_purvva">Purvva</option> */}
                  <option value="expert8_poojita">Poojita</option>
                  <option value="expert27_preetha">Preetha</option>
                  <option value="expert41_rashi">Rashi</option>
                  <option value="expert39_rachel">Rachel</option>
                  <option value="expert46_risha">Risha</option>
                  <option value="expert11_shruti">Shruti</option>
                  <option value="expert15_sharmeen">Sharmeen</option>
                  {/* <option value="expert16_sandeep">Sandeep</option> */}
                  <option value="expert28_sakina">Sakina</option>
                  <option value="expert34_shefali">Shefali</option>
                  <option value="expert38_sikha">Sikha</option>
                  <option value="expert17_sanjoli">Sanjoli</option>
                  <option value="expert6_sonam">Sonam</option>
                  <option value="expert7_sanchari">Sanchari</option>
                  <option value="expert42_supriya">Supriya</option>
                  <option value="expert45_srimoyee">Srimoyee</option>
                  <option value="expert48_sonia">Sonia</option>
                  <option value="expert47_tanuushree">Tanuushree</option>
                  <option value="expert4_tamannarajpal">Tamanna Rajpal</option>
                  <option value="expert5_tamannagrewal">Tamanna Grewal</option>
                  <option value="expert10_tanya">Tanya</option>
                  {/* <option value="expert13_tripura">Tripura</option> */}
                  <option value="expert20_yogita">Yogita</option>
                  <option value="expert37_yamini">Yamini</option>
                  <option value="expert1_zoha">Zoha</option>
                  <option value="workshop1_art">Art Therapy</option>
                  <option value="workshop2_caregiver">Caregiver Therapy</option>
                  <option value="workshop3_drama">Drama Therapy</option>
                  <option value="workshop4_movement">Movement Therapy</option>
                  <option value="workshop5_music">Music Therapy</option>
                  <option value="workshop6_mindfulness">Mindfulness Therapy</option>
                  <option value="expert0_psychiatry">Psychiatry</option>
                </select>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="suggested_expert_name3">Suggested Expert Name 3</label>
                <select
                  className="form-control"
                  name="suggested_expert_name3"
                  required
                  id="suggested_expert_name3"
                  value={this.state.suggested_expert_name3}
                  onChange={(e) => this.onChangeField(e)}
                >
                  <option value="">Select If Applicable</option>
                  <option value="expert18_avani">Avani</option>
                  <option value="expert22_ananda">Ananda</option>
                  <option value="expert36_ankita">Ankita</option>
                  <option value="expert26_anoushka">Anoushka</option>
                  {/* <option value="expert14_aprajita">Aprajita</option> */}
                  <option value="expert2_anupama">Anupama</option>
                  <option value="expert33_dechen">Dechen</option>
                  <option value="expert19_khyati">Khyati</option>
                  <option value="expert21_krishna">Krishna</option>
                  <option value="expert29_khushbua">Khushbu A</option>
                  <option value="expert31_kaynaat">Kaynaat</option>
                  <option value="expert32_kruttikka">Kruttikka</option>
                  <option value="expert44_kashika">Kashika</option>
                  <option value="expert25_khushboo">Khushboo</option>
                  <option value="expert23_mansoor">Mansoor</option>
                  <option value="expert24_mansi">Mansi</option>
                  <option value="expert3_meharmeet">Meharmeet</option>
                  <option value="expert9_mahi">Mahi</option>
                  <option value="expert30_munira">Munira</option>
                  <option value="expert40_meharmeet">Meharmeet</option>
                  <option value="expert43_mehr">Mehr</option>
                  <option value="expert35_nidhi">Nidhi</option>
                  {/* <option value="expert12_purvva">Purvva</option> */}
                  <option value="expert8_poojita">Poojita</option>
                  <option value="expert27_preetha">Preetha</option>
                  <option value="expert41_rashi">Rashi</option>
                  <option value="expert39_rachel">Rachel</option>
                  <option value="expert46_risha">Risha</option>
                  <option value="expert11_shruti">Shruti</option>
                  <option value="expert15_sharmeen">Sharmeen</option>
                  {/* <option value="expert16_sandeep">Sandeep</option> */}
                  <option value="expert28_sakina">Sakina</option>
                  <option value="expert34_shefali">Shefali</option>
                  <option value="expert38_sikha">Sikha</option>
                  <option value="expert17_sanjoli">Sanjoli</option>
                  <option value="expert6_sonam">Sonam</option>
                  <option value="expert7_sanchari">Sanchari</option>
                  <option value="expert42_supriya">Supriya</option>
                  <option value="expert45_srimoyee">Srimoyee</option>
                  <option value="expert48_sonia">Sonia</option>
                  <option value="expert47_tanuushree">Tanuushree</option>
                  <option value="expert4_tamannarajpal">Tamanna Rajpal</option>
                  <option value="expert5_tamannagrewal">Tamanna Grewal</option>
                  <option value="expert10_tanya">Tanya</option>
                  {/* <option value="expert13_tripura">Tripura</option> */}
                  <option value="expert20_yogita">Yogita</option>
                  <option value="expert37_yamini">Yamini</option>
                  <option value="expert1_zoha">Zoha</option>
                  <option value="workshop1_art">Art Therapy</option>
                  <option value="workshop2_caregiver">Caregiver Therapy</option>
                  <option value="workshop3_drama">Drama Therapy</option>
                  <option value="workshop4_movement">Movement Therapy</option>
                  <option value="workshop5_music">Music Therapy</option>
                  <option value="workshop6_mindfulness">Mindfulness Therapy</option>
                  <option value="expert0_psychiatry">Psychiatry</option>                                </select>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="suggest_therapy_type">Suggested Therapy Type*</label>
                <select
                  className="form-control"
                  name="suggest_therapy_type"
                  required
                  id="suggest_therapy_type"
                  value={this.state.suggest_therapy_type}
                  onChange={(e) => this.onChangeField(e)}
                >
                  <option value="">Select If Applicable</option>
                  <option value="creative">Creative</option>
                  <option value="counseling">Counseling</option>
                  <option value="clinical">Clinical</option>
                  <option value="psychiatry">Psychiatry</option>
                </select>
                {this.state.suggest_therapy_typeError && <span className='text-danger'>Field is required</span>}
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form-group">
                <h5 className="mt-4 mb-2"><b>Notes</b></h5>
                <textarea
                  className="form-control"
                  id="notes"
                  required
                  name="notes"
                  value={this.state.notes}
                  onChange={(e) => this.onChangeField(e)}
                />
              </div>
            </div>
            <div className="col-sm-12">
              <button onClick={() => this.saveAssessment()} className="btn btn-success">
                Submit
              </button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default EditAssessment;