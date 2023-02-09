import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
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

const WorkHistory = () => {
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
            }}
          >
            <form>
              <CardHeader title={"Form Title"} subheader={"Today's Date"} />
              <CardContent>
                <Stack spacing={2} direction="column">
                  <Box border={1}>{"Applicant Information"}</Box>
                  <Box border={1}>{"Work History"}</Box>
                </Stack>
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
