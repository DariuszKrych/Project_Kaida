// Window alert, HTML change, text change & console log examples.
document.getElementById("cool_alert_btn").addEventListener("click", function() {
    let add_1 = 17 + 2;
    window.alert(`Cool alert! The result is: ${add_1}`);
});

document.getElementById("HTMLcontent_change_btn").addEventListener("click", function() {
    document.getElementById("content_to_change").innerHTML = "<h2>Hello World in heading 2!</h2>";
    document.getElementById("text_to_change").innerText = "Cool button added text.";
});

document.getElementById("console_btn").addEventListener("click", function() {
    const d = new Date();
    let full_date_str = d.toUTCString();
    let current_hour_int = parseInt(full_date_str.slice(17,19));
    let AM_PM = "";
    if (current_hour_int <= 12) {
        AM_PM = "am";
      } else {
        AM_PM = "pm";
        current_hour_int = current_hour_int-12
      }
    console.log(`The current time is ${current_hour_int}${full_date_str.slice(19,22)}${AM_PM}${full_date_str.slice(25,)}.`);
});