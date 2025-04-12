import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Searchbar = ({ setSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearchClick = () => {
    if (inputValue.trim()) {
      setSearch(inputValue);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  };

  return (
    <StyledWrapper>
      <div className="input-wrapper">
        <input 
          type="text"
          name="text"
          placeholder="Search Weather"
          className="input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="search-button" onClick={handleSearchClick}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='white'/>
        </button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .input-wrapper {
    position: relative;
    width: fit-content;
    margin: 0 auto;
  }

  .input {
    display: block;
    color: rgb(34, 34, 34);
    background: linear-gradient(142.99deg, rgba(217, 217, 217, 0.63) 15.53%, rgba(243, 243, 243, 0.63) 88.19%);
    box-shadow: 0px 12px 24px -1px rgba(0, 0, 0, 0.18);
    border: none;
    border-radius: 50px;
    padding: 18px 40px 18px 20px; /* leave space for button */
    outline: none;
    text-align: left;
    width: 200px;
    transition: 0.5s;
    height: 30px;
    margin-top: 10px;
  }

  .input:hover {
    width: 240px;
  }

  .input:focus {
    width: 280px;
  }

  .search-button {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  }

  .search-button svg {
    color: #333;
    font-size: 18px;
  }
`;
export default Searchbar;