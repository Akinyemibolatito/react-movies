import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('All fields are required');
      return;
    }
    const res = await fetch(`http://localhost:3001/users?email=${email}&password=${password}`);
    const users = await res.json();
    if (users.length === 0) {
      setError('Invalid email or password');
      return;
    }
    login(users[0]);
    navigate('/');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px' }}>
      <h1>Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <input
            placeholder="Email"
            style={{ width: '100%', padding: '10px', fontSize: '16px' }}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            placeholder="Password"
            type="password"
            style={{ width: '100%', padding: '10px', fontSize: '16px' }}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" style={{
          width: '100%', padding: '10px',
          backgroundColor: '#032541', color: 'white',
          fontSize: '16px', border: 'none', borderRadius: '8px', cursor: 'pointer'
        }}>
          Login
        </button>
      </form>
      <p style={{ marginTop: '10px' }}>No account? <Link to="/register">Register</Link></p>
    </div>
  );
}

export default Login;