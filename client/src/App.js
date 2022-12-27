import React, { Component } from "react";
export default class App extends Component {
  state = {
    // 속성명: 속성값
    // 할일 목록 Mock data
    todoData: [
      { id: 1, title: "할일 1", completed: false },
      { id: 2, title: "할일 2", completed: false },
      { id: 3, title: "할일 3", completed: false },
      { id: 4, title: "할일 4", completed: false },
    ],
    todoValue: "",
  };

  btnStyle = {
    color: "#000",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };
  getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  deleteClick = (id) => {
    // 클릭된 ID 와 다른 요소들만 걸러서 새로운 배열 생성
    const nowTodo = this.state.todoData.filter((item) => item.id !== id);
    // console.log("클릭", nowTodo);
    this.setState({ todoData: nowTodo });
  };

  toggleClick = (id) => {
    // map을 통해서 this.state.todoDate의 complete를 업데이트 해보자
    const updateTodo = this.state.todoData.map((item) => {
      if (item.id === id) {
        // true면 false로 false면 true로 변경
        item.completed = !item.completed;
      }
      return item;
    });
    this.setState({ todoData: updateTodo });
  };

  changeTodoValue = (event) => {
    // console.log(event.target.value);
    this.setState({ todoValue: event.target.value });
  };
  addTodo = (event) => {
    // 웹브라우저 새로고침을 하면 안됨으로 막아줌
    event.preventDefault();
    // { id: 4, title: '할일 4',completed: false}

    // todoData는 배열이고 배열의 요소들은 위처럼 구성해야하니까 {}로 만들어줌.
    // 그래야 .map을 통해서 규칙적인 jsx 를 리턴할 수 있으니까.
    const addTodo = {
      id: Date.now(), // id 값은 배열.map의 key로 활용예정, unique 값 만들려고
      title: this.state.todoValue, // 할일 입력창의 내용을 추가
      completed: false, // 할일이 추가될때 아직 완료한 것은 아니므로 false 초기화
    };
    // 새로운 할일을 일단 복사하고, 복사된 배열에 추가하여 업데이트
    // 기존 할일을 Destructuring하여 복사본 만듦
    this.setState({ todoData: [...this.state.todoData, addTodo] });
    // 새로운 할일을 추가했으므로 내용입력창의 글자를 초기화
    this.setState({ todoValue: "" });
  };

  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할일 목록</h1>
          </div>

          {this.state.todoData.map((item) => (
            <div style={this.getStyle(item.completed)} key={item.id}>
              <input
                type="checkbox"
                defaultChecked={item.completed}
                onChange={() => this.toggleClick(item.id)}
              />
              {item.title}
              <botton
                style={this.btnStyle}
                onClick={() => this.deleteClick(item.id)}
              >
                x
              </botton>
            </div>
          ))}

          <form style={{ display: "flex" }} onSubmit={this.addTodoSubmit}>
            <input
              style={{ flex: "10" }}
              type="text"
              placeholder="할 일을 입력하시오."
              value={this.state.todoValue}
              onChange={this.changeTodoValue}
            />
            <input style={{ flex: "1" }} type="submit" onClick={this.addTodo} />
          </form>
        </div>
      </div>
    );
  }
}
