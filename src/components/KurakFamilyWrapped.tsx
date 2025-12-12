import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import familyPhoto from "figma:asset/8b08cd4bacc5d7f20775d4aad37fa901f9659f21.png";
import travelMap from "figma:asset/1f924943987b5f3b0dbff31590a14fa78a344fd5.png";
import duckImage from "figma:asset/ad891481326786f4317af481460924d890170104.png";
import artImage from "figma:asset/2547c615a2c051150832706a616fff0e76110ea8.png";

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
    gradient: 'from-pink-600 via-pink-500 to-rose-500',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-white px-12">
        <p className="text-3xl mb-8 opacity-90">About 10% of the population of the United States moves each year...</p>
        <div className="w-96 h-72 rounded-2xl mb-8 overflow-hidden">
          <img
            src={familyPhoto}
            alt="Family photo"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-2xl text-center max-w-3xl">but very few of them move less than a quarter-mile away from their old house, and almost none of them block the entire road while walking their chicken run to their new place!</p>
      </div>
    )
  },
  {
    id: 3,
    gradient: 'from-purple-600 via-violet-600 to-purple-700',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-white px-12">
        <p className="text-3xl mb-8 opacity-90">These kids will one day be employed as</p>
        <h2 className="text-8xl text-center mb-8">NINJAS</h2>
        <p className="text-2xl text-center max-w-3xl">At least Stella and Ephraim, who scaled obstacle courses and climbed the salmon ladder at a local gym. Star baker Helena turned our kitchen into the Macaroon-i Grill. Ben competed with his school in First Robotics as a hardware specialist. Oscar? He plans to join the Paw Patrol.</p>
      </div>
    )
  },
  {
    id: 4,
    gradient: 'from-orange-500 via-amber-500 to-yellow-500',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-white px-12">
        <p className="text-3xl mb-8 opacity-90">(Some of us) spent our free time on...</p>
        <div className="flex items-center gap-8 mb-8">
          <h2 className="text-8xl text-center">ART</h2>
          <div className="w-32 h-40 rounded-2xl overflow-hidden">
            <img
              src={artImage}
              alt="Art"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <p className="text-2xl text-center max-w-3xl">Kiera and Oscar drew chibi characters. Kiera took art classes and drew cityscapes all around, others joined in with chalk and window paint. Older boys stayed in the basement and played Minecraft and Hollow Knight (Keith is still stuck in the 8-bit era).</p>
      </div>
    )
  },
  {
    id: 5,
    gradient: 'from-amber-500 via-orange-500 to-orange-600',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-white px-12">
        <p className="text-3xl mb-8 opacity-90">Most likely to wake up to...</p>
        <div className="flex items-center gap-8 mb-8">
          <h2 className="text-8xl text-center">QUACKING</h2>
          <div className="w-32 h-40 rounded-2xl overflow-hidden">
            <img
              src={duckImage}
              alt="Duck"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <p className="text-2xl text-center max-w-3xl">Two Khaki Campbell ducks, Sega and Tourmaline, joined the four chickens in the backyard this Fall. They also ended the day with quacking, as ducks don't quite understand going into the coop at night the way chickens do.</p>
      </div>
    )
  },
  {
    id: 6,
    gradient: 'from-teal-500 via-cyan-500 to-blue-500',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-white px-12">
        <p className="text-3xl mb-8 opacity-90">Quite the jetsetters we have here!</p>
        <div className="w-96 h-64 rounded-2xl mb-8 overflow-hidden flex items-center justify-center bg-white/10">
          <img
            src={travelMap}
            alt="Travel map"
            className="w-full h-full object-contain"
          />
        </div>
        <p className="text-2xl text-center max-w-3xl">The Kuraks went just about everywhere this year, but never all of them at the same time (who would watch the farm?). Keith's trips were all work and no play, hopefully that did not make him a dull boy!</p>
      </div>
    )
  },
  {
    id: 7,
    gradient: 'from-blue-600 via-indigo-600 to-purple-600',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-white px-12">
        <p className="text-3xl mb-8 opacity-90">Most played from our actual Spotify Wrapped...</p>
        <div className="text-3xl text-center mb-8 leading-relaxed">
          <p>1. K-Pop Demon Hunters (duh)</p>
          <p>2. Eurobeat Brony's <i>Discord</i></p>
          <p>3. The Music of <i>One Tree Hill</i></p>
        </div>
        <p className="text-xl text-center max-w-3xl">So, yeah, the kids played My Little Pony fan tributes and Keith and Kiera went to not one, but TWO concerts featuring artists who crossed over to a hit WB show from 20 years ago, where they played... artists who played the same songs they played in real life. Totally normal tastes in music!</p>
      </div>
    )
  },
  {
    id: 8,
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-white px-12">
        <p className="text-3xl mb-8 opacity-90">Placeholder #1</p>
        <h2 className="text-7xl text-center mb-4">[NUMBER]</h2>
        <p className="text-4xl text-center">[Description of stat]</p>
      </div>
    )
  },
  {
    id: 9,
    gradient: 'from-red-500 via-pink-500 to-purple-500',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-white px-12">
        <p className="text-3xl mb-8 opacity-90">Placeholder #2</p>
        <h2 className="text-7xl text-center mb-4">[NUMBER]</h2>
        <p className="text-4xl text-center">[Description of stat]</p>
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
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      {/* Card Container - 8.5x11 ratio */}
      <div className="relative w-full max-w-[8.5in] aspect-[8.5/11]">
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