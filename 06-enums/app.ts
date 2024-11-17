// Enums

// Basic syntax
enum Answer {
    no, // 0
    yes // 1
  }
  
  // Numberic enum
  enum Answer2 {
    no = 0,
    yes = 1
  }
  
  // String enum
  enum Answer3 {
    no = 'no',
    yes = 'yes'
  }
  
  
  // Mixed type enums
  enum Answer4 {
    no = 'no',
    yes = 1
  }
  
  // Example
  enum Days {
    monday = 'monday',
    tueday = 'tueday',
    wednesday = 'wednesday',
    thursday = 'thursday',
    friday = 'friday',
    saturday = 'saturday',
    sunday = 'sunday'
  }
  
  function logDays(day: Days) {
    if(day === Days.monday) {
      console.log(Days.monday);
    }
  }
  
  logDays(Days.monday);