const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
  
    // Get the day of the month with the suffix
    const day = date.getDate();
    const daySuffix = ['th', 'st', 'nd', 'rd'][(day % 10) - 1] || 'th';
    const formattedDay = `${day}${daySuffix}`;
  
    // Get the month and year
    const month = date.toLocaleString('en', { month: 'short' });
    const year = date.getFullYear();
  
    // Format the final output
    return `${formattedDay} ${month}, ${year}`;
  };
  
  export default formatDate;
  