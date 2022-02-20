import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { ApiContext } from '../../utils/api_context';
import { AuthContext } from '../../utils/auth_context';
import { RolesContext } from '../../utils/roles_context';
import { Button } from '../common/button';
import { Projects } from './projects';
import { PageHeader } from '../common/page_header';

export const Home = () => {
  const [, setAuthToken] = useContext(AuthContext);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const api = useContext(ApiContext);
  const roles = useContext(RolesContext);

  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  useEffect(async () => {
    const res = await api.get('/users/me');
    setUser(res.user);
    const { projects } = await api.get('/projects');
    setProjects(projects);
    setLoading(false);
  }, []);

  const logout = async () => {
    const res = await api.del('/sessions');
    if (res.success) {
      setAuthToken(null);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const saveProject = async () => {
    const projectBody = {
      name: name,
    };
    const { project } = await api.post('/projects', projectBody);
    console.log(projects);
    setProjects([...projects, project]);
  };

  const deleteProject = async (project) => {
    const { success } = await api.del(`/projects/${project.id}`);
    if (success) {
      setProjects(projects.filter((p) => p !== project));
    } else {
      setErrorMessage('Deletion failed. Please refresh and try again.');
    }
  };

  console.log(projects);

  return (
    <div>
      <PageHeader />

      <div className="flex flex-col w-1/2 p-4 m-4 border-2">
        <h3 className="text-xl p-2">Create New Project</h3>
        <span className="p-2">
          <strong>Name: </strong>
          <input className="border-2" value={name} onChange={(e) => setName(e.target.value)} />
        </span>
        <Button onClick={saveProject}>Save</Button>
      </div>
      <Projects projects={projects} deleteProject={deleteProject} />
    </div>
  );
};
