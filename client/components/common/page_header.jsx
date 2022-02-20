import { useContext, useEffect, useState } from 'react';
import { RolesContext } from '../../utils/roles_context';
import { useNavigate } from 'react-router';
import { Button } from '../common/button';

export const PageHeader = () => {
  const roles = useContext(RolesContext);
  const navigate = useNavigate();

  const logout = async () => {
    const res = await api.del('/sessions');
    if (res.success) {
      setAuthToken(null);
    }
  };

  return (
    <div className="p-4 m-4 border-2 rounded-md">
      <Button type="button" onClick={logout}>
        Logout
      </Button>
      <Button type="button" onClick={() => navigate('/')}>
        Projects
      </Button>
      {roles.includes('admin') && (
        <Button type="button" onClick={() => navigate('/admin')}>
          Admin
        </Button>
      )}
    </div>
  );
};
