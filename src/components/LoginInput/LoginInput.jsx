import React from 'react'
import { useState } from 'react';
import style from "./LoginInput.module.css"

const LoginInput = ({ label, errorMessage, onChange, id, ...inputProps }) => {
  const [focused, setFocused] = useState(false);


  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className={style.formInput}>
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        // onFocus={() =>
        //   inputProps.name === "confirmPassword" && setFocused(true)
        // }
        focused={focused.toString()}
      />
      <span style={{ color: "red"}}>{errorMessage}</span>
    </div>
  );
};

export default LoginInput;