import React, { useState } from 'react';
import type { GitHubUser } from './types/github';

export default function App() {
  const [username, setUsername] = useState<string>('');
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchGitHubUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username.trim()}`);
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('User not found. Please check the username.');
        }
        throw new Error('An error occurred while fetching user data.');
      }

      const data: GitHubUser = await response.json();
      setUser(data);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '24px' }}>GitHub Profile Search</h1>
      
      {/* Search Input & Button */}
      <form onSubmit={fetchGitHubUser} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ flex: 1, padding: '10px 14px', fontSize: '16px', borderRadius: '6px', border: '1px solid #ccc' }}
        />
        <button 
          type="submit" 
          disabled={loading}
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', borderRadius: '6px', backgroundColor: '#0969da', color: '#fff', border: 'none' }}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {/* Loading State */}
      {loading && <p style={{ textAlign: 'center' }}>Loading user details...</p>}

      {/* Error State */}
      {error && <p style={{ color: '#d93025', textAlign: 'center', fontWeight: 'bold' }}>{error}</p>}

      {/* User Profile Card */}
      {user && (
        <div style={{ border: '1px solid #e1e4e8', borderRadius: '8px', padding: '24px', textAlign: 'center', backgroundColor: '#f6f8fa' }}>
          <img 
            src={user.avatar_url} 
            alt={`${user.login}'s avatar`} 
            style={{ width: '120px', height: '120px', borderRadius: '50%', marginBottom: '15px' }} 
          />
          <h2 style={{ margin: '5px 0' }}>{user.name || user.login}</h2>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer" style={{ color: '#0969da', textDecoration: 'none', fontSize: '14px' }}>
            @{user.login}
          </a>
          <p style={{ margin: '15px 0', color: '#57606a' }}>
            {user.bio || 'This user has no bio.'}
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px', borderTop: '1px solid #d0d7de', paddingTop: '15px' }}>
            <div>
              <strong>Followers</strong>
              <div>{user.followers}</div>
            </div>
            <div>
              <strong>Following</strong>
              <div>{user.following}</div>
            </div>
            <div>
              <strong>Public Repos</strong>
              <div>{user.public_repos}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}