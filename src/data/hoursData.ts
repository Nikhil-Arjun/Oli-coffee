export interface ScheduleDay {
  day: string;
  short: string;
  hours: string;
  isToday: boolean;
  isOpen: boolean;
  closeTime?: string;
  openTime?: string;
}

export interface CafeStatus {
  status: "open" | "closing-soon" | "closed";
  label: string;
  sublabel: string;
}

export const OPENING_HOURS = [
  { day: "Monday", short: "Mon", hours: "Closed", isClosed: true },
  { day: "Tuesday", short: "Tue", hours: "8:00 AM – 10:00 PM", openHour: 8, closeHour: 22 },
  { day: "Wednesday", short: "Wed", hours: "8:00 AM – 10:00 PM", openHour: 8, closeHour: 22 },
  { day: "Thursday", short: "Thu", hours: "8:00 AM – 10:00 PM", openHour: 8, closeHour: 22 },
  { day: "Friday", short: "Fri", hours: "8:00 AM – 10:00 PM", openHour: 8, closeHour: 22 },
  { day: "Saturday", short: "Sat", hours: "7:30 AM – 11:00 PM", openHour: 7.5, closeHour: 23 },
  { day: "Sunday", short: "Sun", hours: "7:30 AM – 11:00 PM", openHour: 7.5, closeHour: 23 },
];

export const SPECIAL_NOTICE = {
  title: "Special Hours Notice",
  message: "Diwali weekend: open till midnight with festive seasonal specials.",
  active: true,
};

export function getCafeStatus(): CafeStatus {
  const now = new Date();
  const dayIndex = now.getDay(); // 0 is Sunday, 1 is Monday
  const hours = now.getHours() + now.getMinutes() / 60;

  // Monday
  if (dayIndex === 1) {
    return {
      status: "closed",
      label: "Closed today",
      sublabel: "Opens Tue 8:00 AM",
    };
  }

  // Weekend (Sat 6, Sun 0)
  const isWeekend = dayIndex === 0 || dayIndex === 6;
  const openTime = isWeekend ? 7.5 : 8.0;
  const closeTime = isWeekend ? 23.0 : 22.0;

  if (hours < openTime) {
    return {
      status: "closed",
      label: "Closed now",
      sublabel: `Opens today at ${isWeekend ? "7:30 AM" : "8:00 AM"}`,
    };
  }

  if (hours >= closeTime) {
    const nextDay = dayIndex === 0 ? "Tue 8:00 AM" : "tomorrow morning";
    return {
      status: "closed",
      label: "Closed for the night",
      sublabel: `Opens ${nextDay}`,
    };
  }

  if (closeTime - hours <= 1.0) {
    return {
      status: "closing-soon",
      label: "Closing soon",
      sublabel: `Closes at ${isWeekend ? "11:00 PM" : "10:00 PM"}`,
    };
  }

  return {
    status: "open",
    label: "Open now",
    sublabel: `Closes ${isWeekend ? "11 PM" : "10 PM"}`,
  };
}
