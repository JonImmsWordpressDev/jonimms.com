import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
    const { textColor } = attributes;

    const blockProps = useBlockProps({
        className: `wp-block-jonimms-blocks-website-copyright text-${textColor}`,
    });


    return (
        <>
            <InspectorControls>
                <PanelBody title="Text Color">
                    <SelectControl
                        label="Text Color"
                        value={textColor}
                        options={[
                            { label: 'White', value: 'white' },
                            { label: 'Black', value: 'black' },
                        ]}
                        onChange={(val) => setAttributes({ textColor: val })}
                    />
                </PanelBody>
            </InspectorControls>

            <p {...blockProps}>
                © {new Date().getFullYear()} – {window.location.hostname}
            </p>
        </>
    );
}
