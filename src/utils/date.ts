export function getDateFromDuration(duration: string): string {
  const now = new Date();

  switch (duration) {
    case 'day':
      now.setDate(now.getDate() - 1);
      break;
    case 'week':
      now.setDate(now.getDate() - 7);
      break;
    case 'month':
      now.setMonth(now.getMonth() - 1);
      break;
    case 'year':
      now.setFullYear(now.getFullYear() - 1);
      break;
    default:
      throw new Error('Invalid duration. Use day, week, month, or year.');
  }

  return now.toISOString().split('T')[0];
}