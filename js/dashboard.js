$(document).ready(function () {
    $("#myProfileBtn").click(function () {
        // location.href = "myProfile.html";
        // location.target = "_blank";
        window.open('myProfile.php')
    });
    $("#SignOutBtn").click(function () {
        // location.href = "myProfile.html";
        // location.target = "_blank";
        // window.open('signOut.php')
        window.location.href = "signOut.php";
    });

    // $("#limit-records").change(function () {
    //     $('form').submit();
    // });

    // $("#pageNo").click(function () {
    //     $("#pageNo").addClass("active");
    // });
    $('li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
});
