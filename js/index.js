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
    console.log("A h2 element was clicked!");
  }
  if (event.target.tagName.toLowerCase() === "h1") {
    event.target.classList.add('rainbow');
    console.log("A h1 element was clicked!");
  }
  if (event.target.tagName.toLowerCase() === "p") {
    event.target.classList.add('rainbow');
    console.log("A p element was clicked!");
  }
  if (event.target.tagName.toLowerCase() === "table") {
    event.target.classList.add('rainbow');
    console.log("A table element was clicked!");
  } 
    else if (event.target.tagName.toLowerCase() === "td") {
      const tableParent = event.target.closest("table");
      if (tableParent) {
        tableParent.classList.add('rainbow');
                    }
    }
});




// // Changes the width 
// window.addEventListener('resize', function (e) {
//   var WIDTH_LIMIT = 700;
//   var currentWidth = window.innerWidth;
//   var paragraphs = document.querySelectorAll('p');

//   paragraphs.forEach(function(p) {
//     if (currentWidth > WIDTH_LIMIT) {
//       p.classList.remove('width_manual_limit');
//       console.log("Window resizing detected, auto paragraph width.");
//     } else {
//       p.classList.add('width_manual_limit');
//       console.log("Window resizing detected, manual 90% paragraph width.");
//     }
//   });   
// });

window.onresize = par_width_control;
window.onload = par_width_control;

function par_width_control(){
  var currentWidth = window.innerWidth;
  console.log("Window resizing detected", currentWidth);

  var WIDTH_LIMIT = 500;
  var paragraphs = document.querySelectorAll('p');
  var heading1 = document.querySelectorAll('h1');
  var heading2 = document.querySelectorAll('h2');
  var table = document.querySelectorAll('table');
  var theboxes = document.querySelectorAll('.box');
  var farmname = document.querySelectorAll('.farm-title');

  paragraphs.forEach(function(p) {
    if (currentWidth > WIDTH_LIMIT) {
      // p.classList.remove('width_manual_limit');
      p.classList.remove('text_size_change');
      console.log("Auto paragraph width.");
    } else {
      // p.classList.add('width_manual_limit');
      p.classList.add('text_size_change');
      console.log("Manual 90% paragraph width.");
  }
})

  table.forEach(function(t) {
    if (currentWidth > WIDTH_LIMIT) {
      t.classList.remove('text_size_change');
  } else {
      t.classList.add('text_size_change');
  }
})

  theboxes.forEach(function(b) {
    if (currentWidth > WIDTH_LIMIT) {
      b.classList.remove('text_size_change');
  } else {
      b.classList.add('text_size_change');
  }
})

  farmname.forEach(function(ft) {
    if (currentWidth > WIDTH_LIMIT) {
      ft.classList.remove('text_size_change');
  } else {
      ft.classList.add('text_size_change');
  }
})

  heading1.forEach(function(h1) {
    if (currentWidth > WIDTH_LIMIT) {
      h1.classList.remove('text_size_change');
  } else {
      h1.classList.add('text_size_change');
  }
})

  heading2.forEach(function(h2) {
    if (currentWidth > WIDTH_LIMIT) {
      h2.classList.remove('text_size_change');
  } else {
      h2.classList.add('text_size_change');
  }
})


};

