import React from "react";
import {
    Leaf,
    Mail,
    Phone,
    MapPin,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    ArrowUp,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
    const { t } = useTranslation();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="bg-green-600 p-2 rounded-xl">
                                <Leaf className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">
                                    {t("app.title")}
                                </h3>
                                <p className="text-sm text-gray-400">
                                    {t("app.subtitle")}
                                </p>
                            </div>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            {t("footer.company_desc")}
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-green-400 transition-colors"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-green-400 transition-colors"
                            >
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-green-400 transition-colors"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-green-400 transition-colors"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">
                            {t("footer.quick_links")}
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                                >
                                    {t("footer.soil_analysis")}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                                >
                                    {t("footer.weather_forecast")}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                                >
                                    {t("footer.crop_recommendations")}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                                >
                                    {t("footer.market_insights")}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                                >
                                    {t("footer.expert_advice")}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">
                            {t("footer.support")}
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                                >
                                    {t("footer.help_center")}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                                >
                                    {t("footer.documentation")}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                                >
                                    {t("footer.api_reference")}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                                >
                                    {t("footer.community_forum")}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                                >
                                    {t("footer.contact_support")}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">
                            {t("footer.contact_us")}
                        </h4>
                        <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <Mail className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-gray-300 text-sm">
                                        {t("footer.email")}
                                    </p>
                                    <p className="text-gray-400 text-sm">
                                        support@cropwise.com
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Phone className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-gray-300 text-sm">
                                        {t("footer.phone")}
                                    </p>
                                    <p className="text-gray-400 text-sm">
                                        +1 (555) 123-4567
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MapPin className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-gray-300 text-sm">
                                        {t("footer.address")}
                                    </p>
                                    <p className="text-gray-400 text-sm">
                                        123 Agriculture Street
                                        <br />
                                        Farm City, FC 12345
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                            <p className="text-gray-400 text-sm">
                                {t("footer.copyright", {
                                    year: new Date().getFullYear(),
                                    app: t("app.title"),
                                })}
                            </p>
                            <div className="flex space-x-6">
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                                >
                                    {t("footer.privacy_policy")}
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                                >
                                    {t("footer.terms_of_service")}
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                                >
                                    {t("footer.cookie_policy")}
                                </a>
                            </div>
                        </div>

                        <button
                            onClick={scrollToTop}
                            className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                        >
                            <ArrowUp className="h-4 w-4" />
                            <span className="text-sm">
                                {t("footer.back_to_top")}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
