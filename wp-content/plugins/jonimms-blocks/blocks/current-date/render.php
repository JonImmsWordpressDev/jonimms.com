<?php
function jonimms_render_current_date( $attributes, $content ): string{
    $format = $attributes['format'] ?? 'F j, Y';
    $label = $attributes['label'] ?? '';
    $text_color = isset( $attributes['textColor'] ) ? sanitize_html_class( $attributes['textColor'] ) : 'black';

    $class = 'wp-block-jonimms-blocks-current-date text-' . $text_color;
    $date  = date_i18n( $format );
    $label = $label ? esc_html( $label ) . ' ' : '';

    return sprintf(
        '<p class="%s">%s%s</p>',
        esc_attr( $class ),
        $label,
        esc_html( $date )
    );
}

echo jonimms_render_current_date( $attributes, $content );
