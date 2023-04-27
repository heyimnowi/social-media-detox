import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

interface CountUpProps {
	initialDate: number;
}

interface TimeElapsed {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

const CountUp: React.FC<CountUpProps> = ({ initialDate }) => {
  const [timeElapsed, setTimeElapsed] = useState<TimeElapsed>({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	});

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed(calculateTimeElapsed());
    }, 1000);

    return () => clearInterval(interval); // cleanup function to clear interval
  }, [initialDate]);


  const calculateTimeElapsed = () => {
    const now = new Date().getTime();
    const difference = now - initialDate;

    let timeElapsed = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0
		};

    if (difference > 0) {
      timeElapsed = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeElapsed;
  }

  return (
    <Text>
      {timeElapsed.days}d {timeElapsed.hours}h {timeElapsed.minutes}m {timeElapsed.seconds}s
    </Text>
  );
};

export default CountUp;