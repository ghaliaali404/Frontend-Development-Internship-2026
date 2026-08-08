import React, { useState } from 'react';
import type { PokemonData } from './types/pokemon';

export default function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPokemon = async (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchTerm.trim().toLowerCase();
    if (!query) return;

    setLoading(true);
    setError(null);
    setPokemon(null);

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Pokémon not found. Please check the name or ID.');
        }
        throw new Error('An error occurred while fetching Pokémon data.');
      }

      const data: PokemonData = await response.json();
      setPokemon(data);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch Pokémon');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#ef5350' }}>Pokémon Viewer</h1>

      {/* Search Input */}
      <form onSubmit={fetchPokemon} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Enter Pokémon name or ID (e.g., pikachu)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ flex: 1, padding: '10px 14px', fontSize: '16px', borderRadius: '6px', border: '1px solid #ccc' }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', borderRadius: '6px', backgroundColor: '#ef5350', color: '#fff', border: 'none', fontWeight: 'bold' }}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {/* Loading State */}
      {loading && <p style={{ textAlign: 'center' }}>Loading Pokémon details...</p>}

      {/* Error State */}
      {error && <p style={{ color: '#d93025', textAlign: 'center', fontWeight: 'bold' }}>{error}</p>}

      {/* Pokémon Display Card */}
      {pokemon && (
        <div style={{ border: '2px solid #ef5350', borderRadius: '12px', padding: '24px', textAlign: 'center', backgroundColor: '#fdfdfd' }}>
          <img
            src={pokemon.sprites.other?.['official-artwork']?.front_default || pokemon.sprites.front_default}
            alt={pokemon.name}
            style={{ width: '180px', height: '180px', objectFit: 'contain' }}
          />
          <h2 style={{ textTransform: 'capitalize', margin: '10px 0 5px 0' }}>
            {pokemon.name} <span style={{ color: '#888', fontSize: '18px' }}>#{pokemon.id}</span>
          </h2>

          {/* Types */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', margin: '10px 0 20px 0' }}>
            {pokemon.types.map((t) => (
              <span
                key={t.type.name}
                style={{
                  backgroundColor: '#ee6b6b',
                  color: '#fff',
                  padding: '4px 12px',
                  borderRadius: '16px',
                  fontSize: '14px',
                  textTransform: 'capitalize',
                }}
              >
                {t.type.name}
              </span>
            ))}
          </div>

          {/* Height and Weight */}
          <div style={{ display: 'flex', justifyContent: 'space-around', borderTop: '1px solid #eee', paddingTop: '15px' }}>
            <div>
              <strong style={{ color: '#555' }}>Height</strong>
              <div>{(pokemon.height / 10).toFixed(1)} m</div>
            </div>
            <div>
              <strong style={{ color: '#555' }}>Weight</strong>
              <div>{(pokemon.weight / 10).toFixed(1)} kg</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}