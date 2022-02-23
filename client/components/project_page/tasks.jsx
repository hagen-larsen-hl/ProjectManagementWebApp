import { Task } from './task';

export const Tasks = ({
  tasks,
  setIncompleteTasks,
  setDoneTasks,
  doneTasks,
  incompleteTasks,
  deleteTask,
  user,
  projectMembers,
}) => {
  return (
    <div className="flex-auto">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          setIncompleteTasks={setIncompleteTasks}
          setDoneTasks={setDoneTasks}
          doneTasks={doneTasks}
          incompleteTasks={incompleteTasks}
          deleteTask={deleteTask}
          user={user}
          projectMembers={projectMembers}
        />
      ))}
    </div>
  );
};
