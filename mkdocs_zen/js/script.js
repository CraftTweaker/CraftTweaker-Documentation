$(document).ready(async function () {
    // Migration code from mkdocs_windmill
    if (window.location.hash) {
        let hash = window.location.hash;
        // Get the first hash (mkdocs_windmill used 2 hashes sometimes)
        let id = document.getElementById(hash.substring(1).split("#")[0]);
        if (!id) {
            window.location.replace(base_url + "/" + hash.substring(1));
        }
    }

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
    // noinspection JSUnresolvedFunction
    parents.each(value => {

        let parent = parents[value];
        if (parent.classList.contains("nav-closed")) {
            parent.classList.remove("nav-closed");
            parent.classList.add("nav-open")
        }
    });
    elem.show();
    elem.addClass("text-white bg-blue-900 hover:bg-blue-900");

    // Make sure the nav is shown.
    // Causes the navbar to be auto open when swapping between, but really should be fine...?
    $(window).resize(function () {

        if (window.matchMedia("(max-width: 768px)").matches) {
            // $("#side-nav").hide();
        } else {
            $("#side-nav").show();
        }
    });

    $("#mkdocs-search-query").click(function (event) {
        let val = $("#mkdocs-search-query").val();
        if (val.trim()) {
            $("#mkdocs-search-results-container").slideDown();
        }
    });
    window.onclick = function (e) {
        if (!e.target.matches('#mkdocs-search-results-container') && !e.target.matches("#mkdocs-search-query")) {
            $("#mkdocs-search-results-container").slideUp();
        }
    }

});
