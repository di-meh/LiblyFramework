import Chart from 'chart.js/auto';
import jQuery from 'jquery';
//const dt = require('datatables.net')(window, jQuery);
import 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import dt from 'datatables.net-dt/js/dataTables.dataTables.min';
window.Chart = Chart;
window.$ = window.jQuery = jQuery;
window.$.DataTable = dt;
//window.dt = dt;
$(document).ready(function (){
    //Alert
    $('.alert-close').click(function () {
        $(this).parent('.alert').addClass('disposed');
    });
    //Tables (with DataTables)
    $('.table').DataTable();
});

