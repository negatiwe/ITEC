$(document).ready(function () {
    $('.nav-item').on('click', function () {
        $('.nav-item').removeClass('active');
        $(this).addClass('active');

        const section = $(this).data('section');

        $('.settings-section').addClass('hidden');
        $('#section-' + section).removeClass('hidden');
    });
});