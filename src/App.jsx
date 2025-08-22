import { useEffect, useState } from "react";
import Report from "./components/report";
import useEmblaCarousel from "embla-carousel-react";

function App() {
  const [Weathers, setWeathers] = useState([]);
  const [emblaRef] = useEmblaCarousel({ loop: false });

  useEffect(() => {
    (async () => {
      const response = await fetch("http://127.0.0.1:8081/");
      const js = await response.json();
      setWeathers(js);
    })();
  }, []);

  return (
    <div className="w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-5">
          {Weathers.map((we) => (
            <div key={we.id} className="flex-shrink-0 w-full">
              <Report week={we.week} country={we.country} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
