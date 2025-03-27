// $(document).ready(function () {
//     let timeout;
//     const duration = 10000;
//
//     $("#showNotification").click(function () {
//         $(".notification").stop(true, true).css({ right: "-400px", display: "flex" })
//             .animate({ right: "20px" }, 800);
//
//         startProgressBar(duration);
//         timeout = setTimeout(hideNotification, duration);
//     });
//
//     $(".cross-icon").click(function () {
//         clearTimeout(timeout);
//         hideNotification();
//     });
//
//     function hideNotification() {
//         $(".notification").animate({ right: "-400px" }, 800, function () {
//             $(this).hide();
//             $(".progress-bar").css("width", "100%");
//         });
//     }
//
//     function startProgressBar(time) {
//         $(".progress-bar").css({ width: "100%", transition: `width ${time / 1000}s linear` })
//             .width("0%");
//     }
// });

$(document).ready(function () {
    const duration = 10000;
    const maxNotifications = 3;
    const notificationSpacing = 15;

    $("#showSuccess").click(function () {
        showNotification("#succes-notification");
    });

    $("#showFail").click(function () {
        showNotification("#fail-notification");
    });

    $("#showWarning").click(function () {
        showNotification("#warning-notification");
    });

    $(document).on("click", ".cross-icon", function () {
        let notification = $(this).closest(".notification");
        hideNotification(notification);
    });

    function showNotification(templateId) {
        let notification = $(templateId).clone().removeAttr("id").addClass("stacked");

        $("body").append(notification);
        updateStack();

        notification.css({ right: "-400px", display: "flex" })
            .animate({ right: "20px" }, 800);

        startProgressBar(duration, notification);
        setTimeout(() => hideNotification(notification), duration);
    }

    function hideNotification(notification) {
        notification.animate({ right: "-400px" }, 800, function () {
            $(this).remove();
            updateStack();
        });
    }

    function startProgressBar(time, notification) {
        notification.find(".progress-bar").css({ width: "100%", transition: `width ${time / 1000}s linear` })
            .width("0%");
    }

    function updateStack() {
        let notifications = $(".stacked");
        if (notifications.length > maxNotifications) {
            notifications.first().remove();
        }
        notifications.each(function (index) {
            $(this).css("top", `${10 + (index * (70 + notificationSpacing))}px`);
        });
    }
});