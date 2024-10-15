$(document).ready(function() {
    $('#task-form').on('submit', function(e) {
        e.preventDefault();
        const taskText = $('#task').val().trim();
        if (taskText) {
            $('#task-list').append('<li>' + taskText + '</li>');
            $('#task').val('');
        }
    });

    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});