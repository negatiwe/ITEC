let $passwordInput = $("#password");
let $eyeIcon = $(".password-eye");

$passwordInput.on("input", function() {
    if ($(this).val().length > 0) {
        $eyeIcon.fadeIn();
    } else {
        $eyeIcon.fadeOut();
    }
});

let isPasswordVisible = false;

$eyeIcon.on("click", function() {
    isPasswordVisible = !isPasswordVisible;

    $passwordInput.attr("type", isPasswordVisible ? "text" : "password");

    $(this).toggleClass("eye-active", isPasswordVisible);
});