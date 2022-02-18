import { useNavigate } from 'react-router-dom';
import { Button } from '../common/button';

export const Project = ({ project, deleteProject }) => {
  const navigate = useNavigate();

  return (
    <div className="border-2 rounded m-4 p-4">
      <strong>Project Name: </strong>
      {project.name}
      <div className="py-2">
        <Button onClick={() => navigate(`/project/${project.id}`)}>Open</Button>
        <Button onClick={() => deleteProject(project)}>Delete</Button>
      </div>
    </div>
  );
};
