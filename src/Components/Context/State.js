import react, { useState } from "react";

import MyContext from "./Context";

const MyState = (props) => {
  const state1 = { name: "", description: "" };
  const [state, setState] = useState(state1);

  const handleChangeToDoName = (e) => {
    setState({ name: e.target.value });
  };
  const handleChangeToDoDescription = (e) => {
    setState({ description: e.target.value });
  };

  return (
    <MyContext.Provider
      value={(state, handleChangeToDoName, handleChangeToDoDescription)}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyState;
