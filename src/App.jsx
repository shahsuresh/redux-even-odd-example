import { Box, Button, Typography } from "@mui/material";
import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCount, increaseCount } from "./store/slices/counterSlice";
import ResetCount from "./Component/ResetCount";

const App = () => {
  const values = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <Box
      height={250}
      width={250}
      gap={3}
      sx={{ border: "2px solid grey", padding: "5px", margin: "4px" }}
    >
      <Button
        variant='contained'
        color='success'
        onClick={() => {
          dispatch(increaseCount());
        }}
      >
        Increase
      </Button>
      <Typography variant='h3'>{values.count}</Typography>
      <Typography variant='h5'>
        {values.count % 2 == 0 ? "is Even" : "is Odd"}
      </Typography>
      <Button
        variant='contained'
        color='error'
        onClick={() => {
          dispatch(decreaseCount());
        }}
      >
        Decrease
      </Button>
      <hr />
      <ResetCount />
    </Box>
  );
};

export default App;
