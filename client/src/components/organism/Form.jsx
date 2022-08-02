import Handlers from "./Handlers";
import { toTitle } from "../atom/toTitle";

import styles from "./styles.module.css";

const Form = () => {
  const { handleSubmit, handleInputChange, handleStates } = Handlers();

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        {Object.entries(handleStates()[0]).map((items, index) => (
          <div key={index}>
            <input
              className={styles.input}
              placeholder={toTitle(items.toString())}
              onChange={(event) =>
                handleInputChange(event, items.toString().split(",")[0])
              }
            />
          </div>
        ))}
        <button type="submit" className={styles.submit}>
          Add Lessons
        </button>
      </form>
    </div>
  );
};

export default Form;
