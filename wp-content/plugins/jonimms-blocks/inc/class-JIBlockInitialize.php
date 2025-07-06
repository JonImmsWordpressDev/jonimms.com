<?php

class JIBlockInitialize {
    public function __construct() {
        add_action( 'init', [ $this, 'register_blocks' ] );
        add_filter( 'block_categories_all', [ $this, 'add_block_category' ], 10, 1 );
    }

    public function register_blocks(): void
    {
        $blocks_dir = plugin_dir_path( __FILE__ ) . '../blocks/';

        foreach ( glob( $blocks_dir . '*/block.json' ) as $block_json ) {
            $block_slug = basename( dirname( $block_json ) );
            $handle = 'jonimms-blocks-' . $block_slug;

            $script_path = plugin_dir_path(__FILE__) . "../build/$block_slug/$block_slug.js";
            $script_url  = plugin_dir_url(__FILE__) . "../build/$block_slug/$block_slug.js";

            wp_register_script(
                $handle,
                plugin_dir_url(__FILE__) . "../build/$block_slug/$block_slug.js",
                [ 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n', 'wp-block-editor' ],
                filemtime( plugin_dir_path(__FILE__) . "../build/$block_slug/$block_slug.js" ),
                true
            );

            register_block_type( dirname( $block_json ), [
                'editor_script' => $handle,
            ] );
        }

    }

    public function add_block_category( $categories ) {
        return array_merge(
            $categories,
            [
                [
                    'slug'  => 'jonimms-blocks',
                    'title' => __( 'Jon Imms Blocks', 'jonimms-blocks' ),
                ],
            ]
        );
    }
}
