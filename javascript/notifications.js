// $(document).ready(function () {
//     const duration = 10000;
//     const maxNotifications = 3;
//     const notificationSpacing = 15;
//
//     $("#showSuccess").click(function () {
//         showNotification("#succes-notification");
//     });
//
//     $("#showFail").click(function () {
//         showNotification("#fail-notification");
//     });
//
//     $("#showWarning").click(function () {
//         showNotification("#warning-notification");
//     });
//
//     $(document).on("click", ".cross-icon", function () {
//         let notification = $(this).closest(".notification");
//         hideNotification(notification);
//     });
//
//     function showNotification(templateId) {
//         let notification = $(templateId).clone().removeAttr("id").addClass("stacked");
//
//         $("body").append(notification);
//         updateStack();
//
//         notification.css({ right: "-400px", display: "flex" })
//             .animate({ right: "20px" }, 800);
//
//         startProgressBar(duration, notification);
//         setTimeout(() => hideNotification(notification), duration);
//     }
//
//     function hideNotification(notification) {
//         notification.animate({ right: "-400px" }, 800, function () {
//             $(this).remove();
//             updateStack();
//         });
//     }
//
//     function startProgressBar(time, notification) {
//         notification.find(".progress-bar").css({ width: "100%", transition: `width ${time / 1000}s linear` })
//             .width("0%");
//     }
//
//     function updateStack() {
//         let notifications = $(".stacked");
//         if (notifications.length > maxNotifications) {
//             notifications.first().remove();
//         }
//         notifications.each(function (index) {
//             $(this).css("top", `${10 + (index * (70 + notificationSpacing))}px`);
//         });
//     }
// });

$(document).ready(function () {
    const duration = 10000;
    const maxNotifications = 3;
    const notificationSpacing = 15;

    // $("#showSuccess").click(() => showNotification("success", "Autentificarea a fost realizată cu succes!"));
    // $("#showFail").click(() => showNotification("fail", "Credentialele sunt greșite."));
    // $("#showWarning").click(() => showNotification("warning", "Parola ta este mult prea slabă!"));

    for (let i = 0; i < 2; i++) {
        showNotification("success", "Eveniment creat cu succes!");
        showNotification("fail", "A apărut o eroare la salvare.");
        showNotification("warning", "Atenție, lipsesc câmpuri!");
    }


    $(document).on("click", ".cross-icon", function () {
        let notification = $(this).closest(".notification");
        hideNotification(notification);
    });

    function showNotification(type, message) {
        const templates = {
            success: "#succes-notification",
            fail: "#fail-notification",
            warning: "#warning-notification"
        };

        const $template = $(templates[type]).clone().removeAttr("id").addClass("stacked");

        $template.find(".sub-text").text(message);
        $("body").append($template);
        updateStack();

        $template.css({ right: "-400px", display: "flex" })
            .animate({ right: "20px" }, 800);

        startProgressBar(duration, $template);
        setTimeout(() => hideNotification($template), duration);
    }

    function hideNotification(notification) {
        notification.animate({ right: "-400px" }, 800, function () {
            $(this).remove();
            updateStack();
        });
    }

    function startProgressBar(time, notification) {
        notification.find(".progress-bar").css({
            width: "100%",
            transition: `width ${time / 1000}s linear`
        }).width("0%");
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
