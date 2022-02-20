import { useContext, useEffect, useState } from 'react';
import { RolesContext } from '../../utils/roles_context';
import { useNavigate } from 'react-router';
import { ButtonBig } from '../common/button_big';

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
      <ButtonBig type="button" onClick={logout}>
        Logout
      </ButtonBig>
      <ButtonBig type="button" onClick={() => navigate('/')}>
        Projects
      </ButtonBig>
      {roles.includes('admin') && (
        <ButtonBig type="button" onClick={() => navigate('/admin')}>
          Admin
        </ButtonBig>
      )}
    </div>
  );
};
