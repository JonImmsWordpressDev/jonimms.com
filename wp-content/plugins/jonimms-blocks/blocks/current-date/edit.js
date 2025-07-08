import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
    const { format, label, textColor } = attributes;

    const blockProps = useBlockProps({
        className: `wp-block-jonimms-blocks-current-date text-${textColor}`
    });

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Date Settings')}>
                    <TextControl
                        label={__('Label before date')}
                        value={label}
                        onChange={(val) => setAttributes({ label: val })}
                    />
                    <SelectControl
                        label={__('Date Format')}
                        value={format}
                        options={[
                            { label: 'July 8, 2025 (F j, Y)', value: 'F j, Y' },
                            { label: '08/07/2025 (d/m/Y)', value: 'd/m/Y' },
                            { label: '2025-07-08 (Y-m-d)', value: 'Y-m-d' },
                            { label: 'Tuesday, July 8 (l, F j)', value: 'l, F j' }
                        ]}
                        onChange={(val) => setAttributes({ format: val })}
                    />
                    <SelectControl
                        label={__('Text Color')}
                        value={textColor}
                        options={[
                            { label: 'Black', value: 'black' },
                            { label: 'White', value: 'white' }
                        ]}
                        onChange={(val) => setAttributes({ textColor: val })}
                    />
                </PanelBody>
            </InspectorControls>

            <div {...blockProps}>
                <p>{label ? `${label} ...` : 'Date will appear here on the frontend.'}</p>
            </div>
        </>
    );
}
