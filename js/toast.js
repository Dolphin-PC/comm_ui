$("div#toast").append(`
    <div class="position-fixed bottom-0 right-0 p-3" style="z-index: 5; right: 0; bottom: 0;">
        <div id="liveToast" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <strong class="mr-auto">Bootstrap</strong>
                <small>11 mins ago</small>
                <button id="liveToastClostBtn" type="button" class="ml-2 mb-1 close" data-dismiss="toast"
                    aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="toast-body">
                Hello, world! This is a toast message.
            </div>
        </div>
    </div>
`)

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