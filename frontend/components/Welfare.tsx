import React from "react";
import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import jsonData from "../scheme.json"; // Make sure you have this JSON file
import { Search, ExternalLink, ArrowLeft } from "lucide-react";
import Footer from "../components/Footer";

// Define a type for your scheme data for better TypeScript support
interface Scheme {
    id: number;
    name: string;
    link: string;
}

const Welfare = () => {
    const [schemes, setSchemes] = useState<Scheme[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const navigate = useNavigate();

    useEffect(() => {
        // Assuming jsonData is an array of schemes
        setSchemes(jsonData);
    }, []);

    const filteredSchemes = useMemo(() => {
        return schemes.filter((scheme) =>
            scheme.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [schemes, searchTerm]);

    // FIX: Reset to page 1 whenever the search term changes
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm]);

    // Pagination logic
    const totalPages = Math.ceil(filteredSchemes.length / itemsPerPage);
    const currentItems = filteredSchemes.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b border-green-100">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => navigate(-1)} // Go back to the previous page
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <ArrowLeft className="h-5 w-5 text-gray-600" />
                        </button>
                        <div>
                            <h1 className="text-xl font-bold text-gray-900">
                                Welfare Schemes
                            </h1>
                            <p className="text-sm text-gray-600">
                                Government schemes and initiatives for farmers
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="relative mb-8">
                    <input
                        type="text"
                        placeholder="Search for a scheme..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-4 pl-12 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>

                <div className="space-y-4">
                    {currentItems.length > 0 ? (
                        currentItems.map((scheme) => (
                            <a
                                href={scheme.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={scheme.id}
                                className="group block bg-white shadow-md rounded-lg p-6 hover:shadow-xl hover:border-green-500 border border-transparent transition-all duration-300"
                            >
                                <div className="flex items-center justify-between">
                                    <h2 className="text-lg font-semibold text-gray-800 group-hover:text-green-600">
                                        {scheme.name}
                                    </h2>
                                    <ExternalLink className="text-gray-400 group-hover:text-green-600 transition-colors" />
                                </div>
                            </a>
                        ))
                    ) : (
                        <div className="text-center bg-white p-8 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-gray-700">
                                No schemes found
                            </h3>
                            <p className="text-gray-500 mt-2">
                                Try adjusting your search term.
                            </p>
                        </div>
                    )}
                </div>

                {totalPages > 1 && (
                    <div className="flex justify-between items-center mt-8">
                        <button
                            onClick={() =>
                                setCurrentPage((prev) => Math.max(prev - 1, 1))
                            }
                            disabled={currentPage === 1}
                            className="px-4 py-2 bg-green-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-700 transition-colors"
                        >
                            Previous
                        </button>
                        <span className="text-gray-700 font-medium">
                            Page {currentPage} of {totalPages}
                        </span>
                        <button
                            onClick={() =>
                                setCurrentPage((prev) =>
                                    Math.min(prev + 1, totalPages)
                                )
                            }
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 bg-green-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-700 transition-colors"
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Welfare;
