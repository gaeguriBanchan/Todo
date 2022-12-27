import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
export default function App() {
  const [todoData, setTodoData] = useState([
    { id: 1, title: "할일 1", completed: false },
    { id: 2, title: "할일 2", completed: false },
    { id: 3, title: "할일 3", completed: false },
    { id: 4, title: "할일 4", completed: false },
  ]);
  const [todoValue, setTodoValue] = useState("");

  const addTodoSubmit = (event) => {
    // 웹브라우저 새로고침을 하면 안됨으로 막아줌
    event.preventDefault();
    // { id: 4, title: '할일 4',completed: false}

    // todoData는 배열이고 배열의 요소들은 위처럼 구성해야하니까 {}로 만들어줌.
    // 그래야 .map을 통해서 규칙적인 jsx 를 리턴할 수 있으니까.
    const addTodo = {
      id: Date.now(), // id 값은 배열.map의 key로 활용예정, unique 값 만들려고
      title: todoValue, // 할일 입력창의 내용을 추가
      completed: false, // 할일이 추가될때 아직 완료한 것은 아니므로 false 초기화
    };
    // 새로운 할일을 일단 복사하고, 복사된 배열에 추가하여 업데이트
    // 기존 할일을 Destructuring하여 복사본 만듦
    setTodoData([...todoData, addTodo]);
    // 새로운 할일을 추가했으므로 내용입력창의 글자를 초기화
    setTodoValue("");
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-300">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-5xl">
        <div className="flex justify-between mb-3">
          <h1>할일 목록</h1>
        </div>
        <List todoData={todoData} setTodoData={setTodoData} />
        <Form
          todoValue={todoValue}
          setTodoValue={setTodoValue}
          addTodoSubmit={addTodoSubmit}
        />
      </div>
    </div>
  );
}
