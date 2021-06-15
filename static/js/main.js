function getUserInput() {
  let inputArr = [];
  let date = prompt("Enter Date You Were Born");
  date = parseInt(date);
  if (date < 1 || date > 31){
    alert("Invalid Date");
  } else {
      inputArr.push = [date];
      let month = prompt("Enter Month You Were Born");
      month = parseInt(month);
      if (month < 1 || month > 12){
        alert("Invalid Month");
     } else {
      inputArr.push = [month];
        let year = prompt("Enter Year You Were Born");
        if (year.length !== 4){
         alert("Invalid Year");
        }else {
          year = parseInt(year)
          inputArr.push = [year];
          return inputArr;
        }
     }
  } return [0, 0, 0000]
}
