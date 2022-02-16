import { Button } from '../common/button';

export const Project = ({ project, deleteProject }) => {
  return (
    <div className="border-2 rounded m-4 p-4">
      <strong>Project Name: </strong>
      {project.name}
      <div className="py-2">
        <Button onClick={() => deleteProject(project)}>Delete</Button>
      </div>
    </div>
  );
};
