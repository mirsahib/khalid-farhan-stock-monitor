import React from "react";
import { Github, LinkedinIcon } from "lucide-react";

function Footer() {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <a
                        className="text-gray-500"
                        href="https://github.com/mirsahib"
                    >
                        <Github />
                    </a>
                </a>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                    © {new Date().getFullYear()} Made with &hearts; —
                    <a
                        href="https://www.linkedin.com/in/mir-habib-ul-latif/"
                        className="text-gray-600 ml-1"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Mir Habib Ul Latif
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
