import React, { useState } from "react";

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
      value: "EN"
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

  function FlagDropdown(props){
    const classes = useStyles();
    const [country, setCountry] = useState(countries.find(item=>item.value === props.language).value);
    const [open, setOpen] = useState(false);
  
    const handleChange = event => {
      setCountry(event.target.value);
      // console.log(event.target.value);
      props.onChange(event.target.value);
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
                <MenuItem value={option.value} key={key}>
                  <img src={option.src} alt={option.label} />{" "}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </form>
      );
  }

  export default FlagDropdown;