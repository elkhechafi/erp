var ctx = document.getElementById('myChart').getContext('2d');
let canvaResult = [3000, 2643, 2035, 1200, 1860, 2278,3500];
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
        fontColor: '#51f713',
        datasets: [{
            label: 'Vente',
            backgroundColor: "#db6f0910",
            borderColor: "#db6f09",
            data: canvaResult
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            labels: {
                 fontColor: '#000'
                }
             },
    //    title: {
    //        display: true,
    //        fontColor: '#fff',
    //    }     ,
       scales: {
           yAxes: [{
               ticks: {
                   fontColor: '#E09145'
               },
           }],
         xAxes: [{
               ticks: {
                   fontColor: '#E09145'
               },
           }]
       } 

    }
});

// //2eme charte
var ctx = document.getElementById('myChart2').getContext('2d');
var myPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [95556, 49991, 47747, 16527],
            backgroundColor: [
                '#db6f09',
                '#db6f09',
                '#db6f09',
                '#db6f09'
            ],
            borderColor: [
                'rgba(255, 255, 255, 1)'
            ],
            borderWidth: 2
        }],
        labels: ['Fourniture Bureau', 'Èquipement',  'Jouet & Loisir', 'Accessoire & I.T']
    },
    options: {
        legend: {
            display: false
        }
    }
});

//inventory Chart.js

//inventory Chart.js