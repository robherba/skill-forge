import { Skill } from '@/electron/api/api-coda';
import React from 'react';
import Link from './Link';

interface SkillTableProps {
  category: string;
  skills: Record<string, Skill>;
}

function renderWithLinks(text: string) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);

  return parts.map((part, index) =>
    urlRegex.test(part) ? (
			<Link key={index} href={part} className="contents break-words" external>{part}</Link>
    ) : (
      <span key={index}>{part}</span>
    )
  );
}

const SkillTable: React.FC<SkillTableProps> = ({ category, skills }) => {
  return (
    <div className="mb-8 w-full">
      <h2 className="text-2xl font-bold mb-4 text-left">{category}</h2>
      <div className="border-black border-2 rounded-md bg-[var(--bg)]">
        <table className="w-full table-auto border-collapse text-left">
          <thead>
            <tr className="bg-[var(--lilac)] ">
              <th className="px-4 py-2">Skill</th>
              <th className="px-4 py-2 w-[150px]">Level</th>
              <th className="px-4 py-2 w-[150px]">Notes</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(skills).map(([_key, skill], idx) => (
              <tr key={idx} className="border-b">
                <td className="px-4 py-2">{skill.name}</td>
                <td className="px-4 py-2 w-[200px] capitalize">{skill.level}</td>
                <td className="px-4 py-2 w-[400px] max-w-[400px]">{renderWithLinks(skill.notes)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SkillTable;
