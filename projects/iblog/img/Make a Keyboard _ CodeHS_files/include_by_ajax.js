jQuery(function($) {
    // 1. Check if there are placeholders
    let $placeholders = $('.js-ajax-placeholder');
    let placeholder_count = $placeholders.length;
    if (!placeholder_count) {
        return;
    }
    // 2. If yes, then load the same page with full_render=1 query parameter again by Ajax
    let url = location.href.replace(/#.*/, '');
    if (url.indexOf('?') === -1) {
        url += '?include_by_ajax_full_render=1';
    } else {
        url += '&include_by_ajax_full_render=1';
    }
    // 3. Load the page again by Ajax and with additional parameter
    $.get(
        url,
        function(responseHTML) {
            // 4. For each placeholder fill in the content
            $('<div>')
                .append($.parseHTML(responseHTML))
                .find('.js-ajax-placeholder>*')
                .each(function(index, element) {
                    $placeholders.eq(index).replaceWith(element);
                });
            // 5. Trigger a special event "include_by_ajax_all_loaded"
            $(document).trigger('include_by_ajax_all_loaded');
        },
        'html'
    );

    $(document).on('include_by_ajax_rerender', function() {
        $(document).trigger('include_by_ajax_before_rerender');
        let $placeholders = $('.js-ajax-rerender');

        let placeholder_count = $placeholders.length;
        if (!placeholder_count) {
            return;
        }
        $.get(
            url,
            function(responseHTML) {
                $('<div>')
                    .append($.parseHTML(responseHTML))
                    .find('.js-ajax-rerender')
                    .each(function(index, element) {
                        $placeholders[index].replaceWith(element);
                    });
                $(document).trigger('include_by_ajax_after_rerender');
            },
            'html'
        );
    });
});
