import useAuthContext from '../hooks/use-auth-context';

const Profile = () => {
  const { user: userData } = useAuthContext();

  return (
    <div className='h-full flex flex-col items-center text-center'>
      <img src={userData?.picture || ''} className='w-20 h-20 rounded-full border-[var(--border)] border-2 shadow-[4px_4px_0px_black]' />
      <h1 className='my-6 text-4xl font-extrabold'>{userData?.name}</h1>
    </div>
  );
};

export default Profile;
