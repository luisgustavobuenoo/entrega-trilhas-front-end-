import { useEffect, useState } from 'react';
import { UserCard } from './UserCard';

export const UserContainer = () => {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    // fetch user...
    setUser({ name: 'Maria', email: 'maria@email.com' });
  }, []);

  if (!user) return <div>Loading...</div>;

  return <UserCard name={user.name} email={user.email} />;
};