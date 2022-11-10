import React from 'react';
import Helmet from 'react-helmet';

const Contact = () => {
    return (
        <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
            <Helmet>
                <title>Contact Us</title>
                <meta name="description" content="FAQs" />
            </Helmet>
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                <div className="py-6 md:py-0 md:px-6">
                    <h1 className="text-4xl font-bold">Get in touch</h1>
                    <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                    <div className="space-y-4">
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                            </svg>
                            <span>Fake address, 9999 City</span>
                        </p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                            </svg>
                            <span>123456789</span>
                        </p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                            <span>contact@business.com</span>
                        </p>
                    </div>
                </div>
                <form novalidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
                    <label className="block">
                        <span className="mb-1">Full name</span>
                        <input type="text" placeholder="Leroy Jenkins" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800" />
                    </label>
                    <label className="block">
                        <span className="mb-1">Email address</span>
                        <input type="email" placeholder="leroy@jenkins.com" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiYmZkZTQxOS00ZGRkLWU5NDYtOWQ2MC05OGExNGJiMTA3N2YiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDAyNDkwMkRDOTIyMTFFNkI0MzFGRTk2RjM1OTdENTciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDAyNDkwMkNDOTIyMTFFNkI0MzFGRTk2RjM1OTdENTciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTU2NTE1NDItMmIzOC1kZjRkLTk0N2UtN2NjOTlmMjQ5ZGFjIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmJiZmRlNDE5LTRkZGQtZTk0Ni05ZDYwLTk4YTE0YmIxMDc3ZiIv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&quot;) !important; background-repeat: no-repeat; background-size: 20px; background-position: 97% center; cursor: auto;" data-temp-mail-org="0" />
                    </label>
                    <label className="block">
                        <span className="mb-1">Message</span>
                        <textarea rows="3" className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800"></textarea>
                    </label>
                    <button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-400 dark:text-gray-900 focus:ring-violet-400 hover:ring-violet-400">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;