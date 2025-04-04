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

$(document).ready(function () {
    $('.dashboard-view-notifications').on('click', function () {
        const box = $('#notification-box');

        if (box.hasClass('hidden')) {
            box.removeClass('hidden');

            anime({
                targets: '#notification-box',
                translateY: [-30, 0],
                opacity: [0, 1],
                duration: 400,
                easing: 'easeOutQuad'
            });

        } else {
            anime({
                targets: '#notification-box',
                translateY: [0, -30],
                opacity: [1, 0],
                duration: 300,
                easing: 'easeInQuad',
                complete: function () {
                    box.addClass('hidden');
                }
            });
        }
    });

    $(document).on('click', function (e) {
        const box = $('#notification-box');
        if (!$(e.target).closest('#notification-box, .dashboard-view-notifications').length) {
            if (!box.hasClass('hidden')) {
                anime({
                    targets: '#notification-box',
                    translateY: [0, -30],
                    opacity: [1, 0],
                    duration: 300,
                    easing: 'easeInQuad',
                    complete: function () {
                        box.addClass('hidden');
                    }
                });
            }
        }
    });
});