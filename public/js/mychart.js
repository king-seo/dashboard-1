let myChart = document.getElementById('myChart').getContext('2d');

//Global Option
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 12;
Chart.defaults.global.defaultFontColor = '#777';
Chart.defaults.global.defaultFontColor = '#777';


let massPopChart = new Chart(myChart, {
    type: 'doughnut', //bar, horizontalBar, pie, line ,doughnut, radar, polarArea
    data: {
        labels: ['HTML', 'CSS', 'Javascript', 'JAVA', 'Vew.js', 'React'],
        datasets: [{
            label: 'population',
            data: [
                617594,
                181045,
                153060,
                106519,
                105162,
                95072
            ],
            //backgroundColor: 'green',색상을 하나 지정하면, 모두 동일한 색상으로 됨. 
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)'
            ],
            borderWidth: 0,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor: '#92cf48'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'My skill set',
            fontSize: 25,
            fontColor: '#000'
        },
        legend: {
            display: true,
            position: 'right',
            label: {
                fontColor: '#000'
            }
        },
        layout: {
            margin: {
                left: 50,
                right: 0,
                bottom: 0,
                top: 0
            }
        },
        tooltips: {
            enabled: true
        }
    }
});