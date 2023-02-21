import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { ValuesObject, WorkHistoryObject } from "../types/types";
import Logo from "../data/genericCompanyLogo_1.jpeg";
import { displayText } from "../types/constants";
import { useState } from "react";
import HistoryValues from "./historyValues";

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
              <Grid item key={index}>
                <HistoryValues {...workHistoryObj} />
              </Grid>
            );
          })}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default DataDisplay;
