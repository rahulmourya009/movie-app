import React from "react";

const Header = ({ handleTextChange, handleGetMovies }) => {
  return (
    <div className="app-header">
      <div className="app-header__content">
        <h3>MOVIE NAME</h3>
        <form className='app-header__content__input' onSubmit={handleGetMovies} >
          <input type="text" name="search-movie" id="" placeholder='Search Movie...' onChange={handleTextChange} />
          <button type='submit' className='btn'>Search</button>
        </form>
      </div>
    </div>
  );
};

export default Header;
