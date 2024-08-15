$(document).ready(function() {
    $(".tab-content > div:not(:first-child)").hide();

    $(".tab > li > a").click(function() {
        event.preventDefault();
        $(".tab > li").removeClass("active");
        $(this).parent().addClass("active");

        let h = $(this).attr("href");
        $(".tab-content > div").hide();
        $(h).show();
    });

    $(".slider").height($(".slider img:first-child").height());

    let current = 1;
    setInterval(function() {
        current++;

        if (current > $(".slider img").length)
            current = 1;

        $(".slider img").fadeOut(1000, function() {
            $(`.slider img:nth-child(${current})`).fadeIn(1000);
        });
    }, 3000);

    $(".popup").hide();
    $("img").click(function() {
        let im = $(this).attr("src");
        $(".popup img").attr("src", im);
        $(".popup").fadeIn("slow");
    });
    $(".close").click(function() {
        event.preventDefault();
        $(".popup").fadeOut("slow");
    });
});