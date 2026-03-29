import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      setError('All fields are required');
      return;
    }
    const res = await fetch('http://localhost:3001/users');
    const users = await res.json();
    if (users.find(u => u.email === form.email)) {
      setError('Email already registered');
      return;
    }
    await fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    navigate('/login');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px' }}>
      <h1>Register</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <input
            placeholder="Name"
            style={{ width: '100%', padding: '10px', fontSize: '16px' }}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            placeholder="Email"
            style={{ width: '100%', padding: '10px', fontSize: '16px' }}
            onChange={e => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            placeholder="Password"
            type="password"
            style={{ width: '100%', padding: '10px', fontSize: '16px' }}
            onChange={e => setForm({ ...form, password: e.target.value })}
          />
        </div>
        <button type="submit" style={{
          width: '100%', padding: '10px',
          backgroundColor: '#032541', color: 'white',
          fontSize: '16px', border: 'none', borderRadius: '8px', cursor: 'pointer'
        }}>
          Register
        </button>
      </form>
      <p style={{ marginTop: '10px' }}>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default Register;