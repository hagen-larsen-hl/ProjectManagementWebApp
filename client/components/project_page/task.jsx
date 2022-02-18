import { Button } from '../common/button';

export const Task = ({ task }) => {
  return (
    <div className="border-2 rounded m-4 p-4">
      <strong>Task Name: </strong>
      {task.title}
      {task.description}
      {task.timeEstimation}
      {task.status}
      <div className="py-2">
        <Button onClick={() => console.log('Assign to me!')}>Assign to me</Button>
      </div>
    </div>
  );
};
