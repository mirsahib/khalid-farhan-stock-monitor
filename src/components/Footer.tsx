import React from "react";

function Footer() {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    Logo
                    <span className="ml-3 text-xl">Tailblocks</span>
                </a>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                    © 2020 Tailblocks —
                    <a
                        href="https://twitter.com/knyttneve"
                        className="text-gray-600 ml-1"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        @knyttneve
                    </a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a className="text-gray-500">logo</a>
                    <a className="ml-3 text-gray-500">logo</a>
                    <a className="ml-3 text-gray-500">Another Logo</a>
                    <a className="ml-3 text-gray-500">Logo</a>
                </span>
            </div>
        </footer>
    );
}

export default Footer;
