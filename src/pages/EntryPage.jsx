import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../assets/bg.png'; 
const EntryPage = () => {
  const navigate = useNavigate();

  return (
   <>
        <section className="relative w-full h-screen md:h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={bgImage}
          alt="Thailand Landscape"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}

      <button
        type="button"
        onClick={() => navigate('/signin')}
        className="absolute bottom-10 right-20 z-20 rounded-full bg-green-800 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-red-700"
      >
        Let's Chat -&gt;
      </button>

    </section>
    </>
  );
};

export default EntryPage;
