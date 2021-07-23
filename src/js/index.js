import Chart from 'chart.js/auto';
import jQuery from 'jquery';
import dt from 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.min.css';

window.Chart = Chart;
window.$ = window.jQuery = jQuery;
dt(window, $);
window.$.DataTable = dt;

$(document).ready(function (){
    //Alert
    $('.alert-close').click(function () {
        $(this).parent('.alert').addClass('disposed');
    });
    //Tables (with DataTables)
    $('.table').DataTable({
        language: {
            url: "https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
        }
    });
});

