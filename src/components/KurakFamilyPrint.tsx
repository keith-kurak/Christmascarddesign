import { ImageWithFallback } from "./figma/ImageWithFallback";
import familyPhoto from "figma:asset/8b08cd4bacc5d7f20775d4aad37fa901f9659f21.png";
import travelMap from "figma:asset/1f924943987b5f3b0dbff31590a14fa78a344fd5.png";
import duckImage from "figma:asset/ad891481326786f4317af481460924d890170104.png";
import artImage from "figma:asset/2547c615a2c051150832706a616fff0e76110ea8.png";
import qrCode from "figma:asset/74174dd81c190c9a2bc962cd272fb190031975db.png";

export function KurakFamilyPrint() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {/* Print Container - 8.5x11 ratio */}
      <div className="relative w-full max-w-[8.5in] aspect-[8.5/11] bg-white overflow-hidden p-4">
        {/* Colorful Border */}
        <div className="absolute inset-0 border-8 border-transparent bg-gradient-to-br from-purple-600 via-pink-600 to-red-500"></div>

        <div className="relative bg-white h-full flex flex-col p-2">
          {/* QR Code - Top Right */}
          <div className="absolute top-4 right-4 flex flex-col items-center z-10">
            <div className="w-18 h-18 bg-gray-100 rounded-lg flex items-center justify-center mb-1">
              <img
                src={qrCode}
                alt="QR Code"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-gray-600 text-xs">[MORE]</p>
          </div>

          {/* Header Section */}
          <div className="text-center pt-2 pb-2">
            <h2 className="text-3xl mb-1 text-gray-800">
              The Kurak Family&nbsp;
              <span className="text-3xl bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 bg-clip-text text-transparent">
                Wrapped
              </span>
            </h2>

            <p className="text-sm px-8">
              <i>
                Six or seven notable things about our year.{" "}
                <br />
                <p className="px-20 text-xs">
                  Happy holidays from Kiera, Keith, Benjamin,
                  Eprhaim, Helena, Stellamaris, Oscar, Morty the
                  Box Turtle, Falcor the Shih Tzu, Brownie /
                  Fluffy / Sunny / Tiger the chickens, Sega and
                  Tourmaline the ducks.
                </p>
              </i>
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="flex-1 flex gap-4 pb-6">
            {/* Left Column - 3 boxes */}
            <div className="flex-1 flex flex-col gap-4">
              {/* Stat 2 with photo */}
              <div className="flex-1 bg-white rounded-lg p-6 border-4 border-pink-600 flex flex-col items-center justify-center">
                <div className="w-48 h-36 rounded-lg overflow-hidden mb-3">
                  <img
                    src={familyPhoto}
                    alt="Family photo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-pink-600 text-sm mb-1 text-center">
                  About 10% of the population of the United
                  States moves each year...
                </p>
                <p className="text-gray-800 text-sm text-center">
                  but very few of them move less than a
                  quarter-mile away from their old house, and
                  almost none of them block the entire road
                  while walking their chicken run to their new
                  place!
                </p>
              </div>

              {/* Stat 1 */}
              <div className="flex-1 bg-white rounded-lg p-6 border-4 border-purple-600 flex flex-col items-center justify-center">
                <p className="text-purple-600 text-sm mb-2">
                  These kids will one day be employed as
                </p>
                <p className="text-gray-800 text-4xl mb-2">
                  NINJAS
                </p>
                <p className="text-gray-800 text-sm text-center">
                  At least Stella and Ephraim, who scaled
                  obstacle courses and climbed the salmon ladder
                  at a local gym. Star baker Helena turned our
                  kitchen into the Macaroon-i Grill. Ben
                  competed with his school in First Robotics as
                  a hardware specialist. Oscar? He plans to join
                  the Paw Patrol.
                </p>
              </div>

              {/* Stat 4 */}
              <div className="flex-1 bg-white rounded-lg p-6 border-4 border-orange-500 flex flex-col items-center justify-center">
                <div className="flex flex-1 w-full flex-row items-center justify-between mb-2">
                  <div className="flex flex-1 flex-col justify-center items-center">
                    <p className="text-orange-500 text-sm mb-1">
                      (Some of us) spent our free time on...
                    </p>
                    <p className="text-gray-800 text-4xl">
                      ART
                    </p>
                  </div>
                  <div className="w-16 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={artImage}
                      alt="Art"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p className="text-gray-800 text-sm text-center">
                  Kiera and Oscar drew chibi characters. Kiera
                  took art classes and drew cityscapes all
                  around, others joined in with chalk and window
                  paint. Older boys stayed in the basement and
                  played Minecraft and Hollow Knight (Keith is
                  still stuck in the 8-bit era).
                </p>
              </div>
            </div>

            {/* Right Column - 4 boxes */}
            <div className="flex-1 flex flex-col gap-4">
              {/* Stat 4 */}
              <div className="flex-1 bg-white rounded-lg p-6 border-4 border-orange-500 flex flex-col items-center justify-center">
                <div className="flex flex-1 w-full flex-row items-center justify-between mb-2">
                  <div className="flex flex-1 flex-col justify-center items-center">
                    <p className="text-orange-500 text-sm mb-1">
                      Most likely to wake up to...
                    </p>
                    <p className="text-gray-800 text-4xl">
                      QUACKING
                    </p>
                  </div>
                  <div className="w-16 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={duckImage}
                      alt="Duck"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p className="text-gray-800 text-sm text-center">
                  Two Khaki Campbell ducks, Sega and Tourmaline,
                  joined the four chickens in the backyard this
                  Fall. They also ended the day with quacking,
                  as ducks don't quite understand going into the
                  coop at night the way chickens do.
                </p>
              </div>

              {/* Stat 5 with photo */}
              <div className="flex-1 bg-white rounded-lg p-6 border-4 border-teal-500 flex flex-col items-center justify-center">
                <div className="w-48 h-32 rounded-lg overflow-hidden mb-3">
                  <img
                    src={travelMap}
                    alt="Travel map"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-teal-500 text-sm mb-1 text-center">
                  Quite the jetsetters we have here!
                </p>
                <p className="text-gray-800 text-sm text-center">
                  The Kuraks went just about everywhere this
                  year, but never all of them at the same time
                  (who would watch the farm?). Keith’s trips
                  were all work and no play, hopefully that did
                  not make him a dull boy!
                </p>
              </div>

              {/* Stat 6 */}
              <div className="flex-1 bg-white rounded-lg p-6 border-4 border-blue-600 flex flex-col items-center justify-center">
                <p className="text-blue-600 text-sm mb-2">
                  Most played from our actual Spotify Wrapped...
                </p>
                <p className="text-gray-800 text-lg mb-2">
                  1. K-Pop Demon Hunters (duh)
                  <br />
                  2. Eurobeat Brony's <i>Discord</i>
                  <br />
                  3. The Music of <i>One Tree Hill</i>
                </p>
                <p className="text-gray-800 text-sm text-center">
                  So, yeah, the kids played My Little Pony fan
                  tributes and Keith and Kiera went to not one,
                  but TWO concerts featuring artists who crossed
                  over to a hit WB show from 20 years ago, where
                  they played... artists who played the same
                  songs they played in real life. Totally normal
                  tastes in music!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}