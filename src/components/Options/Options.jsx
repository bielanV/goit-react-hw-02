const Options = ({ updateFeedback, review, resetFeedBacks }) => {
  return (
    <div>
      <button onClick={() => updateFeedback('good')}>good</button>
      <button onClick={() => updateFeedback('neutral')}>neutral</button>
      <button onClick={() => updateFeedback('bad')}>bad</button>
      {review.good + review.neutral + review.bad > 0 && (
        <button onClick={() => resetFeedBacks()}>Reset</button>
      )}
    </div>
  );
};

export default Options;
