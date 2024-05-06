import React from 'react'

const Filters = ({ onNewest, onRating, onGenreChange }) => {
    return (
        <nav className='flex gap-4'>
            <button onClick={onNewest}>Più Recenti</button>
            <button onClick={onRating}>Rating</button>
            <Genres onGenreChange={onGenreChange} />
        </nav>
    )
};

export default Filters;


const Newer = () => {
    return (
        <div>Newer</div>
    )
}

const Rating = () => {
    return (
        <div>Ratings</div>
    )
}


const Genres = ({ onGenreChange }) => {
    const genres = ['Comedy', 'Drama', 'Action'];

    return (
        <select onChange={(e) => onGenreChange(e.target.value)}>
            <option value="all">Tutti i generi</option>
            {genres.map((genre, index) => (
                <option key={index} value={genre}>{genre}</option>
            ))}
        </select>
    );
};