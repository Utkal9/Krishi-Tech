import React from "react";
import Footer from "./Footer";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
// --- Reusable SVG Icon Components for better organization ---
const CheckCircleIcon = () => (
    <svg
        className="h-8 w-8 text-green-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
    </svg>
);

const BanIcon = () => (
    <svg
        className="h-8 w-8 text-red-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
        />
    </svg>
);

const WarningIcon = () => (
    <svg
        className="h-8 w-8 text-yellow-700"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
    </svg>
);

const ShieldIcon = () => (
    <svg
        className="h-8 w-8 text-yellow-700"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
        />
    </svg>
);

const BeakerIcon = () => (
    <svg
        className="h-8 w-8 text-yellow-700"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
        />
    </svg>
);

const PesticideGuidePage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div
            className="bg-slate-100 text-slate-800"
            style={{ fontFamily: "'Inter', sans-serif" }}
        >
            {/* Header Section */}
            <header
                className="text-white shadow-lg"
                style={{
                    backgroundColor: "#22c55e",
                    backgroundImage:
                        "linear-gradient(145deg, #22c55e 0%, #16a34a 100%)",
                }}
            >
                <div className="container mx-auto px-6 py-12 text-center">
                    <button
                        onClick={() => navigate(-1)}
                        className="absolute top-4 left-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                        aria-label="Go back"
                    >
                        <ArrowLeft className="h-6 w-6 text-white" />
                    </button>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        The Home & Garden Guide to Pesticides
                    </h1>
                    <p className="mt-4 text-lg text-green-100 max-w-3xl mx-auto">
                        Understanding, choosing, and using them safely and
                        effectively for a healthy environment.
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Introduction Section */}
                <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">
                                What Are Pesticides?
                            </h2>
                            <p className="text-lg text-slate-600 mb-4">
                                Pesticides are substances used to prevent,
                                destroy, repel, or mitigate any pest. This
                                includes insecticides (for insects), herbicides
                                (for weeds), fungicides (for fungi), and
                                rodenticides (for rodents). While they can be
                                powerful tools for managing pests in your home
                                and garden, their use comes with significant
                                responsibility.
                            </p>
                            <div className="mt-6 p-6 rounded-lg bg-blue-50 border-l-4 border-blue-500">
                                <p className="text-blue-800">
                                    <strong className="font-semibold">
                                        Key Principle:
                                    </strong>
                                    The goal is not to eliminate every pest, but
                                    to manage their populations to acceptable
                                    levels with the least possible harm to
                                    people, property, and the environment. This
                                    is known as Integrated Pest Management
                                    (IPM).
                                </p>
                            </div>
                        </div>
                        <div className="mt-6 md:mt-0">
                            <img
                                src="https://juagrisciences.com/uploads/blog/category/17065931331jpg.jpg"
                                alt="A vibrant, healthy garden representing integrated pest management."
                                className="rounded-lg shadow-md w-full h-auto"
                            />
                        </div>
                    </div>
                </section>

                {/* Main Grid for Pesticide Information */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Card 1: Safer Choices & Best Practices */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
                        <img
                            src="https://agri-route.com/cdn/shop/articles/8-Different-Types-of-Pesticides-Used-in-Agriculture-Commonly.jpg?v=1677043072"
                            alt="A person tending to healthy plants in a garden."
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-8">
                            <div className="flex items-center mb-4">
                                <div className="p-3 rounded-full bg-green-100 mr-4">
                                    <CheckCircleIcon />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">
                                    Safer Choices to Use
                                </h3>
                            </div>
                            <p className="text-slate-600 mb-6">
                                Always start with non-chemical methods first. If
                                you must use a pesticide, consider these
                                lower-risk options:
                            </p>
                            <ul className="space-y-4 text-slate-700 list-disc list-inside">
                                <li>
                                    <strong>Insecticidal Soaps:</strong>{" "}
                                    Effective against soft-bodied insects like
                                    aphids and mites. They have low toxicity to
                                    mammals and beneficial insects.
                                </li>
                                <li>
                                    <strong>
                                        Horticultural Oils (e.g., Neem Oil):
                                    </strong>{" "}
                                    Disrupts insect growth and repels pests.
                                    It's biodegradable and generally safe for
                                    non-target organisms when used correctly.
                                </li>
                                <li>
                                    <strong>
                                        Bacillus thuringiensis (Bt):
                                    </strong>{" "}
                                    A naturally occurring soil bacterium that
                                    targets specific insect larvae like
                                    caterpillars and mosquito larvae, without
                                    harming other animals or humans.
                                </li>
                                <li>
                                    <strong>Diatomaceous Earth:</strong> A fine
                                    powder made from fossilized algae that
                                    physically damages the exoskeleton of
                                    insects, causing them to dehydrate.
                                </li>
                                <li>
                                    <strong>Pyrethrins:</strong> A botanical
                                    insecticide derived from chrysanthemum
                                    flowers. It breaks down quickly in sunlight
                                    and has low mammalian toxicity.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Card 2: Pesticides to Avoid */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
                        <img
                            src="https://media.springernature.com/lw1200/springer-static/image/art%3A10.1186%2Fs40538-024-00708-4/MediaObjects/40538_2024_708_Figa_HTML.png"
                            alt="A red warning sign."
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-8">
                            <div className="flex items-center mb-4">
                                <div className="p-3 rounded-full bg-red-100 mr-4">
                                    <BanIcon />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">
                                    Pesticides to Avoid
                                </h3>
                            </div>
                            <p className="text-slate-600 mb-6">
                                Many pesticides available for home use can be
                                highly toxic. Avoid products containing these
                                chemicals if possible, as they pose significant
                                risks:
                            </p>
                            <ul className="space-y-4 text-slate-700 list-disc list-inside">
                                <li>
                                    <strong>
                                        Organophosphates (e.g., Chlorpyrifos,
                                        Malathion):
                                    </strong>{" "}
                                    Highly toxic to the nervous system of
                                    humans, pets, and wildlife, including
                                    essential pollinators like bees.
                                </li>
                                <li>
                                    <strong>
                                        Carbamates (e.g., Carbaryl):
                                    </strong>{" "}
                                    Similar to organophosphates in their toxic
                                    action. Also highly toxic to bees.
                                </li>
                                <li>
                                    <strong>
                                        Neonicotinoids (e.g., Imidacloprid):
                                    </strong>{" "}
                                    Systemic pesticides that are absorbed by the
                                    plant, making the entire plant toxic to
                                    insects. Strongly linked to bee colony
                                    collapse.
                                </li>
                                <li>
                                    <strong>
                                        Broad-spectrum Herbicides (e.g.,
                                        Glyphosate, Paraquat):
                                    </strong>{" "}
                                    Can kill a wide variety of plants, harming
                                    local ecosystems. Some are linked to serious
                                    human health issues. Use with extreme
                                    caution and only when necessary.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Harmful Effects Section */}
                <section className="mt-12 bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
                        Harmful Effects of Improper Use
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Human Health */}
                        <div>
                            <img
                                src="https://pub.mdpi-res.com/toxics/toxics-09-00042/article_deploy/html/images/toxics-09-00042-ag.png?1614562257"
                                alt="Illustration of lungs and a human silhouette."
                                className="rounded-lg shadow-md mb-4 w-full h-auto"
                            />
                            <h4 className="text-xl font-semibold text-slate-800 mb-3">
                                On Human Health
                            </h4>
                            <p className="text-slate-600 mb-4">
                                Exposure can occur through skin contact,
                                inhalation, or ingestion. Effects can be:
                            </p>
                            <ul className="space-y-2 list-disc list-inside text-slate-700">
                                <li>
                                    <strong>Acute (Short-term):</strong>{" "}
                                    Headaches, dizziness, nausea, skin rashes,
                                    eye irritation, and in severe cases,
                                    seizures or death.
                                </li>
                                <li>
                                    <strong>Chronic (Long-term):</strong>{" "}
                                    Increased risk of certain cancers,
                                    neurological disorders (like Parkinson's),
                                    reproductive problems, and developmental
                                    issues in children.
                                </li>
                            </ul>
                        </div>
                        {/* Environmental Health */}
                        <div>
                            <img
                                src="https://www.pan-uk.org/site/wp-content/uploads/Impacts-of-pesticides-infographic.png"
                                alt="A honeybee on a flower, representing pollinators and the environment."
                                className="rounded-lg shadow-md mb-4 w-full h-61"
                            />
                            <h4 className="text-xl font-semibold text-slate-800 mb-3">
                                On the Environment
                            </h4>
                            <p className="text-slate-600 mb-4">
                                Pesticides don't just affect their targets. They
                                can cause widespread damage:
                            </p>
                            <ul className="space-y-2 list-disc list-inside text-slate-700">
                                <li>
                                    <strong>Water Contamination:</strong> Runoff
                                    from gardens and farms can pollute rivers,
                                    lakes, and groundwater, harming aquatic
                                    life.
                                </li>
                                <li>
                                    <strong>Soil Degradation:</strong> Can kill
                                    beneficial soil microorganisms essential for
                                    plant health and nutrient cycling.
                                </li>
                                <li>
                                    <strong>Harm to Wildlife:</strong> Kills
                                    pollinators (bees, butterflies), beneficial
                                    insects, birds, and other animals.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Safety Precautions */}
                <section className="mt-12 bg-yellow-50 border-t-4 border-yellow-400 rounded-b-lg shadow-lg p-8">
                    <h2 className="text-3xl font-bold text-yellow-900 mb-6 text-center">
                        Essential Safety Precautions
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                        <div className="flex flex-col items-center">
                            <div className="p-4 rounded-full bg-yellow-200 mb-3">
                                <WarningIcon />
                            </div>
                            <h4 className="font-semibold text-lg mb-2">
                                Read The Label
                            </h4>
                            <p className="text-yellow-800">
                                The label is the law. It contains crucial info
                                on use, storage, and disposal.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="p-4 rounded-full bg-yellow-200 mb-3">
                                <ShieldIcon />
                            </div>
                            <h4 className="font-semibold text-lg mb-2">
                                Wear Protective Gear
                            </h4>
                            <p className="text-yellow-800">
                                Always wear long sleeves, pants, gloves, eye
                                protection, and a mask when handling pesticides.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="p-4 rounded-full bg-yellow-200 mb-3">
                                <BeakerIcon />
                            </div>
                            <h4 className="font-semibold text-lg mb-2">
                                Mix and Apply Safely
                            </h4>
                            <p className="text-yellow-800">
                                Mix outdoors, avoid windy days, and never spray
                                near children, pets, or food sources.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default PesticideGuidePage;
