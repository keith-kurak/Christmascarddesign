import { ImageWithFallback } from './figma/ImageWithFallback';
import { Snowflake, Star, Gift, Sparkles } from 'lucide-react';

export function ChristmasLetter() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50 flex items-center justify-center p-8">
      {/* Letter Container - 8.5x11 ratio */}
      <div className="relative w-full max-w-[8.5in] aspect-[8.5/11] bg-white shadow-2xl overflow-hidden">
        {/* Decorative Header Image */}
        <div className="relative h-48 overflow-hidden">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1576568752191-015f06ecc198?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJpc3RtYXMlMjBkZWNvcmF0aW9ucyUyMGZlc3RpdmV8ZW58MXx8fHwxNzY1MzE0MDA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Christmas decorations"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
          
          {/* Floating Snowflakes */}
          <Snowflake className="absolute top-4 left-8 text-white opacity-70" size={32} />
          <Snowflake className="absolute top-12 right-12 text-white opacity-50" size={24} />
          <Star className="absolute top-8 right-24 text-yellow-200" size={20} />
        </div>

        {/* Letter Content */}
        <div className="px-12 pb-12 -mt-8 relative">
          {/* Title */}
          <div className="text-center mb-8 relative">
            <div className="inline-block relative">
              <h1 className="text-5xl text-red-700 mb-2 font-serif">
                Merry Christmas
              </h1>
              <div className="flex items-center justify-center gap-2 text-green-700">
                <Sparkles size={20} />
                <p className="text-xl">Season's Greetings</p>
                <Sparkles size={20} />
              </div>
            </div>
          </div>

          {/* Decorative Ornaments */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full border-4 border-red-600 bg-red-100"></div>
            <div className="w-10 h-10 rounded-full border-4 border-green-600 bg-green-100"></div>
            <div className="w-12 h-12 rounded-full border-4 border-yellow-500 bg-yellow-100"></div>
            <div className="w-10 h-10 rounded-full border-4 border-red-600 bg-red-100"></div>
            <div className="w-12 h-12 rounded-full border-4 border-green-600 bg-green-100"></div>
          </div>

          {/* Letter Body */}
          <div className="space-y-4 text-gray-700 mb-8">
            <p className="text-center italic">
              Dear Friends and Family,
            </p>
            
            <p className="leading-relaxed">
              As the year comes to a close, we find ourselves filled with gratitude for all the wonderful moments we've shared. This holiday season reminds us of the joy that comes from being surrounded by loved ones and the warmth of cherished memories.
            </p>
            
            <p className="leading-relaxed">
              May your Christmas be filled with laughter, love, and the magic that makes this season so special. We wish you peace, happiness, and countless blessings in the coming year.
            </p>

            <p className="leading-relaxed">
              Thank you for being such an important part of our lives. Here's to making more beautiful memories together in the new year!
            </p>
          </div>

          {/* Decorative Winter Scene */}
          <div className="relative rounded-lg overflow-hidden mb-8 h-32">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1613291391269-b2983ff3961a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW50ZXIlMjBzbm93JTIwc2NlbmV8ZW58MXx8fHwxNzY1MzAwODA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Winter scene"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Closing */}
          <div className="text-center space-y-4">
            <p className="text-xl text-red-700 italic">
              With love and warm wishes,
            </p>
            <div className="pt-4">
              <p className="text-2xl font-serif text-gray-800">
                The [Your Family Name]
              </p>
            </div>
          </div>

          {/* Decorative Footer Elements */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <Gift className="text-red-600" size={28} />
            <Snowflake className="text-blue-400" size={24} />
            <Star className="text-yellow-500" size={26} />
            <Snowflake className="text-blue-400" size={24} />
            <Gift className="text-green-600" size={28} />
          </div>
        </div>

        {/* Decorative Border */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600 via-green-600 to-red-600"></div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600 via-green-600 to-red-600"></div>
        <div className="absolute top-0 bottom-0 left-0 w-2 bg-gradient-to-b from-red-600 via-green-600 to-red-600"></div>
        <div className="absolute top-0 bottom-0 right-0 w-2 bg-gradient-to-b from-red-600 via-green-600 to-red-600"></div>

        {/* Corner Stars */}
        <Star className="absolute top-4 left-4 text-yellow-500 fill-yellow-500" size={20} />
        <Star className="absolute top-4 right-4 text-yellow-500 fill-yellow-500" size={20} />
        <Star className="absolute bottom-4 left-4 text-yellow-500 fill-yellow-500" size={20} />
        <Star className="absolute bottom-4 right-4 text-yellow-500 fill-yellow-500" size={20} />
      </div>
    </div>
  );
}
