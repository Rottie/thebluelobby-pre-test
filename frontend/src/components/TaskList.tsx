import React from 'react';

interface Task {
  id: number;
  description: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (taskId: number) => void;
  onDeleteTask: (taskId: number) => void;
}

function TaskList({ tasks, onToggleComplete, onDeleteTask }: TaskListProps): JSX.Element {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleComplete(task.id)}
          />
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.description}
          </span>
          <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
