import { useState } from "react";

import AddQuestions from "../components/template/AddQuestions";
import AddLessons from "../components/template/AddLessons";
import Cards from "../components/organism/Cards";
import { toHeading } from "../components/atom/toHeading";

import styles from "./styles/Teacher.module.css";

const Teacher = () => {
  const [visibleQuestions, setVisibleQuestions] = useState(false);
  const [visibleLessons, setVisibleLessons] = useState(false);

  return (
    <div>
      {toHeading("Our Expert Teachers")}
      <p className={styles.lesson_plan}>
        Here you can find a wide range of full lesson plans to use in your
        secondary classroom. All of our lessons are designed around themes
        engaging and relevant to secondary learners and can be used to
        complement your school curriculum, giving students an opportunity to
        develop their English language and skills in motivating and enjoyable
        ways. Written by young learner experts from around the world, our lesson
        plans are easy to use and aim to give your students the skills and
        confidence they need to enjoy learning English.
      </p>
      <div className={styles.add_questions}>
        <button
          className={styles.buttons}
          onClick={() => setVisibleQuestions(true)}
        >
          Add Questions
        </button>
        <button
          className={styles.buttons}
          onClick={() => setVisibleQuestions(false)}
        >
          Cancel
        </button>
      </div>
      {visibleQuestions && <AddQuestions />}
      <div className={styles.add_questions}>
        <button
          className={styles.buttons}
          onClick={() => setVisibleLessons(true)}
        >
          Add Lessons
        </button>
        <button
          className={styles.buttons}
          onClick={() => setVisibleLessons(false)}
        >
          Cancel
        </button>
      </div>
      {visibleLessons && <AddLessons />}
      <Cards />
    </div>
  );
};

export default Teacher;
