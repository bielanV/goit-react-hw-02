const Feedback = ({ review, totalFeedback, positiveFeedback }) => {
  return (
    <ul>
      <li>Good {review.good}</li>
      <li>Neutral {review.neutral}</li>
      <li>Bad {review.bad}</li>
      <li>Total {totalFeedback}</li>
      <li> Positive - {positiveFeedback}%</li>
    </ul>
  );
};

export default Feedback;
