<?php
/**
 * Enqueue styles and scripts for the child theme.
 */
add_action( 'wp_enqueue_scripts', function () {
    /* styles */
    wp_enqueue_style('frost-child-style', get_stylesheet_directory_uri() . '/style.css', [], filemtime( get_stylesheet_directory() . '/style.css' ));

    /* scripts */
    wp_enqueue_script('frost-child-scrollspy', get_stylesheet_directory_uri() . '/js/nav-scrollspy.js', [], filemtime( get_stylesheet_directory() . '/js/nav-scrollspy.js' ), true);
    wp_enqueue_script('frost-child-gf-misc', get_stylesheet_directory_uri() . '/js/gf-misc.js', [], filemtime( get_stylesheet_directory() . '/js/gf-misc.js' ), true);
});
