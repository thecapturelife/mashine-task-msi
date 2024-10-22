'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const cardsData = [
  { id: 1, title: '21 March 2023', description: 'Fusce non venenatis velit. Proin luctus malesuada mauris.', image: '/image 269.jpg' },
  { id: 2, title: '21 March 2023', description: 'Fusce non venenatis velit. Proin luctus malesuada mauris.', image: '/image 272.jpg' },
  { id: 3, title: '21 March 2023', description: 'Fusce non venenatis velit. Proin luctus malesuada mauris.', image: '/image 271.jpg' },
  { id: 4, title: '21 March 2023', description: 'Fusce non venenatis velit. Proin luctus malesuada mauris.', image: '/image 272.jpg' },
  { id: 5, title: '21 March 2023', description: 'Fusce non venenatis velit. Proin luctus malesuada mauris.', image: '/image 271.jpg' },
  { id: 6, title: '21 March 2023', description: 'Fusce non venenatis velit. Proin luctus malesuada mauris.', image: '/image 269.jpg' },
];

const Cards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(cardsData.length / cardsPerPage);

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

  const visibleCards = cardsData.slice(currentIndex * cardsPerPage, (currentIndex + 1) * cardsPerPage);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold">Latest Insights</h1>
        <div>
          <button
            onClick={handlePrev}
            className="bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 disabled:opacity-50 "
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleCards.map(card => (
          <div key={card.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
            <Image
              src={card.image}
              alt={card.title}
              width={500} 
              height={200} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg">{card.title}</h2>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;