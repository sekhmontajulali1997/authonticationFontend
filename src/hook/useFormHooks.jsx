import { useState } from "react";

const useFormHooks = (initialState) => {
  const [input, setInput] = useState(initialState);

  // form reset

  const formReset = () =>{
    setInput(initialState)
  }

  // handleInputChange

  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return { input, setInput, handleInputChange, formReset };
};

export default useFormHooks;
