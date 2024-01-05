export const useInput = (initiaValue, validator) => {
    const [value, setValue] = useState(initiaValue);
    const onChange = (event) => {
      const {
        target: { value },
      } = event;
      let willUpdate = true;
      if (typeof validator === "function") {
        willUpdate = validator(value);
      }
      if (willUpdate) {
        setValue(value);
      }
    };
  
    return { value, onChange };
  };