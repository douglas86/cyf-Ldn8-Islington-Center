import Markdown from "markdown-to-jsx";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { youtubeVideos } from "../molecule/youtubeVideos";
import { toHeading } from "../atom/toHeading";

import styles from "./styles.module.css";

const DetailsTemplate = ({ lessons }) => {
  const { id, title, summary, content, video_url } = lessons;

  return (
    <div className={styles.lesson_content}>
      {toHeading(title)}
      <div className={styles.lesson_details_body}>
        {youtubeVideos(video_url)}
        <p>{summary}</p>
      </div>
      <Markdown className={styles.markdown} children={content} />
      <div>
        <p style={{ color: "#178be9", fontWeight: "bold", fontSize: "20px" }}>
          Test your knowledge to Improve your english knowledge. Sharpen your
          mind and your reading and speaking skills. Get smarter with Islington
          quizzes.
        </p>
        <Button variant="outline-primary" size="lg" fontSize="lg">
          <Link
            style={{ fontSize: "2rem" }}
            className={styles.link}
            to={`/questions/lessons/${id}`}
          >
            Take Quiz
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default DetailsTemplate;
