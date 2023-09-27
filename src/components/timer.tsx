import React, { useEffect, useState } from "react";

const Timer = ({ date }: { date: Date }) => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const timer = setInterval(() => {
      const time = date.getTime();
      const now = new Date().getTime();
      const distance = time - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance / 1000) % 60);
      setTime({ days, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(timer);
  }, [date]);

  return (
    <div className="flex gap-4 justify-center items-center">
      <div className="w-32 h-32 rounded-full bg-white flex items-center flex-col justify-center">
        <p className="text-center text-5xl font-bold text-primary-yellow">
          {time.days}
        </p>
        <p className="text-center">Days</p>
      </div>
      <div className="w-32 h-32 rounded-full bg-white flex items-center flex-col justify-center">
        <p className="text-center text-5xl font-bold text-primary-yellow">
          {time.hours}
        </p>
        <p className="text-center">Hours</p>
      </div>
      <div className="w-32 h-32 rounded-full bg-white flex items-center flex-col justify-center">
        <p className="text-center text-5xl font-bold text-primary-yellow">
          {time.minutes}
        </p>
        <p className="text-center">Minutes</p>
      </div>
      <div className="w-32 h-32 rounded-full bg-white flex items-center flex-col justify-center">
        <p className="text-center text-5xl font-bold text-primary-yellow">
          {time.seconds}
        </p>
        <p className="text-center">Seconds</p>
      </div>
    </div>
  );
};

export default Timer;
