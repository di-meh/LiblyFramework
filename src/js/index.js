import Chart from 'chart.js/auto';
import jQuery from 'jquery';
const dt = require('datatables.net')(window, jQuery);
window.Chart = Chart;
window.$ = window.jQuery = jQuery;
window.dt = dt;
$(document).ready(function (){
    //Alert
    $('.alert-close').click(function () {
        $(this).parent('.alert').addClass('disposed');
    });
    //Tables (with DataTables)
    $('.table').DataTable();
});

