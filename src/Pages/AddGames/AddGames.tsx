import React, { useState } from 'react';

interface Game {
  id: number;
  title: string;
  genre: string;
  description: string;
}

const App: React.FC = () => {
  const [games, setGames] = useState<Game[]>([
    { id: 1, title: 'Minecraft', genre: 'Sandbox', description: 'Create and explore endless worlds.' },
    { id: 2, title: 'CS:GO', genre: 'Shooter', description: 'Team-based tactical shooter.' },
    { id: 3, title: 'Fortnite', genre: 'Battle Royale', description: 'Survive and build in this colorful battle royale.' },
  ]);

  const [newGame, setNewGame] = useState<Omit<Game, 'id'>>({
    title: '',
    genre: '',
    description: '',
  });

  const [search, setSearch] = useState('');

  const handleAddGame = () => {
    if (newGame.title && newGame.genre && newGame.description) {
      setGames((prev) => [
        ...prev,
        { id: Date.now(), ...newGame },
      ]);
      setNewGame({ title: '', genre: '', description: '' });
    }
  };

  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">GameVault</h1>
        <p className="text-gray-600">Your personal game collection</p>
      </header>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search games..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
        />
      </div>

      <div className="mb-6 bg-white p-5 rounded-md shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Game</h2>
        <input
          type="text"
          placeholder="Title"
          value={newGame.title}
          onChange={(e) => setNewGame({ ...newGame, title: e.target.value })}
          className="w-full mb-3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
        />
        <input
          type="text"
          placeholder="Genre"
          value={newGame.genre}
          onChange={(e) => setNewGame({ ...newGame, genre: e.target.value })}
          className="w-full mb-3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
        />
        <textarea
          placeholder="Description"
          value={newGame.description}
          onChange={(e) => setNewGame({ ...newGame, description: e.target.value })}
          className="w-full mb-3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
        ></textarea>
        <button
          onClick={handleAddGame}
          className="w-full bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600"
        >
          Add Game
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGames.map((game) => (
          <div key={game.id} className="bg-white p-5 rounded-md shadow-md">
            <h3 className="text-lg font-bold text-gray-800">{game.title}</h3>
            <p className="text-sm text-gray-500">Genre: {game.genre}</p>
            <p className="text-gray-700 mt-2">{game.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
