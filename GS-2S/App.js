import Routes from './App/routes';
import { AuthProvider } from './App/context/AuthContext';

export default function App() {
 
  return (
    <AuthProvider>
      <Routes/>
    </AuthProvider>
  );
}