import React from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({questions, onDeleteQuestion, onChangeCorrectAnswer}) {

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question)=><QuestionItem 
                                        key={question.id} 
                                        question={question} 
                                        onDeleteQuestion={onDeleteQuestion}
                                        onChangeCorrectAnswer={onChangeCorrectAnswer}
                                      />
                                    )}
        </ul>
    </section>
  );
}

export default QuestionList;
