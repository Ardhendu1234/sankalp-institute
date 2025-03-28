import { useState } from 'react';

function Courses() {
  const [progress, setProgress] = useState({ iitJee: 30, neet: 50, foundation: 20 });

  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-5xl font-bold text-white mb-8 text-center sm:text-4xl" data-aos="fade-up">Our Signature Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass p-8 rounded-xl" data-aos="zoom-in">
          <h3 className="text-2xl font-semibold text-yellow-400 sm:text-xl">IIT JEE</h3>
          <p className="text-gray-200 dark:text-gray-400 mt-2">Master Physics & Chemistry for JEE Main & Advanced.</p>
          <ul className="list-disc pl-5 text-gray-200 dark:text-gray-400 mt-4">
            <li>1-Year Program</li>
            <li>Weekly Tests</li>
            <li>Concept Clarity</li>
          </ul>
          <div className="mt-4">
            <p className="text-gray-200 dark:text-gray-400">Progress: {progress.iitJee}%</p>
            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
              <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: `${progress.iitJee}%` }}></div>
            </div>
          </div>
        </div>
        <div className="glass p-8 rounded-xl" data-aos="zoom-in" data-aos-delay="200">
          <h3 className="text-2xl font-semibold text-yellow-400 sm:text-xl">NEET</h3>
          <p className="text-gray-200 dark:text-gray-400 mt-2">Excel in Physics & Chemistry for medical entrance.</p>
          <ul className="list-disc pl-5 text-gray-200 dark:text-gray-400 mt-4">
            <li>1-Year Program</li>
            <li>Mock Exams</li>
            <li>Practical Focus</li>
          </ul>
          <div className="mt-4">
            <p className="text-gray-200 dark:text-gray-400">Progress: {progress.neet}%</p>
            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
              <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: `${progress.neet}%` }}></div>
            </div>
          </div>
        </div>
        <div className="glass p-8 rounded-xl" data-aos="zoom-in" data-aos-delay="400">
          <h3 className="text-2xl font-semibold text-yellow-400 sm:text-xl">Foundation</h3>
          <p className="text-gray-200 dark:text-gray-400 mt-2">Build a strong base for Classes 9-10.</p>
          <ul className="list-disc pl-5 text-gray-200 dark:text-gray-400 mt-4">
            <li>6-Month Program</li>
            <li>Core Concepts</li>
            <li>Interactive Learning</li>
          </ul>
          <div className="mt-4">
            <p className="text-gray-200 dark:text-gray-400">Progress: {progress.foundation}%</p>
            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
              <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: `${progress.foundation}%` }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;