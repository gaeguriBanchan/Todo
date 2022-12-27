import React from "react";

const List = ({ todoData, setTodoData }) => {
  const deleteClick = (id) => {
    // 클릭된 ID 와 다른 요소들만 걸러서 새로운 배열 생성
    const nowTodo = todoData.filter((item) => item.id !== id);
    // console.log("클릭", nowTodo);
    setTodoData(nowTodo);
  };
  const toggleClick = (id) => {
    // map을 통해서 todoDate의 complete를 업데이트 해보자
    const updateTodo = todoData.map((item) => {
      if (item.id === id) {
        // true면 false로 false면 true로 변경
        item.completed = !item.completed;
      }
      return item;
    });
    setTodoData(updateTodo);
  };

  return (
    <div>
      {todoData.map((item) => (
        <div key={item.id}>
          <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded">
            <div className="items-center">
              <input
                type="checkbox"
                defaultChecked={item.completed}
                onChange={() => toggleClick(item.id)}
              />
              {""}
              <span className={item.completed ? "line-through" : "none"}>
                {item.title}
              </span>
            </div>
            <div className="items-center">
              <botton onClick={() => deleteClick(item.id)}>x</botton>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
