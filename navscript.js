(function () {
    var path = window.location.pathname.split("/").pop();
    if (path === "") path = "index.html"; // default for home

    document.querySelectorAll(".pgx-menu li a").forEach(function (link) {
        var href = link.getAttribute("href");
        if (href && href.indexOf(path) !== -1) {
            link.parentElement.classList.add("active");
        } else {
            link.parentElement.classList.remove("active");
        }
    });
})();
