import { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import useAuthContext from '../hooks/use-auth-context';
import Link from '../components/Link';

const Login = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [uuid, setUuid] = useState<string>('');
  const { setUser } = useAuthContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUuid(value);
  };

  const submitHandler = async () => {
    if (uuid) {
      const response = await window.api.whoAmI(uuid);
      if (response.status === 200 && response.data) {
        setUser(response.data);
      }
    }
  };

  return (
    <div className='h-full flex flex-col items-center justify-center text-center'>
      <h1 className='mb-6 text-5xl font-extrabold'>Access Your Account</h1>
      <p className='mb-8 text-md text-gray-500 max-w-lg'>
        Enter your <strong>Coda API Key</strong> to sign in and manage your data.
        If you don&apos;t have an API key yet, you can generate one in your
        <Link href="https://coda.io/account" external>
          Coda account settings
        </Link>.
      </p>
      <div className='w-full max-w-md'>
        <Input placeholder="Enter your Coda API Key" color='cornflower' className='w-full px-6' value={uuid} onChange={handleChange} />
        <Button className='mt-10 px-6 w-fit mx-auto' color='light-green'onClick={() => void submitHandler()} >
          Get Access {loading && 'cargando...'}
        </Button>
        {/* { error && <p style={{ color: 'red' }}>{error}</p> } */}
      </div>
    </div>
  );
};

export default Login;
