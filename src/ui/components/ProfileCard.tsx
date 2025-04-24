import { Terminal } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { GroupedSkills } from '@/electron/api/api-coda';

interface ProfileCardProps {
  name: string;
  skills: GroupedSkills;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, skills }) => {
  const [topCategories, setTopCategories] = useState<string[]>([]);
  const [progressByCategory, setProgressByCategory] = useState<Map<string, number>>(new Map());

  useEffect(() => {
    const counts: [string, number, number][] = Object.entries(skills).map(
      ([category, skillGroup]) => {
        const skillList = Object.values(skillGroup);
        const goodSkills = skillList.reduce((acc, skill) => {
          const level = skill.level.toLowerCase();
          if (level === 'advanced') return acc + 100;
          if (level === 'experienced') return acc + 66;
          if (level === 'exposed') return acc + 33;
          return acc;
        }, 0);
        return [category, goodSkills, skillList.length];
      }
    );

    const sorted = counts
      .sort((a, b) => b[1] / b[2] - a[1] / a[2])
      .slice(0, 3);

    setTopCategories(sorted.map(([category]) => category));

    const progressMap = new Map<string, number>();
    sorted.forEach(([category, good, total]) => {
      const percentage = Math.round(good / total);
      progressMap.set(category, percentage);
    });

    setProgressByCategory(progressMap);
  }, [skills]);

  const sortedTopCategories = [...topCategories].sort((a, b) => {
    const aPercent = progressByCategory.get(a) ?? 0;
    const bPercent = progressByCategory.get(b) ?? 0;
    return bPercent - aPercent;
  });

  return (
    <div className="flex gap-6 px-8 py-4 shadow-lg rounded-lg bg-[var(--bg)] border-3 border-[var(--border)]">
      <Terminal className="h-6 w-6 mt-1" />
      <div className="flex flex-col items-start flex-1">
        <h2 className="text-2xl font-semibold mb-4 text-start">{name}</h2>
        <div className="w-full">
          {sortedTopCategories.map((category, index) => {
            const percent = progressByCategory.get(category) ?? 0;
            return (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-lg">{category}</span>
                  <span className="text-lg">{percent}%</span>
                </div>
                <div className="w-full bg-[var(--lilac)] rounded-full h-4 shadow-inner border-4 relative border-[var(--border)]">
                  <div
                    className="bg-[var(--mint)] h-2 border-3 rounded-full absolute left-[-3px] top-[-3px] border-[var(--border)] box-content"
                    style={{
                      width: `${percent}%`,
                      transition: 'width 1s ease-out',
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
