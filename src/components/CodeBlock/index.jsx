import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";

const CodeBlock = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].name);

    useEffect(() => {
        Prism.highlightAll();
    }, [activeTab]);

    return (
        <div className="relative self-center w-full bg-slate text-white rounded-lg shadow-lg mt-[1rem]">
            <div className="border-b border-gray-700 mb-4">
                <ul className="flex flex-wrap text-sm font-medium justify-start">
                    {tabs.map((tab) => (
                        <li key={tab.name}>
                            <button
                                className={`px-4 py-2 rounded-t-lg transition-all ${
                                    activeTab === tab.name
                                        ? "text-lightemerald border-b-2 border-lightemerald bg-lightemerald bg-opacity-[8%]"
                                        : "text-ivory hover:text-stalelime border-b-2 border-transparent"
                                }`}
                                onClick={() => setActiveTab(tab.name)}
                            >
                                {tab.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="overflow-auto px-[1rem] sm:text-base text-xs">
                {tabs.map((tab) => (
                    <pre
                        key={tab.name}
                        className={`rounded-lg p-4 ${activeTab === tab.name ? "block" : "hidden"}`}
                    >
                        <code className={`language-${tab.language}`}>{tab.code}</code>
                    </pre>
                ))}
            </div>
            <div className="mx-[1rem] py-4 text-gray-300">
                {tabs.map((tab) => (
                    <p key={tab.name} className={activeTab === tab.name ? "block" : "hidden"}>
                        {tab.description}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default CodeBlock;
