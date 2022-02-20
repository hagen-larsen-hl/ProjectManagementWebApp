import { Button } from '../common/button';
import { BlueButton } from '../common/blue_button';
import { RedButton } from '../common/red_button';

const updateTask = async (task, newStatus) => {
  console.log(task);
  task.status = newStatus;
  console.log(task);
  // const taskBody = {
  //   userId: task.userId,
  //   title: task.title,
  //   description: task.description,
  //   timeEstimation: task.timeEstimation,
  //   status: newStatus,
  //   projectId: task.projectId,
  // };
  // console.log(`/projects/${task.projectId}/tasks`);
  // const { updatedTask } = await api.post(`/projects/${task.projectId}/tasks`, taskBody);
  // console.log(updatedTask);
  // setTasks([task, ...tasks]);
};

export const Task = ({ task }) => {
  return (
    <div className="flex-col w-fit p-4 m-4 rp-10 border-2 rounded-md">
      <strong className="break-words">{task.title}</strong>
      <p className="break-words">{task.description}</p>
      <p>Time: {task.timeEstimation}</p>
      <p>Status: {task.status}</p>
      <div className="py-2">
        <RedButton onClick={() => console.log('Delete stub')}>Delete</RedButton>
        <Button onClick={() => console.log('Assign to me!')}>Assign to me</Button>
        {task.status === 'Incomplete' ? (
          <BlueButton onClick={() => (task.status = 'Done')}>Mark Done</BlueButton>
        ) : (
          <BlueButton onClick={() => console.log('mark as Incomplete')}>Mark Incomplete</BlueButton>
        )}
      </div>
    </div>
  );
};
