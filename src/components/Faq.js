import React from 'react';
import Question from './Question';

const Faq = props => {

  let questions = props.data.map(question=>{

    return(
      <Question
        key= {question.id}
        text = {question.question}
        answer = {question.answer}
      />
    );
  });

  return (
    <div>
      {questions}
    </div>
  );
};

export default Faq;
