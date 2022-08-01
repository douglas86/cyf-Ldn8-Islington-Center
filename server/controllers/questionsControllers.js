import { pool } from "../lib/pool.js";
import { thenService } from "../services/thenService.js";
import { catchService } from "../services/catchService.js";

export const post = async (req, res) => {
  const { lesson_id, image, question } = req.body;
  const params = [lesson_id, image, question];
  req.body.answers.map((a) => {
    const { answer, is_correct } = a;
    params.push(answer);
    params.push(is_correct);
  });
  await pool
    .query(
      `WITH q AS (INSERT INTO questions(exam_id,image,question) VALUES ($1,$2,$3) returning *), answer1 as (INSERT INTO answers (answer, is_correct,question_id) VALUES ($4,$5,(SELECT id FROM q)),($6,$7,(SELECT id FROM q)),($8,$9,(SELECT id from q)), ($10,$11,(SELECT id FROM q)) returning *) SELECT * FROM q`,
      params
    )
    .then(() => thenService(res, "Question and answer created."))
    .catch((err) => catchService(res, err));
};

export const get = async (req, res) => {
  const lessonId = req.params.lessonId;
  const query = `SELECT questions.id, image, question FROM questions WHERE exam_id = $1`;

  await pool.query(query, [lessonId]).then(async (result) => {
    const arr = [];

    for (let question of result.rows) {
      const answerResults = await pool.query(
        `SELECT id, is_correct, answer FROM answers WHERE question_id=$1`,
        [question.id]
      );
      question["answers"] = answerResults.rows;
      arr.push(question);
    }
    res.json(arr);
  });
};

export const put = async (req, res) => {
  let { lesson_id, image, question, id } = req.body;
  let param = [lesson_id, question, image, id];
  const params = [];
  req.body.answers.map((a, index) => {
    const { answer, is_correct, id } = a;
    params[index] = [answer, is_correct, id];
  });
  await pool
    .query(
      `UPDATE questions SET exam_id=$1,question=$2,image=$3 WHERE id=$4`,
      param
    )
    .then(
      async () =>
        await pool.query(
          "UPDATE answers SET answer=$1,is_correct=$2 WHERE id=$3",
          params[0]
        )
    )
    .then(
      async () =>
        await pool.query(
          "UPDATE answers SET answer=$1, is_correct=$2 WHERE id=$3",
          params[1]
        )
    )
    .then(
      async () =>
        await pool.query(
          "Update answers set answer = $1, is_correct = $2 Where id = $3",
          params[2]
        )
    )
    .then(
      async () =>
        await pool.query(
          "Update answers set answer = $1, is_correct = $2 Where id = $3",
          params[3]
        )
    )
    .then(() => res.send(`question and answers updated!`))
    .catch((err) => catchService(res, err));
};

export const del = async (req, res) => {
  const questionId = req.params.questionId;

  await pool
    .query("DELETE FROM questions WHERE id=$1", [questionId])
    .then(() => pool.query("DELETE FROM questions WHERE id=$1", [questionId]))
    .then(() => res.send(`question ${questionId} deleted!`))
    .catch((err) => catchService(res, err));
};
