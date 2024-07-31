import { useEffect, useRef, useState } from "react";

const useToggleControl = () => {
  const [openToggle, setOpenToggle] = useState(false);

  const handleToggle = () => {
    setOpenToggle(!openToggle);
  };
  const disableToggle = useRef(null);

  const handleOutSide = (e) => {
    
    if (disableToggle.current && !disableToggle.current.contains(e.target)) {
      setOpenToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutSide);

    return () => {
      document.removeEventListener("click", handleOutSide);
    };
  }, []);
  return { openToggle,handleToggle, disableToggle };
};

export default useToggleControl;
