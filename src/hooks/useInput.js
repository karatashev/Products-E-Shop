import { useState } from "react";

const useInput = (validation) => {
  const [value, setValue] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);
  const valueIsValid = validation(value);
  const valueIsInvalid = !valueIsValid && inputIsTouched;

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  const handleInputBlur = () => {
    setInputIsTouched(true);
  };

  return {
    value,
    valueIsInvalid,
    handleInputChange,
    handleInputBlur,
    valueIsValid,
  };
};

export default useInput;
