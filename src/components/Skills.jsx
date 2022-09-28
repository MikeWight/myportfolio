import React from "react";

import Java from "../assets/java.png";
import Kotlin from "../assets/kotlin.png";
import ReactLogo from "../assets/react.png";
import Vue from "../assets/vue.png";
import Node from "../assets/node.png";
import Github from "../assets/github.png";

const Skills = () => {
    return (
        <div
            name="skills"
            className="w-full h-screen bg-[#06283D] text-gray-300"
        >
            {/* Container */}
            <div className="max-w-[1000px] mx-auto p-4 flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-gray-300">
                        Experience
                    </p>
                    <p className="py-4">
                        // These are the technologies I have been using lately
                    </p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto"
                            src={Java}
                            alt="java logo"
                        />
                        <p className="my-4">JAVA</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto"
                            src={Kotlin}
                            alt="kotlin logo"
                        />
                        <p className="my-4">KOTLIN</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto"
                            src={ReactLogo}
                            alt="reaect logo"
                        />
                        <p className="my-4">REACT</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto"
                            src={Vue}
                            alt="vue logo"
                        />
                        <p className="my-4">VUE</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto"
                            src={Node}
                            alt="Node logo"
                        />
                        <p className="my-4">NODE</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto"
                            src={Github}
                            alt="github logo"
                        />
                        <p className="my-4">GITHUB</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
