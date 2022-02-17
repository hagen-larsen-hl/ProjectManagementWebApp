import { Task } from './task';

export const Tasks = ({ tasks }) => {
  return (
    <div className="flex-1">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};
