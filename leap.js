function leapYearLong(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
}

leapYearLong(1993);
leapYearLong(1999);
leapYearLong(1996);
leapYearLong(2000);
leapYearLong(2096);


function leapYearShort(year) {
  if ((year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}

leapYearShort(1993);
leapYearShort(1999);
leapYearShort(1996);
leapYearShort(2000);
leapYearShort(2096);