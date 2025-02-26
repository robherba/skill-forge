import { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import useAuthContext, { AuthContextType } from '../hooks/use-auth-context';

const Login = () => {
  const [uuid, setUuid] = useState<string>('');
  const { setUser } = useAuthContext();
  // const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUuid(value);

    // Permite que solo el formato UUID sea aceptado
    // const regex = /^[0-9a-f]*$/i; // Permite solo caracteres válidos para UUID (hexadecimales)

    // // Asegúrate de que el valor no exceda los 36 caracteres del UUID (incluyendo los guiones)
    // if (value.length <= 36 && regex.test(value)) {
    //   // Insertar los guiones en las posiciones correctas de un UUID
    //   const formattedValue = formatUUID(value);
    //   setUuid(formattedValue);
    //   setError('');
    // } else {
    //   setError('El formato del UUID no es válido.');
    // }
  };

  // // // Formatea el valor del UUID insertando los guiones en las posiciones correctas
  // // const formatUUID = (value: string): string => {
  // //   const parts = [
  // //     value.slice(0, 8),
  // //     value.slice(8, 12),
  // //     value.slice(12, 16),
  // //     value.slice(16, 20),
  // //     value.slice(20, 36),
  // //   ];

  // //   return parts.filter(Boolean).join('-');
  // // };

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
        <a
          href="https://coda.io/account"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 underline"
        >
          Coda account settings
        </a>.
      </p>
      <div className='w-full max-w-md'>
        <Input placeholder="Enter your Coda API Key" color='cornflower' className='w-full px-6' value={uuid} onChange={handleChange} />
        <Button className='mt-10 px-6 w-fit mx-auto' color='light-green'onClick={() => void submitHandler()} >Get Access</Button>
        {/* { error && <p style={{ color: 'red' }}>{error}</p> } */}
      </div>
    </div>
  );
};

export default Login;
