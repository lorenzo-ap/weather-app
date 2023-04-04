import CarouselHour from "./TodayForecastHour";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import moment from "moment";
import { CarouselProps } from "interface/Interface";

const Carousel = (props: CarouselProps) => {
  const ref = useRef<any>();
  const { events } = useDraggable(ref);

  const { days, localTime } = props;

  const currentHour = moment(new Date(localTime)).format("HH");
  const currentHours = days?.[0].hour.slice(parseInt(currentHour)).concat(days?.[1].hour.slice(0, parseInt(currentHour)));

  return (
    <div className="px-5 py-4 rounded-xl text-center" style={{ background: "linear-gradient(to right, #1f2a3a, #1d2736)" }}>
      <h3 className="text-left mb-2 text-lg">Today's forecast</h3>
      <div className="flex overflow-x-scroll w-full cursor-grab gap-4 pt-2 pb-3" {...events} ref={ref}>
        {currentHours?.map((hour) => (
          <CarouselHour key={hour.time} {...{ ...hour, localTime }} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
