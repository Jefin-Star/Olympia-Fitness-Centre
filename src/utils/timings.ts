/**
 * Computes live operational status based on Indian Standard Time (IST, UTC+5:30)
 * Mon-Sat: 06:00 - 10:00 and 16:30 - 22:00
 * Sunday: Closed
 */
export interface GymStatus {
  isOpen: boolean;
  statusText: string;
  nextEventText: string;
}

export function getGymCurrentStatus(): GymStatus {
  // Convert current time to IST (UTC + 5:30)
  const now = new Date();
  const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
  const istOffset = 5.5 * 3600000;
  const istDate = new Date(utcTime + istOffset);

  const day = istDate.getDay(); // 0 is Sunday, 1-6 Mon-Sat
  const hours = istDate.getHours();
  const minutes = istDate.getMinutes();
  const totalMinutes = hours * 60 + minutes;

  // Timings in minutes:
  // Morning: 06:00 (360) to 10:00 (600)
  // Evening: 16:30 (990) to 22:00 (1320)
  const morningStart = 6 * 60;
  const morningEnd = 10 * 60;
  const eveningStart = 16 * 60 + 30;
  const eveningEnd = 22 * 60;

  if (day === 0) {
    return {
      isOpen: false,
      statusText: 'Closed Today (Sunday)',
      nextEventText: 'Opens Monday at 6:00 AM'
    };
  }

  // Monday to Saturday
  if (totalMinutes >= morningStart && totalMinutes < morningEnd) {
    const remainingMins = morningEnd - totalMinutes;
    return {
      isOpen: true,
      statusText: 'Open Now · Morning Shift',
      nextEventText: `Closes at 10:00 AM (${Math.floor(remainingMins / 60)}h ${remainingMins % 60}m left)`
    };
  }

  if (totalMinutes >= eveningStart && totalMinutes < eveningEnd) {
    const remainingMins = eveningEnd - totalMinutes;
    return {
      isOpen: true,
      statusText: 'Open Now · Evening Shift',
      nextEventText: `Closes at 10:00 PM (${Math.floor(remainingMins / 60)}h ${remainingMins % 60}m left)`
    };
  }

  if (totalMinutes < morningStart) {
    return {
      isOpen: false,
      statusText: 'Closed Now',
      nextEventText: 'Opens this morning at 6:00 AM'
    };
  }

  if (totalMinutes >= morningEnd && totalMinutes < eveningStart) {
    return {
      isOpen: false,
      statusText: 'Afternoon Break',
      nextEventText: 'Evening Shift starts at 4:30 PM'
    };
  }

  // After 22:00
  if (day === 6) {
    // Saturday night
    return {
      isOpen: false,
      statusText: 'Closed for the Night',
      nextEventText: 'Opens Monday at 6:00 AM (Sunday Closed)'
    };
  }

  return {
    isOpen: false,
    statusText: 'Closed for the Night',
    nextEventText: 'Opens tomorrow at 6:00 AM'
  };
}
