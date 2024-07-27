import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { resetCount } from "../store/slices/counterSlice";

const ResetCount = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Button
        fullWidth
        variant='contained'
        onClick={() => {
          dispatch(resetCount(0));
        }}
      >
        Reset
      </Button>
    </div>
  );
};

export default ResetCount;
