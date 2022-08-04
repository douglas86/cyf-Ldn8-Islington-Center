import axios from "axios";

export const handleDelete = (endpoint, updateData) => {
  const answer = window.confirm("Are you sure that you want to delete");
  if (answer) {
    axios
      .delete(`${process.env.REACT_APP_URL}/${endpoint}`)
      .then(() => {
        updateData(true);
      })
      .catch((err) => console.log("err", err));
  }
};
