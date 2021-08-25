import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import USA from "./assets/flags/united-states.png";
import Deutschland from "./assets/flags/germany.png";

const countries = [
    {
      label: "USA",
      src: USA,
      link: " ",
      value: "US"
    },
    {
      label: "Deutschland",
      src: Deutschland,
      link: " ",
      value: "DE"
    },    
  ];

  const useStyles = makeStyles(theme => ({
    button: {
      display: "block",
      marginTop: theme.spacing(2)
    },
    formControl: {
      margin: theme.spacing(5),
      minWidth: 60,
      minHeight: 30,
      backgroundColor: "transparent"
    },
    select: {
      textAlign: "center",
      textDecoration: "none"
    }
  }));

  function FlagDropdown(){
    const classes = useStyles();
    const [country, setCountry] = React.useState(USA);
    const [open, setOpen] = React.useState(false);
  
    const handleChange = event => {
      setCountry(event.target.value);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };

    return (
        <form autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="open-select" />
            <Select
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={country}
              name="country"
              onChange={handleChange}
              inputProps={{
                id: "open-select"
              }}
              disableUnderline
            >
              {countries.map((option, key) => (
                <MenuItem value={option.src} key={key}>
                  <img src={option.src} alt={option.label} />{" "}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </form>
      );
  }

  export default FlagDropdown;