import React from "react";

function QuestionItem({ question, onDeleteQuestion, onChangeCorrectAnswer }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDeleteQuestion(){
    fetch(`http://localhost:4000/questions/${id}`,{
      method: "DELETE"
    })
    .then(r=>r.json())
    .then(()=>onDeleteQuestion({id}))
  }

  function handleChangeCorrectAnswer(e){
    fetch(`http://localhost:4000/questions/${id}`,{
      method: "PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({"correctIndex":e.target.value})
    })
    .then(r=>r.json())
    .then((data)=>onChangeCorrectAnswer(data))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleChangeCorrectAnswer}>{options}</select>
      </label>
      <button onClick={handleDeleteQuestion}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
