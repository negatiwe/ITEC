// function mobilePhoneExecution() {
//     const toggleButton = document.getElementById("menu-toggle");
//     const centerDiv = document.querySelector(".center-column");
//
//     toggleButton.replaceWith(toggleButton.cloneNode(true));
//     const newToggleButton = document.getElementById("menu-toggle");
//     newToggleButton.addEventListener("click", () => {
//         anime({
//             targets: newToggleButton,
//             scale: [1, 1.2, 1],
//             duration: 300,
//             easing: "easeOutElastic(1, .8)",
//         });
//
//         if (centerDiv.style.display === "none" || centerDiv.style.display === "") {
//             centerDiv.style.display = "block";
//             centerDiv.style.opacity = 0;
//
//             anime({
//                 targets: centerDiv,
//                 opacity: [0, 1],
//                 translateY: [-30, 0],
//                 duration: 500,
//                 easing: "easeOutExpo",
//             });
//         } else {
//             anime({
//                 targets: centerDiv,
//                 opacity: [1, 0],
//                 translateY: [0, -30],
//                 duration: 400,
//                 easing: "easeInExpo",
//                 complete: () => {
//                     centerDiv.style.display = "none";
//                 },
//             });
//         }
//     });
// }
//
// document.addEventListener("DOMContentLoaded", mobilePhoneExecution);








//$(document).ready(function () {
//    function checkWindowSize() {
//        if ($(window).width() <= 1180) {
//            $(".center-column").hide();
//        } else {
//            $(".center-column").show();
//            $(".menu-icon__cheeckbox").prop("checked", false);
//        }
//    }
//
//    checkWindowSize();
//
//    $(".menu-icon__cheeckbox").change(function () {
//        if ($(this).is(":checked")) {
//            anime({
//                targets: ".center-column",
//                opacity: [0, 1],
//                translateY: [-20, 0],
//                duration: 500,
//                easing: "easeOutQuad",
//                begin: function () {
//                    $(".center-column").css("display", "flex");
//                }
//            });
//        } else {
//            anime({
//                targets: ".center-column",
//                opacity: [1, 0],
//                translateY: [0, -20],
//                duration: 500,
//                easing: "easeInQuad",
//                complete: function () {
//                    $(".center-column").css("display", "none");
//                }
//            });
//        }
//    });
//
//    $(window).resize(function () {
//        checkWindowSize();
//    });
//});






// $(document).ready(function () {
//     function checkWindowSize() {
//         if ($(window).width() <= 1180) {
//             $(".center-column").hide();
//         } else {
//             $(".center-column").show();
//             $(".menu-icon__cheeckbox").prop("checked", false);
//         }
//     }
//
//     checkWindowSize();
//
//     $(".menu-icon__cheeckbox").change(function () {
//         if ($(this).is(":checked")) {
//             $(".center-column").slideDown(300);
//         } else {
//             $(".center-column").slideUp(300);
//         }
//     });
//
//     $(window).resize(function () {
//         checkWindowSize();
//     });
// });

$(document).ready(function () {
    let lastHeight = $(window).height();

    function checkWindowSize() {
        if ($(window).width() <= 1180) {
            $(".center-column").hide();
        } else {
            $(".center-column").show();
            $(".menu-icon__cheeckbox").prop("checked", false);
        }
    }

    checkWindowSize();

    $(".menu-icon__cheeckbox").change(function () {
        if ($(this).is(":checked")) {
            $(".center-column").slideDown(300);
        } else {
            $(".center-column").slideUp(300);
        }
    });

    $(window).resize(function () {
        let newHeight = $(window).height();
        if (newHeight !== lastHeight) {
            $(".menu-icon__cheeckbox").prop("checked", false);
        }
        lastHeight = newHeight;
        checkWindowSize();
    });
});