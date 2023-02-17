import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  Paper,
  Stack,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { ValuesObject, WorkHistoryObject } from "../types/types";

/**
    Component Function:
        This component will take in and display to the screen the users submitted  from data  
 
 */

interface DataDisplayProps {
  values: ValuesObject;
  dataArray: WorkHistoryObject[];
}

const DataDisplay = ({ values, dataArray }: DataDisplayProps) => {
  return (
    <Card>
      <CardHeader title="Thank You For Your Submission!" />
      <CardContent>
        <Grid container border={1} padding={1} margin={1}>
          <Grid item xs={12} sm={6} md={6}>{`Submission Date:`}</Grid>
          <Grid item xs={12} sm={6} md={6}>{`${values.formDate}`}</Grid>
          <Divider />
          <Grid item xs={12} sm={6} md={6}>{`Submission Type:`}</Grid>
          <Grid item xs={12} sm={6} md={6}>
            {values.formTitle}
          </Grid>
          <Grid item xs={12} sm={6} md={6}>{`Applicant Name:`}</Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
          >{`${values.firstName} ${values.lastName}`}</Grid>
          <Grid item xs={12} sm={6} md={6}>{`Gender:`}</Grid>
          <Grid item xs={12} sm={6} md={6}>
            {values.gender}
          </Grid>
          <Grid item xs={12} sm={6} md={6}>{`Age:`}</Grid>
          <Grid item xs={12} sm={6} md={6}>
            {values.age}
          </Grid>
          <Grid item xs={12} sm={6} md={6}>{`Date Of Birth:`}</Grid>
          <Grid item xs={12} sm={6} md={6}>{`${new Date(
            values.dateOfBirth
          ).toDateString()}`}</Grid>
          <Grid item xs={12} sm={6} md={6}>{`Address:`}</Grid>
          <Grid item xs={12} sm={6} md={6}>
            {values.address}
          </Grid>
          <Grid item xs={12} sm={6} md={6}>{`City/State/Zip:`}</Grid>
          <Grid item xs={12} sm={6} md={6}>
            {values.cityStateZip}
          </Grid>
          <Grid item xs={12} sm={6} md={6}>{`Country:`}</Grid>
          <Grid item xs={12} sm={6} md={6}>
            {values.country}
          </Grid>
          <Grid item xs={12} sm={6} md={6}>{`Phone#:`}</Grid>
          <Grid item xs={12} sm={6} md={6}>
            {values.phoneNumber}
          </Grid>
          <Grid item xs={12} sm={6} md={6}>{`Email:`}</Grid>
          <Grid item xs={12} sm={6} md={6}>
            {values.email}
          </Grid>
        </Grid>
        <Grid container border={1} margin={1} padding={1} spacing={2}>
          {dataArray.map((workHistoryObj, index) => {
            return (
              <Grid item key={index} xs={12} sm={3} md={3}>
                <Paper elevation={2}>
                  <Stack direction={"row"} spacing={2}>
                    <div>{"Company Name:"}</div>
                    <div>{workHistoryObj.companyName}</div>
                  </Stack>
                  <Divider />
                  <Stack direction={"row"} spacing={2}>
                    <Grid>{"Position Title:"}</Grid>
                    <Grid>{workHistoryObj.positionTitle}</Grid>
                  </Stack>
                  <Divider />
                  <Stack direction={"row"} spacing={2}>
                    <Grid>{"Start Date:"}</Grid>
                    <Grid>{`${new Date(
                      workHistoryObj.startDate
                    ).toDateString()}`}</Grid>
                  </Stack>
                  <Divider />
                  <Stack direction={"row"} spacing={2}>
                    <Grid>{"End Date:"}</Grid>
                    <Grid>{`${new Date(
                      workHistoryObj.endDate
                    ).toDateString()}`}</Grid>
                  </Stack>
                  <Divider />
                  <Stack direction={"row"} spacing={2}>
                    <Grid>{"Position Description"}</Grid>
                    <Grid>{workHistoryObj.positionDescription}</Grid>
                  </Stack>
                  <Divider />
                  <Stack direction={"row"} spacing={2}>
                    <Grid>{`Supervisor's Name:`}</Grid>
                    <Grid>{workHistoryObj.supervisorName}</Grid>
                  </Stack>
                  <Divider />
                  <Stack direction={"row"} spacing={2}>
                    <Grid>{`Supervisor's Contact:`}</Grid>
                    <Grid>{workHistoryObj.supervisorContact}</Grid>
                  </Stack>
                  <Divider />
                  <Stack direction={"row"} spacing={2}>
                    <Grid>{`Permission to Contact:`}</Grid>
                    <Grid>{workHistoryObj.contactApproval}</Grid>
                  </Stack>
                  <Divider />
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default DataDisplay;
