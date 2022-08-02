import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import DetailsTemplate from "../components/template/DetailsTemplate";
import { spinner } from "../components/atom/spinner";

const LessonDetails = () => {
  const { id } = useParams();
  const [lessons, setLessons] = useState({});

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/lessons/${id}`)
      .then((res) => setLessons(res.data));
  }, [id]);

  return (
    <div>
      {Object.keys(lessons).length !== 0 ? (
        <DetailsTemplate lessons={lessons[0]} />
      ) : (
        spinner()
      )}
    </div>
  );
};

export default LessonDetails;
