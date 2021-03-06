(function ($, window, document, undefined) {
    var gridContainer = $("#grid-container,#grid-container2,#grid-container4");
    // init cubeportfolio
    gridContainer.cubeportfolio({
        animationType: "sequentially",

        gapHorizontal: 0,

        gapVertical: 10,

        gridAdjustment: "responsive",

        caption: "zoom",

        displayType: "sequentially ",

        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: ".cbp-lightbox",
        lightboxGallery: true,
        lightboxTitleSrc: "data-title",
        lightboxShowCounter: true,

        // singlePage popup
        singlePageDelegate: ".cbp-singlePage",
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageShowCounter: true,
        singlePageCallback: function (url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
            var t = this;

            $.ajax({
                url: url,
                type: "GET",
                dataType: "html",
                timeout: 5000,
            })
                .done(function (result) {
                    t.updateSinglePage(result);
                })
                .fail(function () {
                    t.updateSinglePage("Error! Please refresh the page!");
                });
        },
    });

    var gridContainer = $("#grid-container3"),
        filtersContainer = $("#filters-container");

    // init cubeportfolio
    gridContainer.cubeportfolio({
        animationType: "flipOut",

        gapHorizontal: -50,

        gapVertical: 20,

        gridAdjustment: "responsive",

        caption: "pushTop",

        displayType: "sequentially",

        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: ".cbp-lightbox",
        lightboxGallery: true,
        lightboxTitleSrc: "data-title",
        lightboxShowCounter: true,

        // singlePage popup
        singlePageDelegate: ".cbp-singlePage",
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageShowCounter: true,
        singlePageCallback: function (url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
            var t = this;

            $.ajax({
                url: url,
                type: "GET",
                dataType: "html",
                timeout: 5000,
            })
                .done(function (result) {
                    t.updateSinglePage(result);
                })
                .fail(function () {
                    t.updateSinglePage("Error! Please refresh the page!");
                });
        },
    });

    // add listener for filters click
    filtersContainer.on("click", ".cbp-filter-item", function (e) {
        var me = $(this);

        // get cubeportfolio data and check if is still animating (reposition) the items.
        if (!$.data(gridContainer[0], "cubeportfolio").isAnimating) {
            me.addClass("cbp-filter-item-active")
                .siblings()
                .removeClass("cbp-filter-item-active");
        }

        // filter the items
        gridContainer.cubeportfolio(
            "filter",
            me.data("filter"),
            function () {}
        );
    });

    // add listener for inline filters click
    gridContainer.on(
        "click",
        ".cbp-l-grid-projects-inlineFilters",
        function (e) {
            var filter = $(this).data("filter");

            // get cubeportfolio data and check if is still animating (reposition) the items
            if (!$.data(gridContainer[0], "cubeportfolio").isAnimating) {
                filtersContainer
                    .children()
                    .removeClass("cbp-filter-item-active")
                    .filter('[data-filter="' + filter + '"]')
                    .addClass("cbp-filter-item-active");
            }

            // filter the items
            gridContainer.cubeportfolio("filter", filter, function () {});
        }
    );

    // activate counters
    gridContainer.cubeportfolio(
        "showCounter",
        filtersContainer.find(".cbp-filter-item")
    );

    // add listener for load more click
    $(".cbp-l-loadMore-button-link").on("click", function (e) {
        e.preventDefault();

        var clicks,
            me = $(this),
            oMsg;

        if (me.hasClass("cbp-l-loadMore-button-stop")) return;

        // get the number of times the loadMore link has been clicked
        clicks = $.data(this, "numberOfClicks");
        clicks = clicks ? ++clicks : 1;
        $.data(this, "numberOfClicks", clicks);

        // set loading status
        oMsg = me.text();
        me.text("LOADING...");

        // perform ajax request
        $.ajax({
            url: me.attr("href"),
            type: "GET",
            dataType: "HTML",
        })
            .done(function (result) {
                var items, itemsNext;

                // find current container
                items = $(result).filter(function () {
                    return $(this).is("div" + ".cbp-loadMore-block" + clicks);
                });

                gridContainer.cubeportfolio(
                    "appendItems",
                    items.html(),
                    function () {
                        // put the original message back
                        me.text(oMsg);

                        // check if we have more works
                        itemsNext = $(result).filter(function () {
                            return $(this).is(
                                "div" + ".cbp-loadMore-block" + (clicks + 1)
                            );
                        });

                        if (itemsNext.length === 0) {
                            me.text("..END");
                            me.addClass("cbp-l-loadMore-button-stop");
                        }
                    }
                );
            })
            .fail(function () {
                // error
            });
    });
})(jQuery, window, document);
