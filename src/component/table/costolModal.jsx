import React, { useState } from 'react';

const SearchModal = ({ isOpen, onClose, onAddSearch }) => {
  const [SearchCountry, setSearchCountry] = useState('united kingdom');
  const [SearchCity, setSearchCity] = useState('');
  const [SearchBorough, setSearchBorough] = useState('');

  const handleSearchCountryChange = (e) => {
    setSearchType(e.target.value);
  };
  const handleAddButtonClick = () => {
    const newSearch = {
      country: SearchCountry,
      city: SearchCity,
      borough: parseFloat(SearchBorough),
    };
    onAddSearch(newSearch);
    setSearchCountry(() => '')
    setSearchCity(() => '')
    setSearchBorough(() => '')
    onClose();
  };

  return (
    isOpen && (
      <div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center bg-opacity-25 backdrop-blur-sm transition-all">
        <div className="relative bg-white rounded-lg shadow-lg w-1/3">
          <div className="p-8">
            <h2 className="text-lg font-semibold mb-4 text-black">Add {SearchCountry === 'united states' ? 'france' : 'united kingdom'}</h2>
            <select
              value={SearchCountry}
              onChange={handleSearchCountryChange}
              className="border border-0 rounded-lg mb-4 w-full px-4 py-2"
            >
              <option value="united kingdom">united kingdom</option>
              <option value="united states">united states</option>
              </select>
            <input type="text" placeholder="Search by Country" className="bg-grey-500 border-0 rounded-lg mb-4 w-full px-4 py-2" value={SearchCity} onChange={(e) => setSearchCity(e.target.value)} />
            <input type="text" placeholder="Search by city" className="bg-grey-500 border-0 rounded-lg mb-4 w-full px-4 py-2" value={SearchBorough} onChange={(e) => setSearchBorough(e.target.value)} />
            
            <div className="flex justify-end">
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddButtonClick}>Add</button>
              <button className="bg-gray-300 hover:bg-gray-700 text-gray-800 font-bold py-2 px-4 rounded ml-4" onClick={onClose}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default SearchModal;