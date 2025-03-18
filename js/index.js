// Making clicked box/text etc rainbow separately.
document.body.addEventListener("click", function(event) {
  if (event.target.classList.contains('box')) {
    event.target.classList.add('rainbow');
    console.log("A box element was clicked!");
  } 
    else if (event.target.classList.contains('farm-title')) {
      const boxParent = event.target.closest(".box");
      if (boxParent) {
        boxParent.classList.add('rainbow');
                    }
    }
    else if (event.target.classList.contains('farm-body')) {
      const boxParent = event.target.closest(".box");
      if (boxParent) {
        boxParent.classList.add('rainbow');
                    }
    }
  if (event.target.tagName.toLowerCase() === "h2") {
    event.target.classList.add('rainbow');
    console.log("A h2 element was clicked!");;
  }
  if (event.target.tagName.toLowerCase() === "h1") {
    event.target.classList.add('rainbow');
    console.log("A h1 element was clicked!");;
  }
  if (event.target.tagName.toLowerCase() === "p") {
    event.target.classList.add('rainbow');
    console.log("A p element was clicked!");;
  }
  if (event.target.tagName.toLowerCase() === "table") {
    event.target.classList.add('rainbow');
    console.log("A table element was clicked!");;
  } 
    else if (event.target.tagName.toLowerCase() === "td") {
      const tableParent = event.target.closest("table");
      if (tableParent) {
        tableParent.classList.add('rainbow');
                    }
    }
});




// Adding a the time since server creation to introduction paragraph.
const d = new Date();
let month_adjust = 0;
let year_adjust = 0;

const day = d.getDate();
const month = d.getMonth() + 1;   
const year = d.getFullYear();

// day = 28;
// month = 2;
// year = 2050;

let days_since = day - 18;
if (days_since < 0){
  month_adjust = 1;
  days_since = 31-18+day;
}
  
let months_since = month - 10 - month_adjust;
if (months_since < 0){
  year_adjust = 1;
  months_since = months_since+12;
} 

let years_since = year - 2023 - year_adjust;

let day_word = "day";
let month_word = "month";
let year_word = "year";
if (years_since > 1 || years_since == 0){
  year_word = "years";
}
if (months_since > 1 || months_since == 0){
  month_word = "months";
}
if (days_since > 1 || days_since == 0){
  day_word = "days";
}

const date_words = ["day", "month", "year"]
const date_since = [days_since, months_since, years_since]
// Chaning the s finding for datw words to an array with a loop. To be completed.

let full_time_since = `${date_since[2]} ${year_word} ${date_since[1]} ${month_word} & ${date_since[0]} ${day_word}`;
// let full_time_since = `${years_since} ${year_word} ${months_since} ${month_word} & ${days_since} ${day_word}`;
document.getElementById("timeSinceKaidaFoundation").innerHTML = full_time_since;