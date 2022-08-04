import { useState } from "react";
import axios from "axios";

const Handlers = () => {
  const [state, setState] = useState({
    title: "",
    img_url: "",
    intro: "",
    summary: "",
    content: "",
    video_url: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_URL}/lessons`, state)
      .then(() => (window.location = "/teacher"))
      .catch((err) => console.log("err", err));
  };

  const handleInputChange = (event, name) => {
    setState({ ...state, [name]: event.target.value });
  };

  const handleStates = () => {
    return [state, setState];
  };

  return {
    handleSubmit,
    handleInputChange,
    handleStates,
  };
};

export default Handlers;
