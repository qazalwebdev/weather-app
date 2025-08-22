import { CloudSun, Cloudy, Sun, SunDim } from "lucide-react";

export default function Weekly({ weekDays, setDay }) {
  return (
    <div id="one" className="m-5 p-2 rounded-xl w-full">
      <div className="flex flex-wrap gap-4 justify-center">
        {weekDays.map((weeks) => {
          let Icon = null;
          if (weeks.temperature > 14 && weeks.temperature < 19)
            Icon = <Cloudy size={24} />;
          else if (weeks.temperature > 18 && weeks.temperature < 23)
            Icon = <CloudSun size={24} />;
          else if (weeks.temperature > 22 && weeks.temperature < 28)
            Icon = <SunDim size={24} />;
          else if (weeks.temperature > 27 && weeks.temperature < 38)
            Icon = <Sun size={24} />;

          return (
            <div
              key={weeks.id}
              onClick={() => setDay(weeks.id)}
              className={`flex flex-row md:flex-col items-center justify-between p-3 border border-gray-300 rounded-2xl bg-white shadow-lg transition transform hover:scale-105 cursor-pointer w-full md:w-auto
                 ${
                   weeks.temperature >= 14 && weeks.temperature <= 18
                     ? "bg-white hover:bg-gradient-to-b hover:from-[#a1c4fd] hover:via-[#c2e9fb] hover:to-[#e0f7fa] hover:shadow-lg hover:shadow-[#a1c4fd]/50"
                     : weeks.temperature >= 19 && weeks.temperature <= 23
                     ? "bg-white hover:bg-gradient-to-b hover:from-[#fef9c3] hover:via-[#fde68a] hover:to-[#fcd34d] hover:shadow-lg hover:shadow-[#fde68a]/50"
                     : weeks.temperature >= 24 && weeks.temperature <= 28
                     ? "bg-white hover:bg-gradient-to-b hover:from-[#ffecd2] hover:via-[#fcb69f] hover:to-[#ff7e5f] hover:shadow-lg hover:shadow-[#fcb69f]/50"
                     : weeks.temperature >= 29 && weeks.temperature <= 34
                     ? "bg-white hover:bg-gradient-to-b hover:from-[#ff6a88] hover:via-[#ff99ac] hover:to-[#ffb199] hover:shadow-lg hover:shadow-[#ff6a88]/50"
                     : "bg-gray-200 hover:bg-gray-300 hover:shadow-md hover:shadow-gray-400/50"
                 }
      
                `}
            >
              <p className="text-sm font-semibold">{weeks.name}</p>
              <p className="text-sm font-semibold">{weeks.temperature}°C</p>
              <div className="text-yellow-500">{Icon}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
