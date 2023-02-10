import { useState } from "react";
import { TextField, Typography, Select, Slide } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

/**
 Component Action: This application will take in the list of application information sections and render input components based on the type 
 
 TODO: 
    - intake list of input objects
    - return different data input based on object type key

    input types: TextField, Select, Slider, Date
 
 */

interface PersonalInfoProps {
  inputs: [string];
}

const PersonalInfo = ({ inputs }: PersonalInfoProps) => {
  const [formInputs, setFormInputs] = useState();

  return <></>;
};

export default PersonalInfo;
