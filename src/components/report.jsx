import { useState } from "react";
import Recent from "./recent";
import Weekly from "./weekly";
import { Droplets, Wind, CloudAlert } from "lucide-react";

export default function Report({ country, week }) {
  const [selectedDay, setselectedDay] = useState(1);

  const filteredDay = week.filter((day) => day.id === selectedDay);
  const filteredhu = week.filter((hu) => hu.id === selectedDay);
  const filteredwind = week.filter((wind) => wind.id === selectedDay);
  const filteredst = week.filter((st) => st.id === selectedDay);

  return (
    <div className="flex flex-col justify-center items-center gap-5 bg-gray-100 m-6 rounded-2xl shadow relative pb-32">
      <Recent country={country} temperature={filteredDay[0].temperature} />

      <div
        id="mid"
        className="relative w-full h-auto p-5 bg-white rounded-2xl shadow-lg flex justify-around items-center
                   md:absolute md:left-1/2 md:top-[340px] md:-translate-x-1/2 md:w-[500px] md:h-[80px]"
      >
        <div className="flex flex-col justify-center items-center gap-3">
          <Droplets />
          <p>{filteredhu[0].humidity}</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <Wind />
          <p>{filteredwind[0].windSpeed}</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <CloudAlert />
          <p>{filteredst[0].statous}</p>
        </div>
      </div>

      <Weekly weekDays={week} setDay={setselectedDay} />
    </div>
  );
}
