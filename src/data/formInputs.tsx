import countryList from "./countryList";

const formInputs = [
  {
    displayName: "First Name:",
    type: "text",
    value: undefined,
  },
  {
    displayName: "Last Name:",
    type: "text",
    value: undefined,
  },
  {
    displayName: "Gender:",
    type: "select",
    value: undefined,
    choices: ["Male", "Female", "Non-Binary", "Other"], // create array of choices M F O
  },
  {
    displayName: "Age:",
    type: "select",
    value: undefined,
    choices: Array.from(Array(100).keys()), // create array of numbers from 0-100
  },
  {
    displayName: "Date Of birth:",
    type: "date",
    value: undefined,
  },
  {
    displayName: "Street Address:",
    type: "text",
    value: undefined,
  },
  {
    displayName: "City/State/Zip:",
    type: "text",
    value: undefined,
  },
  {
    displayName: "Country:",
    type: "select",
    value: undefined,
    choices: countryList, // find list of countries
  },
  {
    displayName: "Phone:",
    type: "text",
    value: undefined,
  },
  {
    displayName: "Email:",
    type: "text",
    value: undefined,
  },
];

export default formInputs;
