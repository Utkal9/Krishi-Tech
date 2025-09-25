import React, { useState, useEffect } from 'react';
import jsonData from '../scheme.json';

const Welfare = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;

    useEffect(() => {
        setData(jsonData);
    }, []);

    // Filtered data based on search term
    const filteredData = data.filter(entry =>
        entry.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Calculate the current items to display
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    // Handle pagination
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    return (
        <div className='flex flex-col gap-6 items-center p-6 bg-gray-100 min-h-screen bg-gradient-to-br from-green-50 to-emerald-50'>
            <h1 className='text-3xl font-bold text-center mb-4'>Welfare Schemes</h1>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='p-3 border border-gray-300 rounded-lg mb-4 w-180 bg-gray-400 focus:bg-gray-100'
            />
            {currentItems.map((entry, index) => (
                <div key={index} className='flex flex-row items-center gap-40 justify-between bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 w-260'>
                    <h2 className='text-xl font-semibold text-gray-800'>{entry.name}</h2>
                    <p className='text-gray-600'>
                        <a href={entry.link} target="_blank" rel="noopener noreferrer" className='text-blue-500 hover:underline'>{entry.link}</a>
                    </p>
                </div>
            ))}
            <div className='flex justify-center mt-4'>
                <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className='px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50'
                >
                    Previous
                </button>
                <span className='mx-4'>{`Page ${currentPage} of ${totalPages}`}</span>
                <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className='px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50'
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Welfare;
