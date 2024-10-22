'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import cardimg3 from '../assets/image 271.jpg'
import cardimg2 from '../assets/image 272.jpg'
import cardimg1 from '../assets/image 269.jpg'

const Cards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const totalPages = 2; // Since you have 6 cards, this gives 2 pages (6/3 = 2)

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < totalPages - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const visibleCards = currentIndex === 0 ? (
    <>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
        <Image
          src={cardimg1}
          alt="21 March 2023"
          width={600}
          height={300}
          className="w-full h-96 object-cover" // Increased size
        />
        <div className="p-6">
          <h2 className="font-semibold text-xl">21 March 2023</h2>
          <p className="text-gray-600">Fusce non venenatis velit. Proin luctus malesuada mauris.</p>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
        <Image
          src={cardimg2}
          alt="21 March 2023"
          width={600}
          height={300}
          className="w-full h-96 object-cover"
        />
        <div className="p-6">
          <h2 className="font-semibold text-xl">21 March 2023</h2>
          <p className="text-gray-600">Fusce non venenatis velit. Proin luctus malesuada mauris.</p>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
        <Image
          src={cardimg3}
          alt="21 March 2023"
          width={600}
          height={300}
          className="w-full h-96 object-cover"
        />
        <div className="p-6">
          <h2 className="font-semibold text-xl">21 March 2023</h2>
          <p className="text-gray-600">Fusce non venenatis velit. Proin luctus malesuada mauris.</p>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
        <Image
          src="/image 272.jpg"
          alt="21 March 2023"
          width={600}
          height={300}
          className="w-full h-96 object-cover"
        />
        <div className="p-6">
          <h2 className="font-semibold text-xl">21 March 2023</h2>
          <p className="text-gray-600">Fusce non venenatis velit. Proin luctus malesuada mauris.</p>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
        <Image
          src="/image 271.jpg"
          alt="21 March 2023"
          width={600}
          height={300}
          className="w-full h-96 object-cover"
        />
        <div className="p-6">
          <h2 className="font-semibold text-xl">21 March 2023</h2>
          <p className="text-gray-600">Fusce non venenatis velit. Proin luctus malesuada mauris.</p>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
        <Image
          src="/image 269.jpg"
          alt="21 March 2023"
          width={600}
          height={300}
          className="w-full h-96 object-cover"
        />
        <div className="p-6">
          <h2 className="font-semibold text-xl">21 March 2023</h2>
          <p className="text-gray-600">Fusce non venenatis velit. Proin luctus malesuada mauris.</p>
        </div>
      </div>
    </>
  );

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold">Latest Insights</h1>
        <div>
          <button
            onClick={handlePrev}
            className="bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 disabled:opacity-50"
            disabled={currentIndex === 0}
          >
            &lt; Prev
          </button>
          <button
            onClick={handleNext}
            className="bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 disabled:opacity-50"
            disabled={currentIndex === totalPages - 1}
          >
            Next &gt;
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleCards}
      </div>
    </div>
  );
};

export default Cards;
