import { Divider, Paper, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { displayText } from "../types/constants";

interface HistoryInfoProps {
  companyName: string;
  positionTitle: string;
  startDate: string | Date;
  endDate: string;
  positionDescription: string;
  supervisorName: string;
  supervisorContact: string;
  contactApproval: string;
}

const HistoryValues = ({
  companyName,
  positionTitle,
  startDate,
  endDate,
  positionDescription,
  supervisorName,
  supervisorContact,
  contactApproval,
}: HistoryInfoProps) => {
  //capture all props into array for mapping
  const [values, setValues] = useState([
    companyName,
    positionTitle,
    startDate,
    endDate,
    positionDescription,
    supervisorName,
    supervisorContact,
    contactApproval,
  ]);
  //array of prop names as strings to for indexing displayText object
  const [titles, setTitles] = useState([
    "companyName",
    "positionTitle",
    "startDate",
    "endDate",
    "positionDescription",
    "supervisorName",
    "supervisorContact",
    "contactApproval",
  ]);

  return (
    <Paper>
      {values.map((value, index) => {
        return (
          <Stack direction={"row"} spacing={2} borderBottom={1} padding={1}>
            <Typography variant="overline">
              {displayText.historyValues[`${titles[index]}`]}
            </Typography>
            <Typography variant="overline">{`${value}`}</Typography>
          </Stack>
        );
      })}
    </Paper>
  );
};

export default HistoryValues;
