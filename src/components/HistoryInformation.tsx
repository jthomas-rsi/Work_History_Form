/**
 Component Action: This application will create a composite of inputs for applicant to fill out there work history
 
 Done:
 - Create Card 
 - Create layout for user work history information 


 TODO:
 - create card header to display work Item + index number 
  
 
 */

import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const HistoryInfo = () => {
  return (
    <Card>
      <TextField label="Company name:" />
      <TextField label="Former Position/Title:" />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label={"Start Date"}
          value={""}
          onChange={() => {}}
          renderInput={(
            params: JSX.IntrinsicAttributes & TextFieldProps
          ): JSX.Element => {
            return <TextField {...params} />;
          }}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label={"End Date"}
          value={""}
          onChange={() => {}}
          renderInput={(
            params: JSX.IntrinsicAttributes & TextFieldProps
          ): JSX.Element => {
            return <TextField {...params} />;
          }}
        />
      </LocalizationProvider>
      <TextField label="Multiline" multiline rows={4} />
      <TextField label="Supervisor's name:" />
      <TextField label="Supervisor's phone/email" />
      <FormControlLabel
        control={<Checkbox color="success" />}
        label="Contact Approval"
      />
    </Card>
  );
};

export default HistoryInfo;
