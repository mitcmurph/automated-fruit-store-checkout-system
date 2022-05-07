import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

const buttonStyles = {
  weight: '400',
  fontSize: '20px',
  color: '#000000',
  padding: '0px',
  margin: '0px',
  alignItems: 'center',
}

const fieldStyles = {
  background: 'white',
  weight: '400',
  fontFamily: 'Inter',
  backgroundColor: 'rgba(0, 0, 0, 0)',
  width: '32px'
}

export function Counter() {
  const [count, setCount] = useState<number>(0);

  const onChange = (value: number) => {
    if (isNaN(value))
      return;

    if (value < 0) value = 0;
    setCount(value);
  }


  return <>
    <Button sx={buttonStyles} onClick={() => { onChange(count - 1) }}>-</Button>
    <TextField variant="standard" sx={fieldStyles} value={count} onChange={(e) => onChange(Number(e.target.value))} />
    <Button sx={buttonStyles} onClick={() => { onChange(count + 1) }}>+</Button>
  </>
}