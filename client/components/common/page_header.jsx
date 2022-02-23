import { useContext } from 'react';
import { RolesContext } from '../../utils/roles_context';
import { useNavigate } from 'react-router';
import { ButtonBig } from '../common/button_big';

export const PageHeader = ({ logout }) => {
  const roles = useContext(RolesContext);
  const navigate = useNavigate();

  return (
    <div className="p-4 m-4 border-2 rounded-md">
      {logout && (
        <ButtonBig type="button" onClick={logout}>
          Logout
        </ButtonBig>
      )}
      <ButtonBig type="button" onClick={() => navigate('/')}>
        Projects
      </ButtonBig>
      {roles !== undefined && roles.includes('admin') && (
        <ButtonBig type="button" onClick={() => navigate('/admin')}>
          Admin
        </ButtonBig>
      )}
    </div>
  );
};
