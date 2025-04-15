type UserCardProps = {
  name: string;
  email: string;
};

export const UserCard: React.FC<UserCardProps> = ({ name, email }) => (
  <div>
    <h3>{name}</h3>
    <p>{email}</p>
  </div>
);