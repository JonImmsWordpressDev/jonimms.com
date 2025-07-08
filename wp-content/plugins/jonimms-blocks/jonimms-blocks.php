<?php
/**
 * Plugin Name:       Jonimms Blocks
 * Description:       Collection of custom Gutenberg blocks.
 * Version:           1.0.1
 * Author:            Jon Imms
 * Requires at least: 6.0
 * Requires PHP:      7.4
 * Text Domain:       jonimms-blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}


// Autoload your block registrar
require_once plugin_dir_path(__FILE__) . 'inc/class-JIBlockInitialize.php';


new JIBlockInitialize();
