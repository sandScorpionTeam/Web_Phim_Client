const getNearlyNumbers = (number, nearBy) => {
  let arr = [];
  for (let i = number-nearBy; i <=  number+nearBy; i++){    
    arr.push(i);
  }

  return arr;
}

export const getPages = (currentPage, maxPage) => {
  let arr = getNearlyNumbers(currentPage, 2);
  arr = arr.filter((value) => value >=1 && value <= maxPage);

  if (!arr.includes(1)){
    arr.unshift(1);
  }

  if (!arr.includes(maxPage)){
    arr.push(maxPage);
  }

  return arr;  
}