$.ajax({
    type: "GET",
    url: "charts.csv",
    success: CSVToHTMLTable
});