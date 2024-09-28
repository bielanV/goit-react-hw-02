import { useState, useEffect } from 'react';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification ';

const App = () => {
  const [review, setReview] = useState(() => {
    const val = localStorage.getItem('countValue');
    return val ? JSON.parse(val) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem('countValue', JSON.stringify(review));
  }, [review]);

  const updateFeedback = (feedbackType) => {
    setReview({ ...review, [feedbackType]: review[feedbackType] + 1 });

    // if (item === 'good') {
    //   setReview({ ...review, good: review.good + 1 });
    // }
    // if (item === 'neutral') {
    //   setReview({ ...review, neutral: review.neutral + 1 });
    // }
    // if (item === 'bad') {
    //   setReview({ ...review, bad: review.bad + 1 });
    // }
  };

  const resetFeedBacks = () => {
    setReview({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        review={review}
        resetFeedBacks={resetFeedBacks}
      />
      {review.good + review.neutral + review.bad > 0 ? (
        <Feedback review={review} />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
