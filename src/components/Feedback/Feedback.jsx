const Feedback = ({ review }) => {
  return (
    <ul>
      <li>Good {review.good}</li>
      <li>Neutral {review.neutral}</li>
      <li>Bad {review.bad}</li>
      <li>Total {review.good + review.neutral + review.bad}</li>

      {review.good + review.neutral + review.bad > 0 && (
        <li>
          {' '}
          Positive -{' '}
          {Math.round(
            ((review.good + review.neutral) /
              (review.good + review.neutral + review.bad)) *
              100
          )}
          %
        </li>
      )}
    </ul>
  );
};

export default Feedback;
