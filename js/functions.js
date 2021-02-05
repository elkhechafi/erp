//date Top center start here
var d = new Date();

var dayNumber = d.getDay();
var day = d.getDate();
var monthNumber = d.getMonth();
var year= d.getUTCFullYear();

//array for the days names
const dayName = [ 'Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
//array for the days names

//array for the months names
const monthName = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Jiun', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];
//array for the months names

//translate the day number to day name
let exacteName = dayNumber;
let displayedDayName = dayName[exacteName];
//translate the day number to day name

//translate the month name
let displayedMonthName = monthName[monthNumber];
//translate the month name

//call for the display element 
const displayedDate = document.getElementById('displayedDate');
displayedDate.innerText = displayedDayName + ' ' + day + ' ' + displayedMonthName + ' ' + year;

//date Top center end here





//product table search here
function ProductTableFilter() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("ProductTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
//product table search here