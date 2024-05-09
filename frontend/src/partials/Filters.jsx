import React from 'react';

const Filters = ({ onNewest, onRating, onGenreChange, genres }) => {
    return (
        <nav className='flex gap-4 mb-4'>
            <button onClick={onNewest} className="border border-gray-300 px-4 py-2 rounded hover:border-blue-500">Più Recenti</button>
            <button onClick={onRating} className="border border-gray-300 px-4 py-2 rounded hover:border-blue-500">Rating</button>
            <Genres onGenreChange={onGenreChange} genres={genres} className='border border-gray-300 rounded' />
        </nav>
    );
};

export default Filters;

const Genres = ({ onGenreChange, genres }) => {
    return (
        <select onChange={(e) => onGenreChange(e.target.value)} className='border border-gray-300 rounded'>
            <option value="all">Tutti i generi</option>
            {genres.map((genre, index) => (
                <option key={index} value={genre}>{genre}</option>
            ))}
        </select>
    );
};