var chart = require('chart.js');
// var jquery = require('jquery');

window.addEventListener("DOMContentLoaded", () => {
    var ctx1 = document.getElementById('sales-books-chart').getContext('2d');
    var sales_books_chart = new Chart(ctx1, {
        type: 'horizontalBar',
        data: {
            backgroundColor: 'lightgrey',
            labels: ['Un super livre, Auteur Cool', 'Ne Me Lisez Pas, Jean Nérienàfout', 'Nom du livre, Auteur', 'L\'art de la guerre, Sun Tzu', 'Un Super Livre, Ouais'],

            datasets: [{
                data: [837, 566, 300, 190, 90],
                backgroundColor: [
                    'rgba(244, 96, 88, 1)',
                    'rgba(248, 216, 89, 1)',
                    'rgba(142, 251, 109, 1)',
                    'rgba(88, 151, 233, 1)',
                    'rgba(161, 122, 245, 1)'
                ],
            }]
        },
        options: {
            legend: {
                display: false
            },
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        display: false
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        display: false,
                        fontColor: 'rgba(242, 242, 242, 1)'
                    }
                }]
            }
        }
    });
    var ctx2 = document.getElementById('sales-genres-chart').getContext('2d');
    var sales_genres_chart = new Chart(ctx2, {
        type: 'horizontalBar',
        data: {
            backgroundColor: 'lightgrey',
            labels: ['Romans & Fictions', 'Philosophie', 'Bande dessinées & Comics', 'Arts & Culture', 'Histoire et Géographie'],

            datasets: [{
                data: [837, 566, 300, 190, 90],
                backgroundColor: [
                    'rgba(244, 96, 88, 1)',
                    'rgba(248, 216, 89, 1)',
                    'rgba(142, 251, 109, 1)',
                    'rgba(88, 151, 233, 1)',
                    'rgba(161, 122, 245, 1)'
                ],
            }]
        },
        options: {
            legend: {
                display: false
            },
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        display: false
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        display: false,
                        fontColor: 'rgba(242, 242, 242, 1)'
                    }
                }]
            }
        }
    });
    var ctx3 = document.getElementById('visits-graph-chart').getContext('2d');
    var visits_graph_chart = new Chart(ctx3, {
        type: 'doughnut',
        data: {
            backgroundColor: 'lightgrey',
            labels: ['Extérieures (Google...)', 'Directes', 'Redirections'],

            datasets: [{
                data: [60, 20, 20],
                backgroundColor: [
                    'rgba(244, 96, 88, 1)',
                    'rgba(142, 251, 109, 1)',
                    'rgba(88, 151, 233, 1)',
                ],
            }]
        },
        options: {
            legend: {
                display: false
            },
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        display: false
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        display: false,
                        fontColor: 'rgba(242, 242, 242, 1)'
                    }
                }]
            }
        }
    });
});
