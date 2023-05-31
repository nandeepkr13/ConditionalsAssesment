function isInRange(num, start, end) {
    if (num >= start && num <= end) {
      return true;
    } else {
      return false;
    }
  }
  console.log(isInRange(5, 1, 10));