import { useState, useContext, useEffect } from 'react';
import { ApiContext } from '../../utils/api_context';
import { PageHeader } from '../common/page_header';

export const Admin = () => {
  const [users, setUsers] = useState([]);
  const api = useContext(ApiContext);

  useEffect(async () => {
    const { users } = await api.get('/users');
    setUsers(users);
  }, []);

  return (
    <div>
      <PageHeader />
      <div className="p-4 m-4 border-2">
        <h2 className="text-3xl">Users</h2>
        {users.map((user) => (
          <div key={user.id}>
            {user.firstName} {user.lastName}
          </div>
        ))}
      </div>
    </div>
  );
};
