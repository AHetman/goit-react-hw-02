import css from "./Feedback.module.css";

const Feedback = ({ click, totalFeedback }) => {
  const positivePercent = Math.round((click.good / totalFeedback) * 100);
  return (
    <div className={css.feedback}>
      <p className={css.clicCount}>Good: {click.good}</p>
      <p className={css.clicCount}>Neutral: {click.neutral}</p>
      <p className={css.clicCount}>Bad: {click.bad}</p>
      <p className={css.clicCount}>Total: {totalFeedback}</p>
      <p className={css.clicCount}>Positive: {positivePercent}%</p>
    </div>
  );
};

export default Feedback;
