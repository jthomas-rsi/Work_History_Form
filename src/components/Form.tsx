import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import { ChangeEvent, SetStateAction, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import formInputs from "../data/formInputs";
/**
  TODO: Work History Form
   Done: 
   (1): create a work history form 
    ==> basic form with content outline created
   (2): include basic information gathering section
   ==> basic applicant information has been inputted into component and rendered to screen as placeholders

   
   TODO:
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
   (8): create components to render specific application input elements for Applicant Information and Work History sections
   (9): create functions for each input type 


 */
const ages = new Array(100);

const Form = () => {
  //Single State object
  const [values, setValues] = useState<{ [key: string]: string }>({
    formTitle: "Form Title",
    formDate: "Today's Date",
    firstName: "",
    lastName: "",
    gender: "",
    age: "",
    dateOfBirth: "",
    address: "",
    cityStateZip: "",
    country: "",
    phoneNumber: "",
    email: "",
  });

  //array to render work history components
  const [workHistory, setWorkHistory] = useState([]);

  // onChange function to capture user input and update state object
  const handleChange = (eventValue: string, varTitle: string) => {
    setValues((prevState) => {
      // make new obj
      // varTitle === key, in newObject set value to event.target.value
      return {
        ...prevState,
        [varTitle]: eventValue,
      };
    });
  };

  // const handleSubmit = () => {}

  // Sets form initial inputs to render
  const [appInfo, setAppInfo] = useState<typeof formInputs>(formInputs);
  //create handle change functions for form submission
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
              // minWidth: "50%",
            }}
          >
            <form>
              <CardHeader
                title={values.formTitle}
                subheader={values.formDate}
              />
              <CardContent>
                <Typography variant="overline">
                  {"Applicant Information"}
                </Typography>
                <Grid
                  container
                  border={1}
                  mb={1}
                  alignItems="center"
                  justifyContent="center"
                >
                  {appInfo.map((input, index) => {
                    {
                      /* {
                      conditional returns for input types: date, select, text
                    } */
                    }
                    if (input.type.toLowerCase() === "date") {
                      return (
                        <Grid
                          item
                          key={index}
                          xs={12}
                          sm={4}
                          md={4}
                          margin={2}
                          textAlign="center"
                          alignItems="center"
                        >
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                              label={`${input.displayName}`}
                              value={values[input.varTitle]}
                              onChange={(event) => {
                                if (event) {
                                  handleChange(event, input.varTitle);
                                }
                              }}
                              renderInput={(
                                params: JSX.IntrinsicAttributes & TextFieldProps
                              ): JSX.Element => {
                                return <TextField {...params} />;
                              }}
                            />
                          </LocalizationProvider>
                        </Grid>
                      );
                    }
                    if (input.type.toLowerCase() === "text") {
                      return (
                        <Grid
                          item
                          key={index}
                          xs={12}
                          sm={4}
                          md={4}
                          margin={1}
                          textAlign="center"
                          alignItems="center"
                        >
                          <TextField
                            label={input.displayName}
                            value={values[input.varTitle]}
                            onChange={(event) => {
                              handleChange(event.target.value, input.varTitle);
                            }}
                          />
                        </Grid>
                      );
                    }
                    if (input.type.toLowerCase() === "select") {
                      return (
                        <Grid
                          item
                          key={index}
                          xs={12}
                          sm={4}
                          md={4}
                          margin={2}
                          textAlign="center"
                          alignItems="center"
                        >
                          <FormControl sx={{ m: 1, minWidth: "100%" }}>
                            <InputLabel id="select-label">
                              {input.displayName}
                            </InputLabel>
                            <Select
                              id={`select-input-${input.displayName}`}
                              labelId="select-label"
                              value={values[input.varTitle]}
                              label={input.displayName}
                              onChange={(event) => {
                                handleChange(
                                  event.target.value,
                                  input.varTitle
                                );
                              }}
                            >
                              {input.choices?.map((choice, index) => {
                                return (
                                  <MenuItem key={index} value={choice}>
                                    {choice}
                                  </MenuItem>
                                );
                              })}
                            </Select>
                          </FormControl>
                        </Grid>
                      );
                    }
                  })}
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

export default Form;
