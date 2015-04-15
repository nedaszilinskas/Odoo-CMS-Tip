$(document).ready(function() {
    $('a[data-tipso]').each(function() {
        var a = $(this);
        if (!a.attr('data-tipso'))
            return;

        var settings = {
            'useTitle': false
        }

        if (a.attr('data-tipso-position'))
            settings['position'] = a.attr('data-tipso-position');
        if (a.attr('data-tipso-background'))
            settings['background'] = a.attr('data-tipso-background');
        if (a.attr('data-tipso-color'))
            settings['color'] = a.attr('data-tipso-color');

        a.tipso(settings);
    });
});