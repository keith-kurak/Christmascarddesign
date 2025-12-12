import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const slides = [
  {
    id: 1,
    gradient: 'from-purple-600 via-pink-600 to-red-500',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-white px-12">
        <h1 className="text-7xl mb-8">2024</h1>
        <h2 className="text-6xl text-center mb-4">The Kurak Family</h2>
        <h3 className="text-5xl text-center">Wrapped</h3>
      </div>
    )
  },
  {
    id: 2,
    gradient: 'from-green-500 via-teal-500 to-blue-500',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-white px-12">
        <p className="text-3xl mb-8 opacity-90">Stat/Fact #1</p>
        <h2 className="text-7xl text-center mb-4">[NUMBER]</h2>
        <p className="text-4xl text-center">[Description of stat]</p>
      </div>
    )
  },
  {
    id: 3,
    gradient: 'from-orange-500 via-red-500 to-pink-600',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-white px-12">
        <p className="text-3xl mb-8 opacity-90">Stat/Fact #2</p>
        <div className="w-96 h-96 bg-white/20 rounded-2xl mb-8 flex items-center justify-center">
          <p className="text-xl opacity-70">[Photo placeholder]</p>
        </div>
        <p className="text-4xl text-center">[Caption or description]</p>
      </div>
    )
  },
  {
    id: 4,
    gradient: 'from-blue-600 via-purple-600 to-pink-500',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-white px-12">
        <p className="text-3xl mb-8 opacity-90">Stat/Fact #3</p>
        <h2 className="text-7xl text-center mb-4">[NUMBER]</h2>
        <p className="text-4xl text-center">[Description of stat]</p>
      </div>
    )
  },
  {
    id: 5,
    gradient: 'from-pink-500 via-purple-500 to-indigo-600',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-white px-12">
        <p className="text-3xl mb-8 opacity-90">Stat/Fact #4</p>
        <h2 className="text-7xl text-center mb-4">[NUMBER]</h2>
        <p className="text-4xl text-center">[Description of stat]</p>
      </div>
    )
  },
  {
    id: 6,
    gradient: 'from-teal-500 via-green-500 to-emerald-600',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-white px-12">
        <p className="text-3xl mb-8 opacity-90">Stat/Fact #5</p>
        <div className="w-96 h-96 bg-white/20 rounded-2xl mb-8 flex items-center justify-center">
          <p className="text-xl opacity-70">[Photo placeholder]</p>
        </div>
        <p className="text-4xl text-center">[Caption or description]</p>
      </div>
    )
  },
  {
    id: 7,
    gradient: 'from-red-500 via-orange-500 to-yellow-500',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-white px-12">
        <p className="text-3xl mb-8 opacity-90">Stat/Fact #6</p>
        <h2 className="text-7xl text-center mb-4">[NUMBER]</h2>
        <p className="text-4xl text-center">[Description of stat]</p>
      </div>
    )
  },
  {
    id: 8,
    gradient: 'from-indigo-600 via-blue-600 to-cyan-500',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-white px-12">
        <p className="text-3xl mb-12 opacity-90">Thanks for a great year!</p>
        <h2 className="text-6xl text-center mb-8">Happy Holidays</h2>
        <p className="text-4xl text-center">from the Kurak Family</p>
      </div>
    )
  }
];

export function KurakFamilyWrapped() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex-1 bg-black flex items-center justify-center p-8">
      {/* Card Container - 8.5x11 ratio */}
      <div className="flex flex-1">
        {/* Current Slide */}
        <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].gradient} rounded-lg shadow-2xl overflow-hidden transition-all duration-500`}>
          {slides[currentSlide].content}
        </div>

        {/* Navigation Buttons */}
        {currentSlide > 0 && (
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors z-10"
          >
            <ChevronLeft size={28} />
          </button>
        )}
        
        {currentSlide < slides.length - 1 && (
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors z-10"
          >
            <ChevronRight size={28} />
          </button>
        )}

        {/* Progress Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide 
                  ? 'w-8 bg-white' 
                  : 'w-2 bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute top-6 right-6 text-white/60 text-lg z-10">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>
    </div>
  );
}
