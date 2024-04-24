import css from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback, resetFunction, clicks }) => {
  return (
    <div className={css.options}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && (
        <button
          onClick={() => {
            resetFunction(clicks);
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
