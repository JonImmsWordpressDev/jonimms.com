<?php
/**
 * Render callback for the Website Copyright block.
 */
function jonimms_render_website_copyright( $attributes, $content ) {
    $year = date( 'Y' );
    $site_url = parse_url( home_url(), PHP_URL_HOST );

    return sprintf(
        '<p class="wp-block-jonimms-blocks-website-copyright">© %s – %s</p>',
        esc_html( $year ),
        esc_html( $site_url )
    );
}

echo jonimms_render_website_copyright( [], '' );
