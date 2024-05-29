// Defining checkboxValue as an array
var checkboxValue = [];

$('.country-checkbox').change(function() {
    if ($(this).is(':checked')) {
        console.log("Checkbox is checked..");
        console.log(this.value);
        // Push the value into the array
        checkboxValue.push(this.value);
    } else {
        console.log("Checkbox is not checked..");
        // Remove the value from the array if unchecked
        checkboxValue = checkboxValue.filter(item => item !== this.value);
    }
});

$('.selection-button').on("click", function() {
    // Clear existing content from modal body
    $('#wishlistItems').empty();

    // Check if checkboxValue array is empty
    if (checkboxValue.length === 0) {
        // If empty, display a message
        $('#wishlistItems').append('<p>You have not selected any country yet</p>');
    } else {
        // If not empty, populate modal body with checkbox values
        checkboxValue.forEach(function(value) {
            $('#wishlistItems').append('<p>' + value + '</p>');
        });
    }

    // Show the modal
    $('#wishlistModal').modal('show');
});
