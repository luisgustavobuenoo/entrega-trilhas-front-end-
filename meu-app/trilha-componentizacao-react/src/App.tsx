import { createContext, useContext } from 'react';
import { Dashboard } from './features/user/UserContainer';

const UserContext = createContext<{ name: string }>({ name: '' });

const UserName = () => {
  const { name } = useContext(UserContext);
  return <span>{name}</span>;
}

export const App = () => {
  return (
    <UserContext.Provider value={{ name: 'Maria' }}>
      <Dashboard />
    </UserContext.Provider>
  );
};