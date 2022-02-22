import { useNavigate } from 'react-router-dom';
import { Button } from '../common/button';

export const MemberProject = ({ project }) => {
  const navigate = useNavigate();

  return (
    <div className="flex border-2 rounded m-4 p-4">
      <div className="w-1/2">
        <strong>Project Name: </strong>
        <br />
        {project.name}
        <div className="py-2">
          <Button onClick={() => navigate(`/project/${project.id}`)}>Open</Button>
        </div>
      </div>
    </div>
  );
};
