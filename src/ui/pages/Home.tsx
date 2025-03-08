import Grid from '../components/Grid';
import ProfileCard from '../components/ProfileCard';

const Home = () => {
  const profiles = [
    {
      name: 'Sarah Johnson',
      keySkills: [
        { name: 'UI/UX Design', value: 85 },
        { name: 'Front-end Development', value: 92 },
        { name: 'JavaScript', value: 88 },
      ]
    },
    {
      name: 'Michael Lee',
      keySkills: [
        { name: 'Project Management', value: 94 },
        { name: 'Team Leadership', value: 89 },
        { name: 'Agile Methodology', value: 93 },
      ]
    },
    {
      name: 'Emily Davis',
      keySkills: [
        { name: 'Data Analysis', value: 91 },
        { name: 'Machine Learning', value: 85 },
        { name: 'Python', value: 88 },
      ]
    },
    {
      name: 'James Smith',
      keySkills: [
        { name: 'DevOps', value: 93 },
        { name: 'Cloud Computing', value: 90 },
        { name: 'AWS', value: 92 },
      ]
    },
    {
      name: 'Olivia Brown',
      keySkills: [
        { name: 'Digital Marketing', value: 88 },
        { name: 'SEO Optimization', value: 92 },
        { name: 'Content Strategy', value: 85 },
      ]
    },
    {
      name: 'Sarah Johnson',
      keySkills: [
        { name: 'UI/UX Design', value: 85 },
        { name: 'Front-end Development', value: 92 },
        { name: 'JavaScript', value: 88 },
      ]
    },
    {
      name: 'Michael Lee',
      keySkills: [
        { name: 'Project Management', value: 94 },
        { name: 'Team Leadership', value: 89 },
        { name: 'Agile Methodology', value: 93 },
      ]
    },
    {
      name: 'Emily Davis',
      keySkills: [
        { name: 'Data Analysis', value: 91 },
        { name: 'Machine Learning', value: 85 },
        { name: 'Python', value: 88 },
      ]
    },
    {
      name: 'James Smith',
      keySkills: [
        { name: 'DevOps', value: 93 },
        { name: 'Cloud Computing', value: 90 },
        { name: 'AWS', value: 92 },
      ]
    },
    {
      name: 'Olivia Brown',
      keySkills: [
        { name: 'Digital Marketing', value: 88 },
        { name: 'SEO Optimization', value: 92 },
        { name: 'Content Strategy', value: 85 },
      ]
    }
  ];  

  return (
    <div className='h-full flex flex-col items-center text-center'>
      <h1 className='my-6 text-5xl font-extrabold'>Web Chef Skill Sheets</h1>
      <Grid>
        {profiles.map((profile, index) => (
          <ProfileCard key={index} name={profile.name} keySkills={profile.keySkills} />
        ))}
      </Grid>
    </div>
  );
};

export default Home;
