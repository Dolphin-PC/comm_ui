$(document).ready(function (e) {
    $("#liveToast").toast({
        animation: true,
        autohide: true,
        delay: 3000
    });

    $("#liveToastBtn").click(function (e) {
        $("#liveToast").toast("show")
    });

    $("#liveToastClostBtn").click(function (e) {
        $("#liveToast").toast("hide")
    });
});