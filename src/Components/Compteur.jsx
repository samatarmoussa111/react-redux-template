import { Button, ButtonGroup, Typography } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import { increment, decrement } from "../actions";

const Compteur = () => {
  const counter = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  const handleClickPlus = () => {
    dispatch(increment());
  };

  const handleClickMinus = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <Typography variant="h1">{utilitaire(counter)}</Typography>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button onClick={handleClickPlus}>
          <AddBoxIcon />
        </Button>
        <Button onClick={handleClickMinus}>
          <IndeterminateCheckBoxIcon />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Compteur;

const utilitaire = (arg) => {
  let element = "";
  arg > 0
    ? (element = <span style={{ color: "green" }}>compteur : {arg} </span>)
    : (element = <span style={{ color: "red" }}>compteur : {arg} </span>);
  return element;
};
