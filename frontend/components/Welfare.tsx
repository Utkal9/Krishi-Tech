import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react"; // Import new icons
import Footer from "../components/Footer";

// --- Reusable SVG Icon Components ---
const MoneyIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-green-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1h4v1m-4 0H8m11 11v-1a4 4 0 00-4-4H9a4 4 0 00-4 4v1"
        />
    </svg>
);
const CloudIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        />
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 19l-1-1m1 1l1-1m-1 1v-4m-1 1h2"
        />
    </svg>
);
const SparklesIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-cyan-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
    </svg>
);
const UsersIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-pink-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-2a6 6 0 00-12 0v2"
        />
    </svg>
);
const PlusIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-gray-500 group-hover:text-green-600 transition-colors"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
);

interface SchemeInfo {
    title: string;
    imageSrc: string;
    description: string;
    icon: React.ReactNode;
    features: {
        title: string;
        color: string;
        points: string[];
    };
    updates: {
        title: string;
        color: string;
        points: string[];
    };
}

// --- UPDATED Reusable Scheme Card with Accordion Functionality ---
const SchemeCard: FC<{ scheme: SchemeInfo }> = ({ scheme }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 flex flex-col transition-shadow duration-300 hover:shadow-xl">
            <img
                className="w-full h-56 object-cover"
                src={scheme.imageSrc}
                alt={`${scheme.title} Scheme`}
                onError={(e) => {
                    (e.target as HTMLImageElement).src =
                        "https://placehold.co/600x400/EFEFEF/AAAAAA&text=Image+Not+Found";
                }}
            />
            <div className="p-6">
                {/* Clickable Header Area */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex items-center justify-between text-left focus:outline-none"
                    aria-expanded={isOpen}
                >
                    <div className="flex items-center">
                        <div
                            className={`p-3 ${scheme.features.color
                                .replace("text-", "bg-")
                                .replace("-700", "-100")} rounded-full mr-4`}
                        >
                            {scheme.icon}
                        </div>
                        <h2 className="text-xl font-bold text-gray-900">
                            {scheme.title}
                        </h2>
                    </div>
                    {isOpen ? (
                        <ChevronUp className="h-6 w-6 text-gray-500 flex-shrink-0" />
                    ) : (
                        <ChevronDown className="h-6 w-6 text-gray-500 flex-shrink-0" />
                    )}
                </button>

                {/* Collapsible Content */}
                <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen ? "max-h-[500px] pt-6" : "max-h-0"
                    }`}
                >
                    <p className="text-gray-600 mb-6">{scheme.description}</p>

                    <h3
                        className={`font-semibold text-lg mb-2 ${scheme.features.color}`}
                    >
                        {scheme.features.title}
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                        {scheme.features.points.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>

                    <h3
                        className={`font-semibold text-lg mb-2 ${scheme.updates.color}`}
                    >
                        {scheme.updates.title}
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {scheme.updates.points.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

// --- Main Welfare Component (No changes needed here) ---
const Welfare: FC = () => {
    const navigate = useNavigate();

    const schemesData: SchemeInfo[] = [
        {
            title: "PM-KISAN",
            imageSrc:
                "https://sarkariyojana.com/wp-content/uploads/2024/04/pm-kisan-samman-nidhi-yojana.webp",
            description:
                "Provides direct income support of ₹6,000 per year to all eligible small and marginal farmer families.",
            icon: <MoneyIcon />,
            features: {
                title: "Key Features",
                color: "text-green-700",
                points: [
                    "₹2,000 in three equal installments.",
                    "Direct Benefit Transfer (DBT) to bank accounts.",
                    "Excludes high-income individuals and officials.",
                ],
            },
            updates: {
                title: "2025 Updates",
                color: "text-green-700",
                points: [
                    "Increased digitization for faster verification.",
                    "Pilot programs for tenant farmers.",
                    "Enhanced integration with state land records.",
                ],
            },
        },
        {
            title: "PM Fasal Bima Yojna",
            imageSrc:
                "https://tennews.in/wp-content/uploads/2021/01/PMFBY-750x430.jpg",
            description:
                "Offers crop insurance to farmers for crop failure due to natural calamities, pests, or diseases.",
            icon: <CloudIcon />,
            features: {
                title: "Key Features",
                color: "text-blue-700",
                points: [
                    "Low premium rates (2% Kharif, 1.5% Rabi).",
                    "Covers pre-sowing to post-harvest losses.",
                    "Use of technology for quick claim settlements.",
                ],
            },
            updates: {
                title: "2025 Highlights",
                color: "text-blue-700",
                points: [
                    "AI-based crop damage assessment.",
                    "Greater state participation and digital outreach.",
                ],
            },
        },
        {
            title: "PM Krishi Sinchai Yojna",
            imageSrc:
                "https://sarkariyojana.com/wp-content/uploads/2018/05/pradhan-mantri-krishi-sinchayee-yojana-pmksy.png",
            description:
                "Focuses on improving water availability ('Har Khet Ko Pani') and promoting efficient irrigation.",
            icon: <SparklesIcon />,
            features: {
                title: "Key Objectives",
                color: "text-cyan-700",
                points: [
                    "Improve on-farm water use efficiency.",
                    "Expand area under assured irrigation.",
                    "Promote drip and sprinkler systems.",
                ],
            },
            updates: {
                title: "Recent Developments",
                color: "text-cyan-700",
                points: [
                    "Launch of decentralized water harvesting projects.",
                    "Enhanced subsidies for micro-irrigation.",
                    "Geo-tagging of projects for transparency.",
                ],
            },
        },
        {
            title: "Ladli Behna Yojana",
            imageSrc:
                "https://assets.tractorjunction.com/tractor-junction/assets/images/images/news/sarkari-yojana-1693482186.webp",
            description:
                "A state-level initiative empowering women in rural households with financial assistance, impacting agriculture indirectly.",
            icon: <UsersIcon />,
            features: {
                title: "Scheme Overview",
                color: "text-pink-700",
                points: [
                    "₹1,250 monthly assistance to eligible women.",
                    "Aims to improve household income and gender equity.",
                ],
            },
            updates: {
                title: "Agricultural Impact",
                color: "text-pink-700",
                points: [
                    "Improved decision-making power for women.",
                    "Investment in backyard farming, poultry, and dairy.",
                    "Greater access to agricultural training & SHGs.",
                ],
            },
        },
    ];

    return (
        <div className="bg-gray-50 text-gray-800">
            <header className="bg-gradient-to-r from-green-600 to-teal-500 text-white shadow-lg relative">
                <div className="container mx-auto px-6 py-12 text-center">
                    <button
                        onClick={() => navigate(-1)}
                        className="absolute top-4 left-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                    >
                        <ArrowLeft className="h-6 w-6 text-white" />
                    </button>
                    <h1 className="text-4xl md:text-5xl font-bold mb-2">
                        Indian Farmer Welfare Schemes 2025
                    </h1>
                    <p className="text-lg md:text-xl text-green-100">
                        A comprehensive overview of pivotal government
                        initiatives.
                    </p>
                </div>
            </header>

            <main className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {schemesData.map((scheme) => (
                        <SchemeCard key={scheme.title} scheme={scheme} />
                    ))}
                    <div
                        onClick={() => navigate("/schemes-list")}
                        className="cursor-pointer bg-white rounded-xl shadow-md border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-8 text-center transition-colors duration-300 hover:border-green-500 group"
                    >
                        <div className="p-3 bg-gray-100 rounded-full mb-4 group-hover:bg-green-100 transition-colors">
                            <PlusIcon />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                            Explore More Schemes
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Discover other beneficial schemes available for
                            farmers.
                        </p>
                        <span className="inline-block w-full text-center bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors">
                            See More
                        </span>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Welfare;
