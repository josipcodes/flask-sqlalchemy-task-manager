document.addEventListener('DOMContentLoaded', function() {
  // sidenav initialization
  var sidenav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenav);

  // datepicker initialization
  var datepicker = document.querySelectorAll('.datepicker');
  M.Datepicker.init(datepicker, {
    format: "dd mmm, yyyy",
    i18n: {done: "Yaaaas"}
    });

  // select initialization
  var selects = document.querySelectorAll('select');
  M.FormSelect.init(selects);
});
  