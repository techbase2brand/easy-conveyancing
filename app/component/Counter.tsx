"use client";

import { memo, useEffect, useRef, useState } from "react";

type CounterItem = {
  value: number;
  suffix?: string;
  label: string;
};

const data: CounterItem[] = [
  { value: 850, suffix: "+", label: "ELEGANT APARTMENTS" },
  { value: 950, suffix: "+", label: "LUXURY HOUSES" },
  { value: 18000, suffix: "+", label: "SATISFIED GUESTS" },
  { value: 2000, suffix: "+", label: "HAPPY OWNERS" },
];

const Counter = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [start, setStart] = useState(false);

  // 👇 Scroll trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="mt-[40px] md:mt-[-50px] px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="max-w-[1320px] mx-auto bg-white rounded-2xl shadow-[4px_13px_23px_0px_#00000029] p-7">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {data.map((item, index) => (
            <CounterBox key={index} {...item} start={start} />
          ))}
        </div>
      </div>
    </div>
  );
};

type BoxProps = CounterItem & {
  start: boolean;
};

const CounterBox = ({ value, suffix, label, start }: BoxProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startValue = 0;
    const duration = 2000; // 2 sec
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      startValue += increment;

      if (startValue >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(startValue));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [start, value]);

  return (
    <div>
      <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-secondary">
        {count.toLocaleString()}
        {suffix}
      </h2>
      <h3 className="text-xs sm:text-sm md:sm text-secondary mt-1 tracking-wide">
        {label}
      </h3>
    </div>
  );
};

export default memo(Counter);