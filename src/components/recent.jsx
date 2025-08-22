import { CloudSun, Cloudy, Sun, SunDim } from "lucide-react";

export default function Recent({ country, temperature }) {
  return (
    <div
      className={`relative w-full h-96 flex flex-col justify-center items-center bg-cover bg-center transition duration-200
        ${
          temperature >= 14 && temperature <= 18
            ? "bg-gradient-to-r from-[#a1c4fd] via-[#c2e9fb] to-[#e0f7fa]"
            : ""
        }
         ${
           temperature >= 19 && temperature <= 23
             ? "bg-gradient-to-r from-[#fef9c3] via-[#fde68a] to-[#fcd34d]"
             : ""
         }
         ${
           temperature >= 24 && temperature <= 28
             ? "bg-gradient-to-r from-[#ffecd2] via-[#fcb69f] to-[#ff7e5f]"
             : ""
         }
         ${
           temperature >= 29 && temperature <= 38
             ? "bg-gradient-to-r from-[#ff6a88] via-[#ff99ac] to-[#ffb199]"
             : ""
         }
        `}
    >
      <div className="relative z-10 flex flex-col justify-center items-center text-center gap-3 px-6 sm:px-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-xl tracking-wide">
          {country}
        </h1>

        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
          {temperature}°C
        </p>

        <div className="mt-2 flex flex-col sm:flex-row gap-2 sm:gap-4 text-3xl sm:text-4xl md:text-5xl text-white drop-shadow-md">
          {temperature > 14 && temperature < 19 && <Cloudy size={34} />}
          {temperature > 18 && temperature < 23 && <CloudSun size={34} />}
          {temperature > 22 && temperature < 28 && <SunDim size={34} />}
          {temperature > 27 && temperature < 38 && <Sun size={34} />}
        </div>
      </div>
    </div>
  );
}
