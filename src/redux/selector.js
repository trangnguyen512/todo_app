import { createSelector } from "reselect";

export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritiesSelector = (state) => state.filters.priorities;
export const todoListSelector = (state) => state.todoList;
// reselect
export const todosRemaining = createSelector(
  todoListSelector,
  filterStatusSelector,
  searchTextSelector,
  filterPrioritiesSelector,
  (todoList, status, searchText, priorities) => {
    if (!Array.isArray(priorities)) {
      priorities = []; // Khởi tạo priorities là một mảng rỗng nếu không phải là mảng
    }
    return todoList.filter((todo) => {
      if (status === "All") {
        return priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        (status !== "All" && status === "Completed"
          ? todo.completed
          : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priority) : true)
      );
    });
  }
);
