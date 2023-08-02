function generateTimeObjects() {
  const timeObjects = [];

  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      const value = `${hour.toString().padStart(2, '0')}${minute.toString().padStart(2, '0')}`;
      const viewValue = `${(hour % 12 === 0 ? 12 : hour % 12)}:${minute.toString().padStart(2, '0')} ${(hour < 12 ? 'AM' : 'PM')}`;
      
      timeObjects.push({ value, viewValue });
    }
  }

  return timeObjects;
}

const timeArray = generateTimeObjects();
console.log(timeArray);
