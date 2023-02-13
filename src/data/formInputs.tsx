import countryList from "./countryList";

const formInputs = [
  {
    displayName: "First Name:",
    type: "text",
    // value: undefined,
    varTitle: "firstName",
  },
  {
    displayName: "Last Name:",
    type: "text",
    value: undefined,
    varTitle: "lastName",
  },
  {
    displayName: "Gender:",
    type: "select",
    choices: ["Male", "Female", "Non-Binary", "Other"],
    // value: undefined,
    varTitle: "gender",
  },
  {
    displayName: "Age:",
    type: "select",
    choices: Array.from(Array(100).keys()),
    // value: undefined,
    varTitle: "age",
  },
  {
    displayName: "Date Of birth:",
    type: "date",
    // value: undefined,
    varTitle: "dateOfBirth",
  },
  {
    displayName: "Street Address:",
    type: "text",
    // value: undefined,
    varTitle: "address",
  },
  {
    displayName: "City/State/Zip:",
    type: "text",
    // value: undefined,
    varTitle: "cityStateZip",
  },
  {
    displayName: "Country:",
    type: "select",
    choices: countryList,
    // value: undefined,
    varTitle: "country",
  },
  {
    displayName: "Phone:",
    type: "text",
    // value: undefined,
    varTitle: "phoneNumber",
  },
  {
    displayName: "Email:",
    type: "text",
    // value: undefined,
    varTitle: "email",
  },
];

export default formInputs;
