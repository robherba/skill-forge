import Button from '../components/Button';
import Input from '../components/Input';

const Login = () => {
  return (
    <div className='h-full flex flex-col items-center justify-center text-center'>
      <h1 className='mb-6 text-5xl font-extrabold'>Access Your Account</h1>
      <p className='mb-8 text-md text-gray-500 max-w-lg'>
        Enter your <strong>Coda API Key</strong> to sign in and manage your data.  
        If you don't have an API key yet, you can generate one in your  
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
        <Input placeholder="Enter your Coda API Key" color='cornflower' className='w-full px-6' />
        <Button className='mt-10 px-6 w-fit mx-auto' color='light-green'>Get Access</Button>
      </div>
    </div>
  );
};

export default Login;
