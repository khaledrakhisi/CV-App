import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import USA from "./assets/flags/united-states.png";
import Deutschland from "./assets/flags/germany.png";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(5),
    minWidth: 60,
    minHeight: 30,
    backgroundColor: "transparent",
  },
  select: {
    textAlign: "center",
    textDecoration: "none",
  },
}));

function FlagDropdown(props) {
  const countries = [
    {
      label: "USA",
      src: USA,
      link: " ",
      abbreviation: "EN",
    },
    {
      label: "Deutschland",
      src: Deutschland,
      link: " ",
      abbreviation: "DE",
    },
  ];

  const classes = useStyles();
  const [country, setCountry] = useState("EN");

  useEffect(() => {
    if (props.language) {
      let it = countries.find((item) => item.abbreviation === props.language);
      if (it) setCountry(it.abbreviation);
      else
        setCountry(countries.find((item) => item.abbreviation === "EN").abbreviation);
    } else
      setCountry(countries.find((item) => item.abbreviation === "EN").abbreviation);
  }, [props.language]);

  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
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
            id: "open-select",
          }}
          disableUnderline
        >
          {countries.map((option, key) => (
            <MenuItem value={option.abbreviation} key={key}>
              <img src={option.src} alt={option.label} />{" "}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </form>
  );
}

export default FlagDropdown;
