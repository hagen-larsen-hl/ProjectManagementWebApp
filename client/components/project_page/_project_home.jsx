import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { ApiContext } from '../../utils/api_context';
import { AuthContext } from '../../utils/auth_context';
import { RolesContext } from '../../utils/roles_context';
import { Button } from '../common/button';
import { Tasks } from './tasks';
import { useParams } from 'react-router-dom';

export const ProjectHome = () => {
  const [, setAuthToken] = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskEstimation, setTaskEstimation] = useState('');
  const taskStatus = useState('To do');
  const api = useContext(ApiContext);
  const roles = useContext(RolesContext);
  const params = useParams();

  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  useEffect(async () => {
    const res = await api.get('/users/me');
    setUser(res.user);
    const { tasks } = await api.get(`/projects/${params.id}/tasks`);
    setTasks(tasks);
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

  const saveTask = async () => {
    const taskBody = {
      title: taskTitle,
      description: taskDescription,
      timeEstimation: taskEstimation,
      status: taskStatus,
      projectId: params.id,
    };
    const { task } = await api.post(`/projects/${params.id}/tasks`, taskBody);
    console.log(task);
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <div className="p-4 m-4 border-2">
        <Button type="button" onClick={logout}>
          Logout
        </Button>
        {roles.includes('admin') && (
          <Button type="button" onClick={() => navigate('/admin')}>
            Admin
          </Button>
        )}
      </div>
      <div className="flex flex-col w-1/2 p-4 m-4 border-2">
        <h3 className="text-xl p-2">Create New Task</h3>
        <span className="p-2">
          <strong>Title: </strong>
          <input className="border-2" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} />
        </span>
        <span className="p-2">
          <strong>Description: </strong>
          <input className="border-2" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
        </span>
        <span className="p-2">
          <strong>Time Estimation: </strong>
          <input className="border-2" value={taskEstimation} onChange={(e) => setTaskEstimation(e.target.value)} />
        </span>
        <Button onClick={saveTask}>Save</Button>
      </div>
      <Tasks tasks={tasks} />
    </div>
  );
};
