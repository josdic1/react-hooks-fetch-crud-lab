import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteQuestion }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((q) => (
          <QuestionItem key={q.id} question={q} onDelete={onDeleteQuestion} />
        ))}
      </ul>
    </section>
  );
}


export default QuestionList;
