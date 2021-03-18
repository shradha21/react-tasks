const reverseReducer = (state = "", action) => {
    switch (action.type) {
      case "REVERSE_NAME": {
        return action.payload;
      }
  
      default: {
        return ""
      }
    }
  };
  
  export default reverseReducer;