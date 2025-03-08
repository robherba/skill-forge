import React, { useEffect, useState } from 'react';
import { Terminal } from 'lucide-react';

interface KeySkill {
  name: string;
  value: number;
  progress?: number;
}

interface ProfileCardProps {
  name: string;
  keySkills: KeySkill[];
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, keySkills }) => {
  const [animatedSkills, setAnimatedSkills] = useState<KeySkill[]>([]);

  useEffect(() => {
    // Inicia las barras de progreso animadas
    setAnimatedSkills(keySkills.map(skill => ({
      ...skill,
      progress: 0,
    })));

    keySkills.forEach((_, index) => {
      setTimeout(() => {
        setAnimatedSkills(prevSkills => {
          const newSkills = [...prevSkills];
          newSkills[index].progress = newSkills[index].value;
          return newSkills;
        });
      }, 100 * index);
    });
  }, [keySkills]);

  return (
    <div className="flex gap-6 px-8 py-4 shadow-lg rounded-lg bg-[var(--bg)] border-3 border-[var(--border)]">
      <Terminal className="h-6 w-6 mt-1" />
      <div className='flex flex-col items-start flex-1'>
        <h2 className="text-2xl font-semibold mb-4">{name}</h2>
        <div className='w-full'>
          {animatedSkills.map((skill, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-lg">{skill.name}</span>
                <span className="text-lg">{skill.progress}%</span>
              </div>
              <div className="w-full bg-[var(--lilac)] rounded-full h-4">
                <div
                  className="bg-[var(--mint)] h-4 rounded-full"
                  style={{ width: `${skill.progress}%`, transition: 'width 1s ease-out' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
