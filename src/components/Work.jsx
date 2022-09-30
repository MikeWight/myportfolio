import React from 'react';
import NetflixClone from '../assets/flixclone.png';
import CryptoApp from '../assets/cryptoapp.png';

const Work = () => {
    return (
        <div
            name="work"
            className="w-full md:h-screen text-gray-300 bg-[#083754]"
        >
            {/* Container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-gray-300">
                        Work
                    </p>
                    <p className="py-6">Look at some of my recent work</p>
                </div>
                {/* Grid Container */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div
                        style={{ backgroundImage: `url(${NetflixClone})` }}
                        className="rounded-md shadow-lg shadow-[#040c16]"
                    >
                        <div className="group container flex justify-center items-center mx-auto content-div">
                            {/* Hover effects */}
                            <div className="opacity-0 group-hover:opacity-100">
                                <span className="text-2xl font-bold text-white tracking-wider">
                                    Netflix Application
                                </span>
                                <div className="pt-8 text-center">
                                    <a href="https://netflix-react-yt-cde69.web.app/">
                                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                            Demo
                                        </button>
                                    </a>
                                    <a href="https://github.com/MikeWight/netflixclone">
                                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                            Code
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${CryptoApp})` }}
                        className="rounded-md shadow-lg shadow-[#040c16]"
                    >
                        <div className="group container flex justify-center items-center mx-auto content-div">
                            {/* Hover effects */}
                            <div className="opacity-0 group-hover:opacity-100">
                                <span className="text-2xl font-bold text-white tracking-wider">
                                    Crypto Application
                                </span>
                                <div className="pt-8 text-center">
                                    <a href="https://crypto-app-9a33d.web.app">
                                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                            Demo
                                        </button>
                                    </a>
                                    <a href="https://github.com/MikeWight/cryptoapp">
                                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                            Code
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
