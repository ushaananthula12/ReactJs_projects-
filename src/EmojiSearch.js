import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import emojiList from './emojiList'; // Create a separate file with a list of emojis

const EmojiSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEmojis, setFilteredEmojis] = useState([]);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filtered = emojiList.filter((emoji) =>
      emoji.keywords.toLowerCase().includes(term.toLowerCase())
    );

    setFilteredEmojis(filtered);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search emojis..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <FontAwesomeIcon icon={faSearch} />
      </div>

      <div>
        {filteredEmojis.map((emoji, index) => (
          <span key={index}>{emoji.char}</span>
        ))}
      </div>
    </div>
  );
};

export default EmojiSearch;
