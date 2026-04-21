import React, { useEffect, useRef, useState } from 'react';

function Counter({ target }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let current = 0;
          const step = target / 60;
          const timer = setInterval(() => {
            current = Math.min(current + step, target);
            setValue(Math.floor(current));
            if (current >= target) {
              setValue(target);
              clearInterval(timer);
            }
          }, 22);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span className="stat-num" ref={ref}>
      {value.toLocaleString()}
    </span>
  );
}

export default function StatsBand() {
  const stats = [
    { target: 500, label: 'Scholarships Listed' },
    { target: 12000, label: 'Students Helped' },
    { target: 95, label: '% Match Accuracy' },
    { target: 48, label: 'Partner Institutions' },
  ];

  return (
    <div className="stats-band">
      {stats.map(({ target, label }) => (
        <div key={label}>
          <Counter target={target} />
          <span className="stat-label">{label}</span>
        </div>
      ))}
    </div>
  );
}
