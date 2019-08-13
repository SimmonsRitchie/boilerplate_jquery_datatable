/* ---------------------------------------------------------------
                MODULE: DATA TABLE
-----------------------------------------------------------------*/
/*
Creates our datatable using jQuery datatable plugin 
*/

// --------------------------- IMPORTS ---------------------------

// In this case, jQuery, dataTable, and dataTable responsive plugin areimported via CDN in index.html

// --------------------------- DATA TABLE ---------------------------


export const createDataTable = (data) => {

  const oTable = $("#dataTable").DataTable({
    data: data,
    drawCallback: function(settings) {
      // This callback runs everytime dataTable is redrawn
      // SCROLL TO TOP
      // We scroll to the top of the table when the table is redrawn. This isn't ideal
      // but otherwise table interacts weirdly with PennLive CMS.
      // document.getElementById("container").scrollIntoView();
      // UPDATE IFRAME
      // pymChild sends the height to pym script in iframe, we do this because
      // table height changes based on user interaction.
      // Using timeout to wait a moment for page to update before sending new page height.
      // This is in the responsive to problems updating iframe with page changes.
      setTimeout(function() {
        pymChild.sendHeight();
      }, 1000);
      // SCROLL TO TOP
      // We scroll to the top of the table when the table is redrawn. This isn't ideal
      // but otherwise table interacts weirdly with PennLive CMS.
      // document.getElementById("container").scrollIntoView();
    },
    columnDefs: [
      { title: "Agency", targets: 0, className: "all" },
      { title: "Type", targets: 1, className: "not-mobile" },
      { title: "County", targets: 2, className: "not-mobile" },
      { title: "Teachers", targets: 3, className: "not-mobile" },
      { title: "Turnover", targets: 4, className: "not-mobile" },
    ],
    columns: [
      { data: "lea" },
      { data: "lea_type" },
      { data: "County" },
      { data: "total_teachers" },
      { data: "turnover",
        render: {
          display: function(data, type, row, meta) {
            // If no incident information, render 'no info'
            return data ? data : "No turnover reported"
          }
      }}
    ],
    searching: true,
    "dom": 'lrtip', // determines what features appear
    buttons: [ // download data functionality
      'excelHtml5',
      'csvHtml5',
    ],
    responsive: {
      details: {
        display: $.fn.dataTable.Responsive.display.childRowImmediate,
        type: "none",
        target: ""
      }
    },
    pageLength: 20,
    bLengthChange: false,
    // lengthMenu: [ 10, 25, 50, 75, 100 ],
    language: {
      emptyTable: "No data available"
    },
    order: [[4, "desc"]]
  });

  // HANDLE SEARCH INPUT
  $('#input__search-box').keyup(function(){
    oTable.search($(this).val()).draw();
})

  // HANDLE EXPORT BUTTONS
  // EXCEL
  $("#download-excel").on("click", function() {
    oTable.button( '.buttons-excel' ).trigger();
  });
  // CSV
  $("#download-csv").on("click", function() {
    oTable.button( '.buttons-csv' ).trigger();
  });

  // UPDATE IFRAME
  // pymChild sends the height to pym script in iframe, we do this because
  // table height changes based on user interaction.
  pymChild.sendHeight();
}
