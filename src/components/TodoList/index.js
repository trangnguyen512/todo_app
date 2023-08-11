import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/actions";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { todosRemaining } from "../../redux/selector";

export default function TodoList() {
  const dispatch = useDispatch();
  const todoList = useSelector(todosRemaining);
  // const searchText = useSelector(searchTextSelector);
  const [todoName, settodoName] = useState("");
  const [todoPriority, setTodoPriority] = useState("Medium");

  const handleAddButtonClick = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todoName,
        priority: todoPriority,
        completed: false,
      })
    );
    settodoName("");
    setTodoPriority("Medium");
  };

  const handleInputChange = (e) => {
    settodoName(e.target.value);
  };

  const handlePriorityChange = (value) => {
    setTodoPriority(value);
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => {
          return (
            <Todo
              key={todo.id}
              name={todo.name}
              prioriry={todo.priority}
              completed={todo.completed}
            />
          );
        })}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select
            defaultValue="Medium"
            value={todoPriority}
            onChange={handlePriorityChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
