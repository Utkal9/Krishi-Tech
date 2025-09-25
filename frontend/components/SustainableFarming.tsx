import React, { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Leaf } from "lucide-react";
import Footer from "../components/Footer";

// --- Reusable Card Component (No changes needed here) ---
interface CardProps {
    imageSrc: string;
    title: string;
    description: string;
    moreInfo: string;
}

const AccordionCard: FC<CardProps> = ({
    imageSrc,
    title,
    description,
    moreInfo,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    // This component remains the same as it's already a good, reusable sub-component.
    return (
        <div className="card bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg">
            <img
                src={imageSrc}
                alt={title}
                className="w-full h-48 object-cover cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setIsOpen(!isOpen)}
            />
            <div className="p-5">
                <h4
                    className="text-xl font-semibold text-gray-800 cursor-pointer pr-8 relative"
                    onClick={() => setIsOpen(!isOpen)}
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && setIsOpen(!isOpen)}
                    role="button"
                    aria-expanded={isOpen}
                >
                    {title}
                    <span
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-green-700 font-bold text-2xl transition-transform duration-300 ease-in-out"
                        style={{
                            transform: isOpen
                                ? "rotate(45deg)"
                                : "rotate(0deg)",
                        }}
                    >
                        +
                    </span>
                </h4>
                <div
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{ maxHeight: isOpen ? "250px" : "0" }}
                >
                    <div className="pt-3">
                        <p className="text-gray-600 pb-3 border-b border-gray-200">
                            {description}
                        </p>
                        <p className="text-gray-600 mt-3 text-sm">
                            <strong>More Info:</strong> {moreInfo}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Main SustainableFarming Component (Refactored Structure) ---
const SustainableFarming: FC<{ onBack?: () => void }> = ({ onBack }) => {
    const navigate = useNavigate();

    // Placeholder for loading state, similar to a data-driven component
    const [isLoading, setIsLoading] = useState(true);

    // useEffect can be used to fetch data from an API in the future
    useEffect(() => {
        // Simulate fetching data
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500); // Simulate a 0.5-second load time

        return () => clearTimeout(timer);
    }, []);

    // --- Centralized Data Definitions (like gaugeConfigs in SoilAnalysis) ---
    const pageData = {
        sustainablePractices: [
            {
                imageSrc:
                    "https://files.worldwildlife.org/wwfcmsprod/images/mixed_crops_Shutterstock/story_full_width/1v8ebi5llr_shutterstock_mixed_crops.jpg",
                title: "Mixed Cropping & Intercropping (मिश्रित खेती)",
                description:
                    "Growing crops like maize with pulses naturally enriches the soil, reduces pest risk, and ensures you don't lose everything if one crop fails.",
                moreInfo:
                    "This practice also helps in weed suppression and provides a diversified income for the farmer.",
            },
            {
                imageSrc:
                    "https://www.povertyactionlab.org/sites/default/files/styles/full_evaluation_image/public/2025-07/305_shutterstock_2133158911.jpg?itok=HJon04gK",
                title: "Rainwater Harvesting (वर्षा जल संचयन)",
                description:
                    "Creating farm ponds and check dams captures precious monsoon water, vital for irrigating crops after the rainy season ends.",
                moreInfo:
                    "It also recharges groundwater levels, which can improve well water availability in the entire village.",
            },
            {
                imageSrc:
                    "https://media.istockphoto.com/id/494828998/photo/compost.jpg?s=612x612&w=0&k=20&c=YNBdnVPBwJ7NfnM8V0CsRi01rglRcX_Ju32YeOSgVX0=",
                title: "Organic Manuring (जैविक खाद)",
                description:
                    "Using cow dung, compost, and vermicompost makes Jharkhand's acidic soil healthier and improves water retention.",
                moreInfo:
                    "This reduces the dependency on costly chemical fertilizers and improves the soil's microbial life.",
            },
        ],
        traditionalTools: [
            {
                imageSrc:
                    "https://static-assets.pratilipi.com/pratilipi/cover?pratilipiId=5652877383565312&version=76d5e908-93ad-4730-bf1d-cdb372d60d1c",
                title: "Hal and Bail (हल और बैल)",
                description:
                    "The wooden plough pulled by oxen is perfectly suited for Jharkhand's small fields and is an eco-friendly way to prepare the soil.",
                moreInfo:
                    "This method also provides natural manure and avoids soil compaction caused by heavy tractors.",
            },
            {
                imageSrc:
                    "https://www.povertyactionlab.org/sites/default/files/styles/large/public/images/2023/02/Kenya_NeilPalmer_Flickr_Farmeratwork_2010_0.jpg?itok=SLooNaGt",
                title: "Kudal (कुदाल)",
                description:
                    "A versatile hand tool used for weeding, digging, and creating channels for water, allowing for precise work around delicate plants.",
                moreInfo:
                    "Its simple design makes it low-cost, easy to maintain, and essential for every farming household.",
            },
            {
                imageSrc:
                    "https://europeantoolsaustralia.com/cdn/shop/products/20220103_121144_01.jpg?v=1641184329",
                title: "Hansua (हँसुआ)",
                description:
                    "The classic curved blade used for harvesting crops like paddy, wheat, and grasses with minimal grain loss.",
                moreInfo:
                    "While labor-intensive, it is a low-cost tool that provides employment during the harvest season.",
            },
        ],
        modernTools: [
            {
                imageSrc:
                    "https://www.kirloskaroilengines.com/documents/541738/1596742/koel1494-min.1920x1080.jpg/13999791-bccc-92aa-776d-409c27b08a6e?t=1674216860486",
                title: "Power Tiller",
                description:
                    "A 'walking tractor' that is cheaper and easier to maneuver on small or terraced lands. Perfect for preparing fields for various crops.",
                moreInfo:
                    "Many government schemes offer subsidies for purchasing power tillers, making them more affordable.",
            },
            {
                imageSrc:
                    "https://www.tatapowersolar.com/wp-content/uploads/2018/03/15122305/Solar-Pump-Mobile.jpg",
                title: "Solar Water Pump",
                description:
                    "Uses free energy from the sun for irrigation, cutting down on diesel costs and manual labor where electricity is unreliable.",
                moreInfo:
                    "The initial investment pays for itself in a few years by saving on fuel and electricity bills.",
            },
            {
                imageSrc:
                    "https://images.stockcake.com/public/a/5/6/a5640221-68a3-48e3-8ac5-8a3cd21cc199_large/drone-over-farm-stockcake.jpg",
                title: "Agricultural Drone",
                description:
                    "Drones can spray nutrients or pesticides quickly and evenly, and can be hired to monitor crop health.",
                moreInfo:
                    "Using drones for spraying is safer for the farmer as it eliminates direct contact with chemicals.",
            },
        ],
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b border-green-100">
                <div className="max-w-6xl mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() =>
                                    onBack ? onBack() : navigate(-1)
                                }
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <ArrowLeft className="h-5 w-5 text-gray-600" />
                            </button>
                            <div>
                                <h1 className="text-xl font-bold text-gray-900">
                                    Sustainable Farming Guide
                                </h1>
                                <p className="text-sm text-gray-600">
                                    Practices and tools for Jharkhand
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 py-8">
                <section className="mb-16">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-green-700 mb-2">
                            उन्नत खेती, समृद्ध झारखंड
                        </h2>
                        <p className="max-w-3xl mx-auto text-gray-600">
                            A guide to mixing tradition with technology for a
                            profitable future.
                        </p>
                    </div>

                    <h3 className="text-2xl font-semibold mb-8 pl-4 border-l-4 border-green-700">
                        Key Sustainable Practices
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pageData.sustainablePractices.map((item) => (
                            <AccordionCard key={item.title} {...item} />
                        ))}
                    </div>
                </section>

                <section>
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-green-700 mb-2">
                            Farming Tools: Tradition to Technology
                        </h2>
                        <p className="max-w-3xl mx-auto text-gray-600">
                            The right tools for the job. See how traditional and
                            modern tools can help.
                        </p>
                    </div>

                    <h3 className="text-2xl font-semibold mb-8 pl-4 border-l-4 border-green-700">
                        Timeless Traditional Tools
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {pageData.traditionalTools.map((item) => (
                            <AccordionCard key={item.title} {...item} />
                        ))}
                    </div>

                    <h3 className="text-2xl font-semibold mb-8 pl-4 border-l-4 border-green-700">
                        Modern Tools for Jharkhand's Farms
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pageData.modernTools.map((item) => (
                            <AccordionCard key={item.title} {...item} />
                        ))}
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
};

export default SustainableFarming;
