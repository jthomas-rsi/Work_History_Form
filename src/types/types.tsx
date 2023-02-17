export interface WorkHistoryObject {
  [key: string]: string | boolean;
  companyName: string;
  positionTitle: string;
  startDate: string;
  endDate: string;
  positionDescription: string;
  supervisorName: string;
  supervisorContact: string;
  contactApproval: string;
}

export interface ValuesObject {
  [key: string]: string;
  formTitle: string;
  formDate: string;
  firstName: string;
  lastName: string;
  gender: string;
  age: string;
  dateOfBirth: string;
  address: string;
  cityStateZip: string;
  country: string;
  phoneNumber: string;
  email: string;
}

export interface FormData {
  formValues: ValuesObject;
  historyArray: WorkHistoryObject[];
}
