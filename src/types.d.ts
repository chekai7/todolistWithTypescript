type Todo = {
  text: string
  complete: boolean
}
type ToggleTodo = (selectTodo: Todo) => void

type AddTodo = (newTodo: string) => void

interface TodoListProps {
  todo: Todo
  toggleTodo: ToggleTodo
}
