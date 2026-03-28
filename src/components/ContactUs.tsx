"use client";
import React, { useState } from "react";
import Footer from "./Footer";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailToLink = `mailto:engr.talhashamim@gmail.com?subject=Contact Form&body=Email: ${email}%0D%0AMessage: ${message}`;

  return (
    <>
      <div className="md:pt-48 md:pb-20 pt-36 pb-16 md:px-6 px-0 bg-gray-900">
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
          Contact Us
        </h1>
        <p className="text-gray-50 text-sm text-neutral-600 dark:text-neutral-400 md:w-[50%] md:px-0 px-6 mx-auto text-center">
          We're here to help! Whether you have questions about our courses, need
          support, or just want to say hello — feel free to reach out. Our team
          is always ready to assist you with any queries. Use the contact form
          below or email us directly. We aim to respond within 24 hours on
          business days.{" "}
        </p>
        <div className="md:w-[50%] md:px-0 px-6 mx-auto flex flex-col gap-5 mt-6">
          <input
            className="bg-black w-full p-4 border border-gray-600 text-sm md:text-base placeholder:text-sm md:placeholder:text-base placeholder-neutral-500"
            type="text"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className="bg-black w-full p-4 border border-gray-600 h-40 text-sm md:text-base placeholder:text-sm md:placeholder:text-base placeholder-neutral-500"
            name=""
            id=""
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <a
            href={`mailto:engr.talhashamim@gmail.com?subject=Contact&body=${message}`}
            className="text-center mt-4 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Send Email
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
