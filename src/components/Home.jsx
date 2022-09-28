import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
    return (
        <div name="home" className="w-full h-screen bg-[#06283D]">
            {/* Container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-gray-100">Hi, I'm</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
                    Mike Wight
                </h1>
                <h2 className="text-4xl sm:text-5xl font-bold text-[#8892b0]">
                    I love developing applications and learning new technologies
                </h2>
                <p className="text-[#8892b0] py-4 max-w-[700px]">
                    I'm a developer who loves learning and building new things
                    every day. Currently I'm most intersted in Kotlin, React,
                    Java and Express to name a few things.
                </p>
                <div>
                    <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-gray-800 hover:border-bg-gray-800">
                        View Work{" "}
                        <span className="group-hover:rotate-90 duration-75">
                            <HiArrowNarrowRight className="ml-3" />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
