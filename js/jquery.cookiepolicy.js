(function ($) {
    
    "use strict";
    
    $.cookiepolicy = function (options) {
        options = $.extend({
            cookie: 'cookiepolicyinfo',
            title: 'GDPR consent',
            info: 'This website uses cookies. You must agree or go away... :D'
        }, options);
        
        
        function createCookie(name, value, days) {
            var cookie = name + "=" + value;
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                cookie += "; expires=" + date.toGMTString();
            }
            document.cookie = cookie + "; path=/";
        }

        if (document.cookie === "") {
            var container = $('<div/>').addClass('container').appendTo('body');
            var box = $('<div/>').addClass('box').appendTo(container);
            $('<h1/>').html(options.title).appendTo(box);
            $('<span/>').html(options.info).appendTo(box);
            $('<button/>').html('Accept').appendTo(box)
                .on('click', function (e) {
                    e.preventDefault();
                    createCookie(options.cookie, true, 1);
                    $(this).parents('.container').remove();
                });
            $('<button/>').html('Cancel').appendTo(box)
                .on('click', function (e) {
                	e.preventDefault();
                	createCookie(options.cookie, false, 1);
                	$(this).parents('.container').remove();
            });
        }
    };
    
})(jQuery);