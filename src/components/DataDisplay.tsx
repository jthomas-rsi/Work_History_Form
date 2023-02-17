import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { ValuesObject, WorkHistoryObject } from "../types/types";
import Logo from "../data/genericCompanyLogo_1.jpeg";

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
      <CardHeader
        title="Thank You For Your Submission!"
        avatar={
          <Avatar src={Logo} sx={{ width: 160, height: 80 }} variant="square" />
        }
      />
      <CardContent>
        <Grid container border={1} padding={1}>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="overline">{`Submission Date:`}</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="overline">{`${values.formDate}`}</Typography>
          </Grid>
          <Divider />
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="overline">{`Submission Type:`}</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="overline">{values.formTitle}</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="overline">{`Applicant Name:`}</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="overline">
              {`${values.firstName} ${values.lastName}`}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="overline">{`Gender:`}</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="overline">{values.gender}</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="overline">{`Age:`}</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="overline">{values.age}</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="overline">{`Date Of Birth:`}</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="overline">
              {`${new Date(values.dateOfBirth).toDateString()}`}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="overline">{`Address:`}</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="overline">{values.address}</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="overline">{`City/State/Zip:`}</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="overline">{values.cityStateZip}</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="overline">{`Country:`}</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="overline">{values.country}</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="overline">{`Phone#:`}</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="overline">{values.phoneNumber}</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="overline">{`Email:`}</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="overline">{values.email}</Typography>
          </Grid>
        </Grid>
        <Typography variant="overline">{"Work History"}</Typography>
        <Grid container border={1} padding={1}>
          {dataArray.map((workHistoryObj, index) => {
            return (
              <Grid item key={index} xs={12} sm={3} md={3} padding={1}>
                <Paper elevation={2} variant={"outlined"}>
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
