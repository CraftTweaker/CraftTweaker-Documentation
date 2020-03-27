$(document).ready(function () {
    $("table").addClass("w-full my-2 bg-gray-200");
    $("th").addClass("bg-gray-300 border");
    $("td").addClass("border");
    $("pre").addClass("bg-white border p-2 my-2");
    $("p > code").addClass("bg-white border py-1 px-2");

    $("#menu-button").click(function (event) {
        $("#side-nav").fadeToggle();
    });

    $(".drawer").click(function (event) {
        $(this).next().slideToggle(350);
        if ($(this).parent().hasClass("nav-open")) {
            $(this).parent().addClass("nav-closed");
            $(this).parent().removeClass("nav-open");
        } else {
            $(this).parent().addClass("nav-open");
            $(this).parent().removeClass("nav-closed");
        }


    });
    let elem = $(".nav-item").filter(function (index) {
        let refs = $(this).attr("href");
        if (refs && refs === "./") {
            return true;
        }
        return false;
    });

    let parents = elem.parentsUntil("#nav-pane");
    parents.show();
    parents.each(value => {

        let parent = parents[value];
        console.log(parent);
        if (parent.classList.contains("nav-closed")) {
            parent.classList.remove("nav-closed");
            parent.classList.add("nav-open")
        }
    });
    elem.show();
    elem.addClass("text-white").addClass("bg-blue-900").addClass("hover:bg-blue-900");

    // Make sure the nav is shown.
    // Causes the navbar to be auto open when swapping between, but really should be fine...?
    $(window).resize(function () {

        if (window.matchMedia("(max-width: 1024px)").matches) {
            // $("#side-nav").hide();
        } else {
            $("#side-nav").show();
        }
    });
});
