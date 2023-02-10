import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
/**
  TODO: Work History Form
   Done: 
   (1): create a work history form 
    ==> basic form with content outline created

   
   TODO:
   (2): include basic information gathering section
    -> Name
    -> age
    -> address
    -> phone#
    -> email
    -> country
   (3): include nested sections for specific information of form
    -> work history  
      --> Company name
      --> Job title 
      --> Job description 
      --> Start Date
      --> End Date
      --> Supervisor
      --> Supervisor Contact information
   (4): collect all form information    
   (5): submit form information 
   (6): display submitted information conditionally 
   (7): reset app to Work History after data displayed onSubmit   

 */
const formInputs = [
  "First Name:",
  "Last Name:",
  "Sex:",
  "Age:",
  "Date Of birth:",
  "Street Address:",
  "City/State/Zip:",
  "Phone:",
  "Email:",
];

const WorkHistory = () => {
  const [appInfo, setAppInfo] = useState<typeof formInputs>(formInputs);
  return (
    <>
      {
        <Box
          sx={{
            minHeight: "100vh",
            backgroundColor: "lightblue",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card
            sx={{
              backgroundColor: "tan",
              minWidth: "50%",
            }}
          >
            <form>
              <CardHeader title={"Form Title"} subheader={"Today's Date"} />
              <CardContent>
                <Typography variant="overline">
                  {"Applicant Information"}
                </Typography>
                <Grid container border={1} mb={1}>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    margin={1}
                    textAlign="center"
                  >
                    <Typography variant="body2">
                      {"ADD IN INPUT ELEMENTS HERE"}
                    </Typography>
                  </Grid>
                </Grid>
                <Stack
                  direction={"row"}
                  spacing={1}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="overline">{"Work History"}</Typography>
                  <Button> Add Work Item</Button>
                </Stack>
                <Grid container border={1} mb={1}>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    margin={1}
                    textAlign="center"
                  >
                    <Typography variant="body2">
                      {"ADD IN INPUT ELEMENTS HERE"}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
                <IconButton color="primary">
                  <Typography variant="button">{"Submit"}</Typography>
                  <SendIcon />
                </IconButton>
              </CardActions>
            </form>
          </Card>
        </Box>
      }
    </>
  );
};

export default WorkHistory;
