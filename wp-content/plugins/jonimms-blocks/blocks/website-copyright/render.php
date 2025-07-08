<?php
/**
 * Render callback for the Website Copyright block.
 */
function jonimms_render_website_copyright( $attributes, $content ): string
{
    $year     = date( 'Y' );
    $site_url = parse_url( home_url(), PHP_URL_HOST );
    $color    = isset( $attributes['textColor'] ) ? sanitize_html_class( $attributes['textColor'] ) : 'white';

    $class = 'wp-block-jonimms-blocks-website-copyright text-' . $color;

    return sprintf(
        '<p class="%s">© %s – %s</p>',
        esc_attr( $class ),
        esc_html( $year ),
        esc_html( $site_url )
    );
}

echo jonimms_render_website_copyright( $attributes, $content );
