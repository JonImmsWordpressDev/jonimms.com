<?php
// Enqueue Google Fonts if not self-hosting (optional fallback)
function frost_child_enqueue_fonts(): void{
    wp_enqueue_style(
        'frost-child-fonts',
        'https://fonts.googleapis.com/css2?family=Raleway:wght@100..900&family=Roboto:wght@100..900&display=swap',
        false
    );
}
add_action( 'wp_enqueue_scripts', 'frost_child_enqueue_fonts' );

add_action( 'wp_enqueue_scripts', function () {
    wp_enqueue_style(
        'frost-child-style',
        get_stylesheet_directory_uri() . '/style.css',
        [],
        filemtime( get_stylesheet_directory() . '/style.css' )
    );
});
