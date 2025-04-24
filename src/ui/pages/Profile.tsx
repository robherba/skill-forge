import { useEffect, useState } from 'react';
import useAuthContext from '../hooks/use-auth-context';
import { GroupedSkills } from '@/electron/api/api-coda';
import SkillTable from '../components/SkillTable';

const Profile = () => {
  const { user: userData } = useAuthContext();
  const [userSkills, setUserSkills] = useState<{ skills: GroupedSkills } | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const { status, data } = await window.api.webChefSkillSheet();

      if (status === 200 && data) {
        const found = data.get(userData?.name || '');
        if (found) {
          setUserSkills(found);
        }
      }
    };

    fetchUsers();
  }, [userData]);

  return (
    <div className='h-full flex flex-col items-center text-center px-4'>
      <h1 className='my-6 text-4xl font-extrabold'>{userData?.name}</h1>

      {userSkills && (
        <div className="mt-8 w-full flex flex-col items-center gap-12">
          {Object.entries(userSkills.skills).map(([category, skillGroup]) => (
            <SkillTable category={category} skills={skillGroup}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default Profile;
