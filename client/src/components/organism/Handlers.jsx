import { useState } from "react";

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
    console.log("event");
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
