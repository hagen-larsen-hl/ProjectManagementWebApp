import { useNavigate } from 'react-router-dom';
import { Button } from '../common/button';

export const Project = ({ project, deleteProject }) => {
  const navigate = useNavigate();

  return (
    <div className="flex border-2 rounded m-4 p-4">
      <div className="w-1/2">
        <strong>Project Name: </strong>
        <br />
        {project.name}
        <div className="py-2">
          <Button onClick={() => navigate(`/project/${project.id}`)}>Open</Button>
          <Button onClick={() => deleteProject(project)}>Delete</Button>
        </div>
      </div>
      <div className="w-1/2">
        <strong>Add Member: </strong>
        <input className="border-2 mb-2" type="text" />
        <Button>Add</Button>
      </div>
    </div>
  );
};
