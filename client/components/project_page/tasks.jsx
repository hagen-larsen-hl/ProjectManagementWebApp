import { Task } from './task';

export const Tasks = ({ tasks, setIncompleteTasks, setDoneTasks, allTasks }) => {
  return (
    <div className="flex-auto">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          setIncompleteTasks={setIncompleteTasks}
          setDoneTasks={setDoneTasks}
          allTasks={allTasks}
        />
      ))}
    </div>
  );
};
