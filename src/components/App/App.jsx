import { useState, useEffect } from "react";
import Description from "../Description/Description.jsx";
import Options from "../Options/Options.jsx";
import Feedback from "../Feedback/Feedback.jsx";
import Notification from "../Notification/Notification.jsx";
import css from "./App.module.css";

const App = () => {
  const [click, setClick] = useState(() => {
    const savedClick = JSON.parse(localStorage.getItem("saved-click"));
    if (savedClick !== null) {
      return savedClick;
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("saved-click", JSON.stringify(click));
  }, [click]);

  const updateFeedback = (feedbackType) => {
    setClick((clicks) => ({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1,
    }));
  };

  const totalFeedback = click.good + click.neutral + click.bad;

  const resetFunction = () => {
    setClick({ good: 0, neutral: 0, bad: 0 });
  };

  const positivePercent = Math.round((click.good / totalFeedback) * 100);

  return (
    <div className={css.container}>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        click={click}
        totalFeedback={totalFeedback}
        resetFunction={resetFunction}
      />
      {totalFeedback > 0 ? (
        <Feedback
          click={click}
          totalFeedback={totalFeedback}
          positivePercent={positivePercent}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
