document.querySelector(".category-title").addEventListener("mouseenter", () => {
    document.querySelector(".arrow-icon").classList.add("hover");
});

document.querySelector(".category-title").addEventListener("mouseleave", () => {
    document.querySelector(".arrow-icon").classList.remove("hover");
});

$(document).ready(function() {
    $('<style>').prop('type', 'text/css').html('.hidden { display: none; }').appendTo('head');

    $('#homepage').click(function() {
        $('.homepage-content').removeClass('hidden');
        $('.members-content').addClass('hidden');
    });

    $('#members').click(function() {
        $('.members-content').removeClass('hidden');
        $('.homepage-content').addClass('hidden');
    });

    $('.members-content').addClass('hidden');
});

