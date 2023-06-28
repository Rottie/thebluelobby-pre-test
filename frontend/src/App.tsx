import React, { useState } from 'react';
import TaskList from './components/TaskList';

function App(): JSX.Element {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');

  const handleNewTaskChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewTask(e.target.value);
  };

  const handleAddTask = (): void => {
    if (newTask.trim() !== '') {
      const task: Task = {
        id: Date.now(),
        description: newTask,
        completed: false,
      };
      setTasks([...tasks, task]);
      setNewTask('');
    }
  };

  const handleToggleComplete = (taskId: number): void => {
    const updatedTasks: Task[] = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId: number): void => {
    const updatedTasks: Task[] = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={handleNewTaskChange}
          placeholder="Enter task description"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <TaskList
        tasks={tasks}
        onToggleComplete={handleToggleComplete}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;

