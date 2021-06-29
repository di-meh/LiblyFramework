import Chart from 'chart.js/auto';
import jQuery from 'jquery';
window.Chart = Chart;
window.$ = window.jQuery = jQuery;

$(document).ready(function (){
    //Alert
    $('.alert-close').click(function () {
        $(this).parent('.alert').addClass('disposed');
    });
});

