$(document).ready(function () {
    //Create grid
    $('#sizePicker').submit(function (event) {
        let colorInput = $("#colorPicker").val();

        //Prevents reloading of page
        event.preventDefault();

        makeGrid();
    });

    //set color variable to desired color

    $('.wrapper').on('mousedown', 'div', function divColor() {
        colorInput = $('#colorPicker').val()
        $(this).css({ 'border-radius': '12px', 'background-color': colorInput });
    })

    // $('.wrapper').on('mousedown', 'div', function sameColor() {
    //     if ($(this).css({ 'background-color': colorInput })) {
    //         $(this).css({ 'background-color': '' })
    //     }
    // })

    function makeGrid() {

        // clear previous divs/grid
        $('.wrapper').children().remove();

        let totalRows = "1fr";
        let totalCols = "1fr";

        //get submitted values
        let cols = $('#inputWeight').val();
        let rows = $('#inputHeight').val();

        //get total divs needed for grid creation
        let totalDivs = cols * rows;

        // Create desired amount of rows
        $('.wrapper').css('grid-template-rows', function () {
            for (i = 1; i < rows; i++) {
                totalRows += " 1fr";
            }
            return totalRows;
        });

        // Create desired amount of columns
        $('.wrapper').css('grid-template-columns', function () {
            for (j = 1; j < cols; j++) {
                totalCols += " 1fr"
            }
            return totalCols;
        })

        // Add divs to fill columns and rows with items
        for (k = 1; k <= totalDivs; k++) {
            $('.wrapper').append('<div></div>');
        }
    }

});