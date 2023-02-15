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
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

/**
 Component Action: This application will create a composite of inputs for applicant to fill out there work history
 
 Done:
 - Create Card 
 - Create layout for user work history information 


 TODO:
 - create card header to display work Item + index number
 - set up component to render passed props  
 - add btn and function to erase a work history object 
 
 */

interface HistoryInfoProps {
  companyName: string;
  positionTitle: string;
  startDate: string;
  endDate: string;
  positionDescription: string;
  supervisorName: string;
  supervisorContact: string;
  contactApproval: string;
  onChange?: Function;
  removeObject: Function;
  cardIndex: number;
}

const HistoryInfo = ({
  cardIndex,
  companyName,
  positionTitle,
  startDate,
  endDate,
  positionDescription,
  supervisorName,
  supervisorContact,
  contactApproval,
  removeObject,
  onChange,
}: HistoryInfoProps) => {
  console.log("cardIndex", cardIndex);
  return (
    <Card sx={{ backgroundColor: "tan" }}>
      <IconButton
        onClick={() => {
          removeObject(cardIndex);
        }}
        disabled={cardIndex > 0 ? false : true}
      >
        <DeleteForeverIcon color={cardIndex > 0 ? "error" : "disabled"} />
      </IconButton>
      <CardContent>
        <Stack spacing={1}>
          <TextField label="Company name:" value={companyName} />
          <TextField label="Former Position/Title:" value={positionTitle} />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label={"Start Date"}
              value={startDate}
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
              value={endDate}
              onChange={() => {}}
              renderInput={(
                params: JSX.IntrinsicAttributes & TextFieldProps
              ): JSX.Element => {
                return <TextField {...params} />;
              }}
            />
          </LocalizationProvider>
          <TextField
            label="Position Description"
            multiline
            rows={4}
            value={positionDescription}
          />
          <TextField label="Supervisor's name:" value={supervisorName} />
          <TextField
            label="Supervisor's phone/email"
            value={supervisorContact}
          />
          <FormControlLabel
            control={<Checkbox color="success" value={contactApproval} />}
            label="Contact Approval"
          />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default HistoryInfo;
