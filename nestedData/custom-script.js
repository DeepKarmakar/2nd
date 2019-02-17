"use strict";
(function($) {
    $(window).bind("load", function() {
        var app = {
            init: function() {
                this.cacheDom();
                this.bindEvent();
            },
            cacheDom: function() {
                this.$anch = $("li > a");
                this.$ul = $("ul");
            },
            bindEvent: function() {
                this.$anch.on("click", this.toggleDown);
            },
            toggleDown: function(event) {
                // $(this).toggleClass("open");
                var $this = $(this);
                var $li = $this.parent();

                $li.addClass("active")
                    .siblings()
                    .removeClass("active open");

                if ($this.next().is("ul")) {
                    $li.toggleClass("open");
                }
            }
        };

        app.init();
    });
})(jQuery);
