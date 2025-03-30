$(document).ready(function () {
    $(".otp-input").on("input", function () {
        let $this = $(this);
        let value = $this.val();

        if (!/^\d$/.test(value)) {
            $this.val("");
            return;
        }

        $this.next(".otp-input").focus();
    });

    $(".otp-input").on("keydown", function (e) {
        let $this = $(this);

        if (!/^[0-9]$/.test(e.key) && e.key !== "Backspace") {
            e.preventDefault();
        }

        if (e.key === "Backspace" && $this.val() === "") {
            $this.prev(".otp-input").focus();
        }
    });
});