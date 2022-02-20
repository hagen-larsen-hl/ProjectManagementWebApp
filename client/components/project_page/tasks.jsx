import { Task } from './task';

export const Tasks = ({ tasks }) => {
  return (
    <div className="flex-auto">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};
