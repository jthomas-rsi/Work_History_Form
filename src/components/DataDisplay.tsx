import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { ValuesObject, WorkHistoryObject } from "../types/types";
import Logo from "../data/genericCompanyLogo_1.jpeg";
import { displayText } from "../types/constants";
import { useState } from "react";

/**
    Component Function:
        This component will take in and display to the screen the users submitted  from data  
 
 */

interface DataDisplayProps {
  values: ValuesObject;
  dataArray: WorkHistoryObject[];
}

const DataDisplay = ({ values, dataArray }: DataDisplayProps) => {
  const [applicantValues, setApplicantValues] = useState(
    Object.entries(values)
  );
  //Crete an array of values object values
  //map through array creating Grid Item pairs
  /**
   {
    applicantValues.map((value, index)=>{
      return(
        <Grid key={index} item xs={12} sm={6} md={6}>
            <Typography variant="overline">{displayText.valuesObject[`${value}`]}</Typography>
          </Grid>
          <Grid key={index} item xs={12} sm={6} md={6}>
            <Typography variant="overline">{`${values.formDate}`}</Typography>
          </Grid>
       )
    })
   } 
   */
  console.log(applicantValues);

  return (
    <Card>
      <CardHeader
        title="Thank You For Your Submission!"
        avatar={
          <Avatar src={Logo} sx={{ width: 160, height: 80 }} variant="square" />
        }
      />
      <CardContent>
        <Grid container border={1} padding={1}>
          {applicantValues.map((value, index) => {
            return (
              <Grid key={index} item xs={12} sm={6} md={6}>
                <Stack direction={"row"} spacing={2} textAlign={"center"}>
                  <Typography variant="overline">
                    {displayText.applicantValues[`${value[0]}`]}
                  </Typography>
                  <Typography variant="overline">{`${value[1]}`}</Typography>
                </Stack>
              </Grid>
            );
          })}
        </Grid>
        <Typography variant="overline">{"Work History"}</Typography>
        <Grid container border={1} padding={1}>
          {dataArray.map((workHistoryObj, index) => {
            return (
              <Grid item key={index} xs={12} sm={3} md={3} padding={1}>
                <Paper variant={"outlined"}>
                  <Stack direction={"row"} spacing={2}>
                    <Typography variant="overline">
                      {"Company Name:"}
                    </Typography>
                    <Typography variant="overline">
                      {workHistoryObj.companyName}
                    </Typography>
                  </Stack>
                  <Divider />
                  <Stack direction={"row"} spacing={2}>
                    <Typography variant="overline">
                      {"Position Title:"}
                    </Typography>
                    <Typography variant="overline">
                      {workHistoryObj.positionTitle}
                    </Typography>
                  </Stack>
                  <Divider />
                  <Stack direction={"row"} spacing={2}>
                    <Typography variant="overline">{"Start Date:"}</Typography>
                    <Typography variant="overline">
                      {`${new Date(workHistoryObj.startDate).toDateString()}`}
                    </Typography>
                  </Stack>
                  <Divider />
                  <Stack direction={"row"} spacing={2}>
                    <Typography variant="overline">{"End Date:"}</Typography>
                    <Typography variant="overline">
                      {`${new Date(workHistoryObj.endDate).toDateString()}`}
                    </Typography>
                  </Stack>
                  <Divider />
                  <Stack direction={"row"} spacing={2}>
                    <Typography variant="overline">
                      {"Position Description"}
                    </Typography>
                    <Typography variant="overline">
                      {workHistoryObj.positionDescription}
                    </Typography>
                  </Stack>
                  <Divider />
                  <Stack direction={"row"} spacing={2}>
                    <Typography variant="overline">
                      {`Supervisor's Name:`}
                    </Typography>
                    <Typography variant="overline">
                      {workHistoryObj.supervisorName}
                    </Typography>
                  </Stack>
                  <Divider />
                  <Stack direction={"row"} spacing={2}>
                    <Typography variant="overline">
                      {`Supervisor's Contact:`}
                    </Typography>
                    <Typography variant="overline">
                      {workHistoryObj.supervisorContact}
                    </Typography>
                  </Stack>
                  <Divider />
                  <Stack direction={"row"} spacing={2}>
                    <Typography variant="overline">
                      {`Permission to Contact:`}
                    </Typography>
                    <Typography variant="overline">
                      {workHistoryObj.contactApproval}
                    </Typography>
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
