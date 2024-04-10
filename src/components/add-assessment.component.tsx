import { Component, ChangeEvent } from "react";
import AssessmentDataService from "../services/assessment.service";
import IAssessmentData from "../types/assessment.type";

type Props = {};

type State = IAssessmentData & {
  submitted: boolean,
  nameError: boolean,
  emailError: boolean,
  phoneError: boolean,
  genderError: boolean,
  ageError: boolean,
  [key: string]: any
};

export default class AddAssessment extends Component<Props, State> {
  scriptUrl = "https://script.google.com/macros/s/AKfycbyzOobJAgOngXpSPpaqaZ18eHufvL0wgjCjh8hZXiSWuUOP2ACgT76rytrkPqK5PjrF/exec"
  constructor(props: Props) {
    super(props);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.onChangeExpert = this.onChangeExpert.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeCallPicked = this.onChangeCallPicked.bind(this)
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeCountry = this.onChangeCountry.bind(this);
    this.onChangeState = this.onChangeState.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeNationality = this.onChangeNationality.bind(this);
    this.onChangeEdQualification = this.onChangeEdQualification.bind(this);
    this.onChangeRelStatus = this.onChangeRelStatus.bind(this);
    this.onChangeDependents = this.onChangeDependents.bind(this);
    this.onChangeOccupation = this.onChangeOccupation.bind(this);
    this.onChangeOccupationType = this.onChangeOccupationType.bind(this);
    this.onChangefamilyMentalHistory = this.onChangefamilyMentalHistory.bind(this);
    this.onChangeSymptoms = this.onChangeSymptoms.bind(this);
    this.onChangeFrequencyOfSymptoms = this.onChangeFrequencyOfSymptoms.bind(this);
    this.onChangeMedicationHistory = this.onChangeMedicationHistory.bind(this);
    this.onChangeTherapeuticHistroy =
      this.onChangeTherapeuticHistroy.bind(this);
    this.onChangeTypesOfTheraputicHistory =
      this.onChangeTypesOfTheraputicHistory.bind(this);
    this.onChangeUrgencyOfIntervention =
      this.onChangeUrgencyOfIntervention.bind(this);
    this.onChangeGenderOfTherapist =
      this.onChangeGenderOfTherapist.bind(this);
    this.onChangeAgeGroupOfTherapist =
      this.onChangeAgeGroupOfTherapist.bind(this);
    this.onChangeTherapyDeliveryMode =
      this.onChangeTherapyDeliveryMode.bind(this);
    this.onChangeTherapyType = this.onChangeTherapyType.bind(this);
    this.onChangePreferredLanguage =
      this.onChangePreferredLanguage.bind(this);
    this.onChangeNotes = this.onChangeNotes.bind(this);
    this.saveAssessment = this.saveAssessment.bind(this);
    this.newAssessment = this.newAssessment.bind(this);
    this.onChangeIssues = this.onChangeIssues.bind(this)
    this.onChangeLanguage = this.onChangeLanguage.bind(this)
    this.onChangeDependents = this.onChangeDependents.bind(this)
    this.onChangesuggestTherapyType = this.onChangesuggestTherapyType.bind(this)
    this.onChangeSuggestedExpertName1 = this.onChangeSuggestedExpertName1.bind(this)
    this.onChangeSuggestedExpertName2 = this.onChangeSuggestedExpertName2.bind(this)
    this.onChangeSuggestedExpertName3 = this.onChangeSuggestedExpertName3.bind(this)
    this.onChangeExpertSuggested = this.onChangeExpertSuggested.bind(this)
    this.onChangeStudent = this.onChangeStudent.bind(this)
    this.onChangeReasonOfInterest = this.onChangeReasonOfInterest.bind(this);
    this.onChangeLengthOfConcern = this.onChangeLengthOfConcern.bind(this)
    this.onChangeCurrentPhysicalFitness = this.onChangeCurrentPhysicalFitness.bind(this)
    this.onChangeExerciseRoutine = this.onChangeExerciseRoutine.bind(this)
    this.onChangeHealthProblems = this.onChangeHealthProblems.bind(this)
    this.onChangePhysicalPain = this.onChangePhysicalPain.bind(this)
    this.onChangePhysicalPainDescription = this.onChangePhysicalPainDescription.bind(this)
    this.onChangeBudget = this.onChangeBudget.bind(this);

    this.state = {
      id: "",
      date: "",
      time: "",
      expert: "",
      name: "",
      email: "",
      phone: "",
      age: "",
      call_picked: "",
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
      submitted: false,
      nameError: false,
      emailError: false,
      phoneError: false,
      genderError: false,
      ageError: false,
    };
  }

  onChangeDate(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      date: e.target.value,
    });
  }
  onChangeTime(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      time: e.target.value,
    });
  }
  onChangeExpert(e: ChangeEvent<HTMLSelectElement>) {
    this.setState({
      expert: e.target.value,
    });
  }
  onChangeName(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangeEmail(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangePhone(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      phone: e.target.value,
    });
  }
  onChangeCallPicked(e: any) {
    this.setState({
      call_picked: e.target.value,
    });
  }
  onChangeAge(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      age: e.target.value,
    });
  }
  onChangeGender(e: ChangeEvent<HTMLSelectElement>) {
    this.setState({
      gender: e.target.value,
    });
  }
  onChangeCountry(e: ChangeEvent<HTMLSelectElement>) {
    this.setState({
      country: e.target.value,
    });
  }
  onChangeState(e: ChangeEvent<HTMLSelectElement>) {
    this.setState({
      state: e.target.value,
    });
  }
  onChangeCity(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      city: e.target.value,
    });
  }
  onChangeNationality(e: ChangeEvent<HTMLSelectElement>) {
    this.setState({
      nationality: e.target.value,
    });
  }
  onChangeLanguage(e: any) {
    if (!e.target.checked) {
      const result = this.state.languages.filter((dep) => {
        return dep !== e.target.name
      });
      this.setState({
        languages: [...result]
      }, () => {
      })

    } else {
      this.setState(prevState => ({
        languages: [...prevState.languages, e.target.name]
      }), () => {
      })
    }
  }
  onChangeEdQualification(e: ChangeEvent<HTMLSelectElement>) {
    this.setState({
      educational_qualification: e.target.value,
    });
  }
  onChangeRelStatus(e: ChangeEvent<HTMLSelectElement>) {
    this.setState({
      relationship_status: e.target.value,
    });
  }
  onChangeDependents(e: any) {
    this.setState({
      dependents: e.target.value,
    });
  }
  onChangeStudent(e: any) {
    this.setState({
      student: e.target.value,
    });
  }
  onChangeOccupation(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      occupation: e.target.value,
    });
  }
  onChangeOccupationType(e: ChangeEvent<HTMLSelectElement>) {
    this.setState({
      occupation_type: e.target.value,
    });
  }
  onChangefamilyMentalHistory(e: any) {
    this.setState({
      family_mental_history: e.target.value,
    });
  }
  onChangeSymptoms(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      symptoms: e.target.value,
    });
  }
  onChangeFrequencyOfSymptoms(e: ChangeEvent<HTMLSelectElement>) {
    this.setState({
      frequency_of_symptoms: e.target.value,
    });
  }

  onChangeMedicationHistory(e: any) {
    this.setState({
      medication_history: e.target.value,
    });
  }

  onChangeTherapeuticHistroy(e: any) {
    this.setState({
      therapeutic_histroy: e.target.value,
    });
  }
  onChangeTypesOfTheraputicHistory(e: any) {
    if (!e.target.checked) {
      const result = this.state.types_of_theraputic_history.filter((dep) => {
        return dep !== e.target.name
      });
      this.setState({
        types_of_theraputic_history: [...result]
      }, () => {
      })

    } else {
      this.setState(prevState => ({
        types_of_theraputic_history: [...prevState.types_of_theraputic_history, e.target.name]
      }), () => {
      })
    }
  }
  onChangeUrgencyOfIntervention(e: ChangeEvent<HTMLSelectElement>) {
    this.setState({
      urgency_of_intervention: e.target.value,
    });
  }
  onChangeGenderOfTherapist(e: ChangeEvent<HTMLSelectElement>) {
    this.setState({
      gender_of_therapist: e.target.value,
    });
  }
  onChangeAgeGroupOfTherapist(e: ChangeEvent<HTMLSelectElement>) {
    this.setState({
      age_group_of_therapist: e.target.value,
    });
  }
  onChangeTherapyDeliveryMode(e: any) {
    if (!e.target.checked) {
      const result = this.state.therapy_delivery_modes.filter((dep) => {
        return dep !== e.target.name
      });
      this.setState({
        therapy_delivery_modes: [...result]
      }, () => {
      })

    } else {
      this.setState(prevState => ({
        therapy_delivery_modes: [...prevState.therapy_delivery_modes, e.target.name]
      }), () => {
      })
    }
  }
  onChangeTherapyType(e: any) {
    if (!e.target.checked) {
      const result = this.state.therapy_type.filter((dep) => {
        return dep !== e.target.name
      });
      this.setState({
        therapy_type: [...result]
      }, () => {
      })

    } else {
      this.setState(prevState => ({
        therapy_type: [...prevState.therapy_type, e.target.name]
      }), () => {
      })
    }
  }

  onChangePreferredLanguage(e: ChangeEvent<HTMLSelectElement>) {
    this.setState({
      preferred_language: e.target.value,
    });
  }

  onChangeExpertSuggested(e: any) {
    this.setState({
      expert_suggested: e.target.value,
    });
  }

  onChangeSuggestedExpertName1(e: ChangeEvent<HTMLSelectElement>) {
    this.setState({
      suggested_expert_name1: e.target.value,
    });
  }

  onChangeSuggestedExpertName2(e: ChangeEvent<HTMLSelectElement>) {
    this.setState({
      suggested_expert_name2: e.target.value,
    });
  }

  onChangeSuggestedExpertName3(e: ChangeEvent<HTMLSelectElement>) {
    this.setState({
      suggested_expert_name3: e.target.value,
    });
  }

  onChangesuggestTherapyType(e: ChangeEvent<HTMLSelectElement>) {
    this.setState({
      suggest_therapy_type: e.target.value,
    });
  }
  onChangeNotes(e: ChangeEvent<HTMLTextAreaElement>) {
    this.setState({
      notes: e.target.value,
    });
  }
  onChangeIssues(e: any) {
    if (!e.target.checked) {
      const result = this.state.issues.filter((dep) => {
        return dep !== e.target.name
      });
      this.setState({
        issues: [...result]
      }, () => {
      })

    } else {
      this.setState(prevState => ({
        issues: [...prevState.issues, e.target.name]
      }), () => {
      })
    }
  }

  onChangeReasonOfInterest(e: ChangeEvent<HTMLTextAreaElement>) {
    this.setState({
      reason_for_interest: e.target.value,
    });
  }

  onChangeLengthOfConcern(e: ChangeEvent<HTMLSelectElement>) {
    this.setState({
      length_of_concern: e.target.value,
    });
  }

  onChangeCurrentPhysicalFitness(e: ChangeEvent<HTMLSelectElement>) {
    this.setState({
      current_physical_fitness: e.target.value,
    });
  }

  onChangeBudget(e: ChangeEvent<HTMLSelectElement>) {
    this.setState({
      budget: e.target.value,
    });
  }

  onChangeExerciseRoutine(e: ChangeEvent<HTMLSelectElement>) {
    this.setState({
      exercise_routine: e.target.value,
    });
  }

  onChangeHealthProblems(e: ChangeEvent<HTMLTextAreaElement>) {
    this.setState({
      health_problems: e.target.value,
    });
  }

  onChangePhysicalPain(e: any) {
    this.setState({
      physical_pain: e.target.value,
    });
  }

  onChangePhysicalPainDescription(e: ChangeEvent<HTMLTextAreaElement>) {
    this.setState({
      physical_pain_description: e.target.value,
    });
  }

  onChangeField = (event: any) => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  }

  fieldValidation = (fieldName: string) => {
    this.setState({ [fieldName]: true })
    return false;
  }

  resetValidationState = () => {
    this.setState({
      nameError: false, emailError: false, phoneError: false, ageError: false, genderError: false,
      cityError: false, studentError: false, occupationError: false, issueError: false,
      frequency_of_symptomsError: false, length_of_concernError: false, physical_painError: false, call_pickedError: false, budgetError: false, age_group_of_therapistError: false, therapy_delivery_modesError: false,
      therapy_typeError: false, preferred_languageError: false,
      suggested_expert_nameError: false, suggest_therapy_typeError: false,
      lead_ownerError: false, lead_statusError: false
    });
  }

  saveAssessment() {
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
        this.state.age_group_of_therapist === '' &&
        this.state.therapy_delivery_modes.length === 0 && this.state.therapy_type.length === 0 &&
        this.state.preferred_language === '' && this.state.suggested_expert_name1 === '' &&
        this.state.suggested_expert_name2 === '' && this.state.suggested_expert_name3 === '' && this.state.suggest_therapy_type === '' && this.state.lead_owner === '' &&
        this.state.lead_status === '') {
        this.setState({
          nameError: true, emailError: true, phoneError: true, ageError: true, genderError: true,
          cityError: true, studentError: true, occupationError: true, issueError: true,
          frequency_of_symptomsError: true, length_of_concernError: true, physical_painError: true, budgetError: true,
          age_group_of_therapistError: true, therapy_delivery_modesError: true,
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

        // } else if (this.state.gender_of_therapist === '') {
        //   return this.fieldValidation('gender_of_therapistError');

      } else if (this.state.age_group_of_therapist === '') {
        return this.fieldValidation('age_group_of_therapistError');

      } else if (this.state.therapy_delivery_modes.length === 0) {
        return this.fieldValidation('therapy_delivery_modesError');

      } else if (this.state.therapy_type.length === 0) {
        return this.fieldValidation('therapy_typeError');

      } else if (this.state.preferred_language === '') {
        return this.fieldValidation('preferred_languageError');

        // } else if (this.state.expert_suggested === '') {
        //   return this.fieldValidation('expert_suggestedError');

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
      call_picked: this.state.call_picked,
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
    };

    let formData = new FormData();
    formData.append('date', this.state.date);
    formData.append('time', this.state.time);
    formData.append('expert', this.state.expert);
    formData.append('call_picked', this.state.call_picked);
    formData.append('lead_owner', this.state.lead_owner);
    formData.append('lead_status', this.state.lead_status);
    formData.append('name', this.state.name);
    formData.append('email', this.state.email);
    formData.append('phone', this.state.phone);
    formData.append('age', this.state.age);
    formData.append('gender', this.state.gender);
    // formData.append('country', this.state.country);
    formData.append('state', this.state.state);
    formData.append('city', this.state.city);
    // formData.append('nationality', this.state.nationality);
    // formData.append('languages', JSON.stringify(this.state.languages));
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
    // formData.append('exercise_routine', this.state.exercise_routine);
    formData.append('health_problems', this.state.health_problems);
    formData.append('physical_pain', this.state.physical_pain);
    // formData.append('physical_pain_description', this.state.physical_pain_description);
    formData.append('budget', this.state.budget);
    formData.append('gender_of_therapist', this.state.gender_of_therapist);
    formData.append('age_group_of_therapist', this.state.age_group_of_therapist);
    formData.append('therapy_delivery_modes', JSON.stringify(this.state.therapy_delivery_modes));
    formData.append('therapy_type', JSON.stringify(this.state.therapy_type));
    formData.append('preferred_language', this.state.preferred_language);
    // formData.append('expert_suggested', this.state.expert_suggested);
    formData.append('suggested_expert_name1', this.state.suggested_expert_name1);
    formData.append('suggested_expert_name2', this.state.suggested_expert_name2);
    formData.append('suggested_expert_name3', this.state.suggested_expert_name3);
    formData.append('suggest_therapy_type', this.state.suggest_therapy_type);
    formData.append('notes', this.state.notes);

    fetch(this.scriptUrl, { method: 'POST', body: formData })
      .then(res => {
        console.log("Sheet Updated Successfully")
      })
      .catch(err => console.log(err))

    AssessmentDataService.create(data)
      .then((response: any) => {
        this.setState({
          id: response.data.id,
          date: response.data.date,
          time: response.data.time,
          expert: response.data.expert,
          name: response.data.name,
          email: response.data.email,
          phone: response.data.phone,
          call_picked: response.data.call_picked,
          age: response.data.age,
          gender: response.data.gender,
          country: response.data.country,
          state: response.data.state,
          city: response.data.city,
          nationality: response.data.nationality,
          languages: response.data.languages,
          educational_qualification: response.data.educational_qualification,
          relationship_status: response.data.relationship_status,
          dependents: response.data.dependents,
          occupation: response.data.occupation,
          occupation_type: response.data.occupation_type,
          family_mental_history: response.data.family_mental_history,
          symptoms: response.data.symptoms,
          frequency_of_symptoms: response.data.frequency_of_symptoms,
          medication_history: response.data.medication_history,
          therapeutic_histroy: response.data.therapeutic_histroy,
          types_of_theraputic_history:
            response.data.types_of_theraputic_history,
          urgency_of_intervention: response.data.urgency_of_intervention,
          gender_of_therapist: response.data.gender_of_therapist,
          age_group_of_therapist: response.data.age_group_of_therapist,
          therapy_delivery_modes: response.data.therapy_delivery_modes,
          therapy_type: response.data.therapy_type,
          preferred_language: response.data.preferred_language,
          expert_suggested: response.data.expert_suggested,
          suggested_expert_name1: response.data.suggested_expert_name1,
          suggested_expert_name2: response.data.suggested_expert_name2,
          suggested_expert_name3: response.data.suggested_expert_name3,
          suggest_therapy_type: response.data.suggest_therapy_type,
          notes: response.data.notes,
          issues: response.data.issues,
          reason_for_interest: response.data.reason_for_interest,
          length_of_concern: response.data.length_of_concern,
          current_physical_fitness: response.data.current_physical_fitness,
          exercise_routine: response.data.exercise_routine,
          health_problems: response.data.health_problems,
          physical_pain: response.data.physical_pain,
          physical_pain_description: response.data.physical_pain_description,
          budget: response.data.budget,
          submitted: true,
        });
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  newAssessment() {
    this.setState({
      id: "",
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
      submitted: false,
    });
  }


  render() {
    const {
      date,
      time,
      expert,
      name,
      email,
      phone,
      call_picked,
      age,
      gender,
      country,
      state,
      city,
      nationality,
      languages,
      educational_qualification,
      relationship_status,
      dependents,
      student,
      occupation,
      submitted,
      occupation_type,
      family_mental_history,
      symptoms,
      frequency_of_symptoms,
      medication_history,
      therapeutic_histroy,
      types_of_theraputic_history,
      urgency_of_intervention,
      gender_of_therapist,
      age_group_of_therapist,
      therapy_delivery_modes,
      therapy_type,
      preferred_language,
      expert_suggested,
      suggested_expert_name1,
      suggested_expert_name2,
      suggested_expert_name3,
      suggest_therapy_type,
      notes,
      issues,
      reason_for_interest,
      length_of_concern,
      current_physical_fitness,
      exercise_routine,
      health_problems,
      physical_pain,
      physical_pain_description,
      budget
    } = this.state;


    return (
      <div>
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newAssessment}>
              Add
            </button>
          </div>
        ) : (
          <div className="mb-5">
            <h5 className="mt-4 mb-2"><b>Screening Information</b></h5>
            <div className="row">
              <div className="col-sm-3">
                <div className="form-group">
                  <label htmlFor="call_picked">Complete Screening?*</label>
                  <br />
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions9" id="inlineRadio133"
                      value="yes" required onChange={this.onChangeCallPicked} />
                    <label className="form-check-label" htmlFor="inlineRadio133">Yes</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions9" id="inlineRadio143"
                      value="no" required onChange={this.onChangeCallPicked} />
                    <label className="form-check-label" htmlFor="inlineRadio143">No</label>
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
                    value={date}
                    onChange={this.onChangeDate}
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
                    value={time}
                    onChange={this.onChangeTime}
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
                    value={expert}
                    onChange={this.onChangeExpert}
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
                    <option value="khusboo">Khushboo</option>
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
                    value={name}
                    onChange={this.onChangeName}
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
                    value={email}
                    onChange={this.onChangeEmail}
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
                    id="c"
                    required
                    value={phone}
                    onChange={this.onChangePhone}
                    name="phone"
                  />
                  {this.state.phoneError && <span className='text-danger'>Field is required</span>}
                </div>
              </div>
              <div className="col-sm-3">
              </div>
              <div className="col-sm-3">
                <div className="form-group">
                  <label htmlFor="age">Age*</label>
                  <input
                    type="number"
                    className="form-control"
                    id="age"
                    required
                    value={age}
                    onChange={this.onChangeAge}
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
                    value={gender}
                    onChange={this.onChangeGender}
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
                    id="state"
                    value={state}
                    onChange={this.onChangeState}
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
                    name="city"
                    value={city}
                    onChange={this.onChangeCity}
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
                    value={budget}
                    onChange={this.onChangeBudget}
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
                    id="educational_qualification"
                    value={educational_qualification}
                    onChange={this.onChangeEdQualification}
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
                    id="relationship_status"
                    value={relationship_status}
                    onChange={this.onChangeRelStatus}
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
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="yes" onChange={this.onChangeDependents} />
                    <label className="form-check-label" htmlFor="inlineRadio1">Yes</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="no" onChange={this.onChangeDependents} />
                    <label className="form-check-label" htmlFor="inlineRadio2">No</label>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="form-group">
                  <label htmlFor="student">Student*</label>
                  <br />
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions20" id="inlineRadio134"
                      value="yes" required onChange={this.onChangeStudent} />
                    <label className="form-check-label" htmlFor="inlineRadio134">Yes</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions20" id="inlineRadio144"
                      value="no" required onChange={this.onChangeStudent} />
                    <label className="form-check-label" htmlFor="inlineRadio144">No</label>
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
                    value={occupation}
                    onChange={this.onChangeOccupation}
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
                    id="occupation_type"
                    value={occupation_type}
                    onChange={this.onChangeOccupationType}
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
                    <input className="form-check-input" type="radio" name="inlineRadioOptions3" id="inlineRadio3" value="yes" onChange={this.onChangefamilyMentalHistory} />
                    <label className="form-check-label" htmlFor="inlineRadio3">Yes</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions3" id="inlineRadio4" value="no" onChange={this.onChangefamilyMentalHistory} />
                    <label className="form-check-label" htmlFor="inlineRadio4">No</label>
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <h5 className="mt-4 mb-2"><b>Psychological Information</b></h5>
                <h6>Issues*</h6>
              </div>
              <div className="col-sm-12">
                <div className="form-group">
                  <div className="form-check-inline mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="overwhelming_sadness"
                      id="overwhelming_sadness"
                      defaultValue="overwhelming_sadness"
                      onChange={this.onChangeIssues}
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
                      defaultValue="depressed_mood"
                      onChange={this.onChangeIssues}
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
                      defaultValue="grief"
                      onChange={this.onChangeIssues}
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
                      defaultValue="unable_to_enjoy_activities"
                      onChange={this.onChangeIssues}
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
                      defaultValue="decreased_need_for_sleep"
                      onChange={this.onChangeIssues}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="decreased_need_for_sleep"
                    >
                      Decreased Need For Sleep
                    </label>
                  </div>
                  <div className="form-check-inline mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="loss_of_interest"
                      id="loss_of_interest"
                      defaultValue="loss_of_interest"
                      onChange={this.onChangeIssues}
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
                      defaultValue="difficulties_in_concentration"
                      onChange={this.onChangeIssues}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="difficulties_in_concentration"
                    >
                      Difficulties In Concentration
                    </label>
                  </div>
                  <div className="form-check-inline mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="increase_in_appetite"
                      id="increase_in_appetite"
                      defaultValue="increase_in_appetite"
                      onChange={this.onChangeIssues}
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
                      defaultValue="decrease_in_appetite"
                      onChange={this.onChangeIssues}
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
                      defaultValue="excessive_guilt"
                      onChange={this.onChangeIssues}
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
                      defaultValue="increased_irritability"
                      onChange={this.onChangeIssues}
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
                      defaultValue="racing_thoughts"
                      onChange={this.onChangeIssues}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="racing_thoughts"
                    >
                      Racing thoughts
                    </label>
                  </div>
                  <div className="form-check-inline mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="impulsivity"
                      id="impulsivity"
                      defaultValue="impulsivity"
                      onChange={this.onChangeIssues}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="impulsivity"
                    >
                      Impulsivity
                    </label>
                  </div>
                  <div className="form-check-inline mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="Crying spells"
                      id="Crying spells"
                      defaultValue="Crying spells"
                      onChange={this.onChangeIssues}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="Crying spells"
                    >
                      Crying Spells
                    </label>
                  </div>
                  <div className="form-check-inline mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="anxiety"
                      id="anxiety"
                      defaultValue="anxiety"
                      onChange={this.onChangeIssues}
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
                      defaultValue="panic _attacks"
                      onChange={this.onChangeIssues}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="panic _attacks"
                    >
                      Panic Attacks
                    </label>
                  </div>
                  <div className="form-check-inline mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="unexplained_fears"
                      id="unexplained_fears"
                      defaultValue="unexplained_fears"
                      onChange={this.onChangeIssues}
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
                      defaultValue="excessive_worrying"
                      onChange={this.onChangeIssues}
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
                      defaultValue="avoidance"
                      onChange={this.onChangeIssues}
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
                      defaultValue="hallucinations"
                      onChange={this.onChangeIssues}
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
                      defaultValue="suspiciousness"
                      onChange={this.onChangeIssues}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="suspiciousness"
                    >
                      Suspiciousness
                    </label>
                  </div>
                  <div className="form-check-inline mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="increased_libido"
                      id="increased_libido"
                      defaultValue="increased_libido"
                      onChange={this.onChangeIssues}
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
                      defaultValue="decreased_libido"
                      onChange={this.onChangeIssues}
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
                    value={symptoms}
                    onChange={this.onChangeSymptoms}
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
                    value={frequency_of_symptoms}
                    onChange={this.onChangeFrequencyOfSymptoms}
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
                    <input className="form-check-input" type="radio" name="inlineRadioOptions4" id="inlineRadio5" value="yes" onChange={this.onChangeMedicationHistory} />
                    <label className="form-check-label" htmlFor="inlineRadio5">Yes</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions4" id="inlineRadio6" value="no" onChange={this.onChangeMedicationHistory} />
                    <label className="form-check-label" htmlFor="inlineRadio6">No</label>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="form-group">
                  <label htmlFor="therapeutic_histroy">Therapeutic Histroy</label>
                  <br />
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions5" id="inlineRadio7" value="yes" onChange={this.onChangeTherapeuticHistroy} />
                    <label className="form-check-label" htmlFor="inlineRadio7">Yes</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions5" id="inlineRadio8" value="no" onChange={this.onChangeTherapeuticHistroy} />
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
                      onChange={this.onChangeTypesOfTheraputicHistory}
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
                      onChange={this.onChangeTypesOfTheraputicHistory}
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
                      onChange={this.onChangeTypesOfTheraputicHistory}
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
                      onChange={this.onChangeTypesOfTheraputicHistory}
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
                    id="urgency_of_intervention"
                    value={urgency_of_intervention}
                    onChange={this.onChangeUrgencyOfIntervention}
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
                  <label htmlFor="suggest_therapy_type">Reason Of Interest</label>
                  <textarea
                    className="form-control"
                    id="reason_of_interest"
                    name="reason_of_interest"
                    value={reason_for_interest}
                    onChange={this.onChangeReasonOfInterest}
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
                    value={length_of_concern}
                    required
                    onChange={this.onChangeLengthOfConcern}
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
                    name="Current_physical_health"
                    id="Current_physical_health"
                    value={current_physical_fitness}
                    onChange={this.onChangeCurrentPhysicalFitness}
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
                  <label htmlFor="suggest_therapy_type">Health Problems</label>
                  <textarea
                    className="form-control"
                    id="Health_problems"
                    name="Health_problems"
                    value={health_problems}
                    onChange={this.onChangeHealthProblems}
                  />
                </div>
              </div>
              <div className="col-sm-3">
                <div className="form-group">
                  <label htmlFor="physical_pain">Physical Pain*</label>
                  <br />
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions9" id="inlineRadio131"
                      value="yes" required onChange={this.onChangePhysicalPain} />
                    <label className="form-check-label" htmlFor="inlineRadio131">Yes</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions9" id="inlineRadio141"
                      value="no" required onChange={this.onChangePhysicalPain} />
                    <label className="form-check-label" htmlFor="inlineRadio141">No</label>
                  </div>
                  {this.state.physical_painError && <span className='text-danger d-block'>Field is required</span>}
                </div>
              </div>
              <div className="col-sm-12">
                <h5 className="mt-4 mb-2"><b>Expert Preferences</b></h5>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="gender_of_therapist">Gender of Therapist</label>
                  <select
                    className="form-control"
                    name="gender_of_therapist"
                    required
                    id="gender_of_therapist"
                    value={gender_of_therapist}
                    onChange={this.onChangeGenderOfTherapist}
                  >
                    <option value="">No Preference</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
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
                    value={age_group_of_therapist}
                    onChange={this.onChangeAgeGroupOfTherapist}
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
                      onChange={this.onChangeTherapyDeliveryMode}
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
                      onChange={this.onChangeTherapyDeliveryMode}
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
                      onChange={this.onChangeTherapyType}
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
                      onChange={this.onChangeTherapyType}
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
                      onChange={this.onChangeTherapyType}
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
                      onChange={this.onChangeTherapyType}
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
                    value={preferred_language}
                    onChange={this.onChangePreferredLanguage}
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
                    id="c"
                    value={suggested_expert_name1}
                    onChange={this.onChangeSuggestedExpertName1}
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
                    id="c"
                    value={suggested_expert_name2}
                    onChange={this.onChangeSuggestedExpertName2}
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
                    id="c"
                    value={suggested_expert_name3}
                    onChange={this.onChangeSuggestedExpertName3}
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
                  <label htmlFor="suggest_therapy_type">Suggested Therapy Type*</label>
                  <select
                    className="form-control"
                    name="suggest_therapy_type"
                    required
                    id="suggest_therapy_type"
                    value={suggest_therapy_type}
                    onChange={this.onChangesuggestTherapyType}
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
                    value={notes}
                    onChange={this.onChangeNotes}
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <button onClick={this.saveAssessment} className="btn btn-success">
                  Submit
                </button>
              </div>
            </div>

          </div>
        )}
      </div>
    );
  }
}
