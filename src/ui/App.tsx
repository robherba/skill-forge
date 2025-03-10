import { AuthProvider } from './hooks/auth-context-provider';
import Routes from './Routes';

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
