import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../common/button';
import { ApiContext } from '../../utils/api_context';

export const Project = ({ project, deleteProject }) => {
  const navigate = useNavigate();
  const api = useContext(ApiContext);
  const [email, setEmail] = useState('');

  const saveProjectMember = async () => {
    const projectMemberBody = {
      email: email,
      projectId: project.id,
    };
    const { projectMember } = await api.post('/members', projectMemberBody);
    return { projectMember };
  };

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
        <input className="border-2 mb-2" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Button onClick={saveProjectMember}>Add</Button>
      </div>
    </div>
  );
};
