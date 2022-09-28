import React from "react";

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-screen bg-[#06283D] text-gray-300"
        >
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-gray-300">
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div>
                        <p>Hi, I'm Mike. Please enjoy your browsing.</p>
                    </div>
                    <div>
                        <p>
                            I have been working as a java, vuejs and
                            occasionally android developer for the past 7 years.
                            And learning new skills after work like algorithms,
                            kotlin, express and firebase to name a few things. I
                            specialise in creating any custom application
                            needed, including api work, front end work and
                            database work. I am always available to pursue the
                            next great thing.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
