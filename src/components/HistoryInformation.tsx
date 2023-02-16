import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import {
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  IconButton,
  Stack,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

/**
 Component Action: 
 This application will create a composite of inputs for applicant to fill 
 out their work history

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
  onChange: Function;
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
          <TextField
            label="Company name:"
            value={companyName}
            onChange={(event) => {
              onChange(event.target.value, cardIndex, "companyName");
            }}
          />
          <TextField
            label="Former Position/Title:"
            value={positionTitle}
            onChange={(event) => {
              onChange(event.target.value, cardIndex, "positionTitle");
            }}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label={"Start Date"}
              value={startDate}
              onChange={(event) => {
                onChange(event, cardIndex, "startDate");
              }}
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
              onChange={(event) => {
                onChange(event, cardIndex, "endDate");
              }}
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
            onChange={(event) => {
              onChange(event.target.value, cardIndex, "positionDescription");
            }}
          />
          <TextField
            label="Supervisor's name:"
            value={supervisorName}
            onChange={(event) => {
              onChange(event.target.value, cardIndex, "supervisorName");
            }}
          />

          <TextField
            label="Supervisor's phone/email"
            value={supervisorContact}
            onChange={(event) => {
              onChange(event.target.value, cardIndex, "supervisorContact");
            }}
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
