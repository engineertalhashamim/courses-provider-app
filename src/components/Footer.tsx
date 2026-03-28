import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 pt-12 pb-4 border-t border-gray-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About</h2>
          <div className="flex flex-col space-x-4">
            <p className="hover:text-white transition-colors duration-300">
              Welcome to our Programming Learning Portal! Learn coding from
              basics to advanced with simple, engaging lessons and build
              real-world projects with confidence.
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <div className="flex flex-col space-x-4">
            <Link
              href="/"
              className="hover:text-white transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="/courses"
              className="hover:text-white transition-colors duration-300"
            >
              Courses
            </Link>
            <Link
              href="/contact"
              className="hover:text-white transition-colors duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex flex-col space-x-4">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <div className="flex flex-col space-x-4">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Abcd Karachi, Pakistan <br /> Karachi 10001
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=engr.talhashamim@gmail.com"
              target="_blank"
              className="hover:text-white transition-colors duration-300"
            >
              Email: engr.talhashamim@gmail.com
            </a>
            <a
              href="tel:03112551352"
              className="hover:text-white transition-colors duration-300"
            >
              Phone: +92112551352
            </a>
          </div>
        </div>
      </div>
      <p className="text-center text-xs pt-8">
        @ 2024 Learning School. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
