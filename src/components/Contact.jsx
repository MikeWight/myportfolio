import React from "react";

const Contact = () => {
    return (
        <div
            name="contact"
            className="w-full h-screen bg-[#083754] flex justify-center items-center p-4"
        >
            <form
                method="POST"
                action="https://getform.io/f/9a1f579f-d058-4e26-82be-7d4724a8d6e9"
                className="flex flex-col max-w-[600px] w-full"
            >
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-300 text-gray-300">
                        Contact
                    </p>
                    <p className="text-gray-300 py-4">
                        Submit the form below to send me an email -
                        mikefwight@gmail.com
                    </p>
                </div>
                <input
                    className="bg-[#ccd6f6] p-2"
                    type="text"
                    placeholder="Name"
                    name="name"
                />
                <input
                    className="my-4 p-2 bg-[#ccd6f6]"
                    type="email"
                    placeholder="Email"
                    name="email"
                />
                <textarea
                    className="bg-[#ccd6f6] p-2"
                    name="message"
                    rows="10"
                    placeholder="Message"
                ></textarea>
                <button className="text-white border-2 hover:bg-[#06283d] hover:border-gray-300 px-4 py-3 my-8 mx-auto items-center">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
