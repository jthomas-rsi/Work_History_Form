import countryList from "./countryList";

const formInputs = [
  {
    displayName: "First Name:",
    type: "text",
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
    varTitle: "gender",
  },
  {
    displayName: "Age:",
    type: "select",
    choices: Array.from(Array(99).keys()),
    varTitle: "age",
  },
  {
    displayName: "Date Of Birth:",
    type: "date",
    varTitle: "dateOfBirth",
  },
  {
    displayName: "Street Address:",
    type: "text",
    varTitle: "address",
  },
  {
    displayName: "City/State/Zip:",
    type: "text",
    varTitle: "cityStateZip",
  },
  {
    displayName: "Country:",
    type: "select",
    choices: countryList,
    varTitle: "country",
  },
  {
    displayName: "Phone:",
    type: "text",
    varTitle: "phoneNumber",
  },
  {
    displayName: "Email:",
    type: "text",
    varTitle: "email",
  },
];

export default formInputs;
