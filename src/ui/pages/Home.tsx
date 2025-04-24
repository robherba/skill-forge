import { SkillMap } from "@/electron/api/api-coda";
import { useEffect, useMemo, useState } from "react";
import Grid from "../components/Grid";
import ProfileCard from "../components/ProfileCard";

const Home = () => {
  const [profiles, setProfiles] = useState<SkillMap>();

  useEffect(() => {
    const fetchUsers = async () => {
      const { status, data } = await window.api.webChefSkillSheet();

      if (status === 200 && data) {
        setProfiles(data);
      }
    };

    fetchUsers();
  }, []);

  const renderedProfiles = useMemo(() => (
    <Grid>
      {profiles
        ? Array.from(profiles).map(([name, data], index) => (
            <ProfileCard key={index} name={name} skills={data.skills} />
          ))
        : ''}
    </Grid>
  ), [profiles]);

  return (
    <div className="h-full flex flex-col items-center text-center">
      <h1 className="my-6 text-5xl font-extrabold">Web Chef Skill Sheets</h1>
      {renderedProfiles}
    </div>
  );
};

export default Home;
