<?php
/**
 * Enqueue styles and scripts for the child theme.
 */
add_action( 'wp_enqueue_scripts', function () {
    wp_enqueue_style(
        'frost-child-style',
        get_stylesheet_directory_uri() . '/style.css',
        [],
        filemtime( get_stylesheet_directory() . '/style.css' )
    );

    wp_enqueue_script(
        'frost-child-scrollspy',
        get_stylesheet_directory_uri() . '/js/nav-scrollspy.js',
        [],
        filemtime( get_stylesheet_directory() . '/js/nav-scrollspy.js' ),
        true
    );
});
