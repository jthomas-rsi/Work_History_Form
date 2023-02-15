import HistoryInfo from "./HistoryInformation";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
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
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
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
   (9): create functions for each input type 
   ===> created a single onchange function that is reusable for all input elements 
   (6): display submitted information conditionally 
   (3): include nested sections for specific information of form

  INPROGRESS:
  (10): add functionality to add work item button, add new object to workHistory array
  
  (8): create components to render specific application input elements for Applicant Information and Work History sections
     ==> Applicant Information conditional render of input types
  
  
  TODO:
   (4): collect all form information    
   (5): submit form information 
   (7): reset app to Work History after data displayed onSubmit   
   (11): add work entity onChange handler     


 */

export interface WorkHistoryObject {
  [key: string]: string;
  companyName: string;
  positionTitle: string;
  startDate: string;
  endDate: string;
  positionDescription: string;
  supervisorName: string;
  supervisorContact: string;
  contactApproval: string;
}

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
  const [workHistory, setWorkHistory] = useState([
    {
      companyName: "",
      positionTitle: "",
      startDate: "",
      endDate: "",
      positionDescription: "",
      supervisorName: "",
      supervisorContact: "",
      contactApproval: "",
    },
  ]);

  // console.log("values", values); // values in applicant information updating correctly

  // onChange function to capture user input and update state object
  const handleChange = (eventValue: string, varTitle: string) => {
    setValues((prevState) => {
      return {
        ...prevState,
        [varTitle]: eventValue,
      };
    });
  };

  // function to add extra workHistory item to array
  const handleAddHistory = () => {
    // console.log("Button Clicked new Function");
    const newHistoryItem: WorkHistoryObject = {
      companyName: "add your info",
      positionTitle: "",
      startDate: "",
      endDate: "",
      positionDescription: "",
      supervisorName: "",
      supervisorContact: "",
      contactApproval: "",
    };
    setWorkHistory((prevState) => {
      return [...prevState, newHistoryItem];
    });
  };

  // function to update workHistory array objects onChange
  const handleHistoryChange = (
    eventValue: string,
    objIndex: number,
    keyString: string
  ) => {
    //log inputted values
    console.log("Changing WorkHistory Input ", eventValue, objIndex, keyString);

    // make new array by copying current workHistory array
    const newArray = [...workHistory];

    // target to copy object in new array
    const newObject: WorkHistoryObject = newArray[objIndex];

    // console.log("before update", newArray[objIndex]);
    //update new object copy with event value
    newObject[keyString] = eventValue;

    // update array with new object
    newArray[objIndex] = newObject;
    // console.log("after update", newArray[objIndex]);

    //set state with new update array
    setWorkHistory(newArray);
  };

  // function to remove work history object from array using index
  const removeHistoryObject = (objIndex: Number) => {
    //filter work history array by inputted index
    const newHistoryList = workHistory.filter((obj, index) => {
      return index !== objIndex;
    });

    // set new array to be rendered
    setWorkHistory(newHistoryList);
  };

  // function to collect all form information on submit btn click
  const handleSubmit = () => {};

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
              maxWidth: "50%",
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
                          <FormControl sx={{ m: 1, minWidth: "50%" }}>
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
                  <IconButton
                    color="primary"
                    onClick={() => {
                      handleAddHistory();
                    }}
                  >
                    <Typography variant="button">{"Add Item"}</Typography>
                    <AddIcon />
                  </IconButton>
                </Stack>
                <Grid container border={1} mb={1}>
                  {workHistory.map((obj, index) => {
                    return (
                      <Grid
                        item
                        key={index}
                        xs={12}
                        sm={3}
                        md={3}
                        margin={1}
                        textAlign="center"
                      >
                        <HistoryInfo
                          {...obj}
                          cardIndex={index}
                          removeObject={removeHistoryObject}
                          onChange={handleHistoryChange}
                        />
                      </Grid>
                    );
                  })}
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
