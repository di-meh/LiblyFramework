import Chart from 'chart.js/auto';
import jQuery from 'jquery';
import dt from 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import select2 from 'select2';
import 'select2/dist/css/select2.css';

window.Chart = Chart;
window.$ = window.jQuery = jQuery;
dt(window, $);
window.$.DataTable = dt;
select2(window,$);
window.select2 = select2;

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
    //Select2 pour les select multiple
    $('select').select2();
    $('.select').select2();
});

