import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import icons from './icons';

export default function Edit({ attributes, setAttributes }) {
    const { github, codepen, linkedin, upwork } = attributes;

    const socialLinks = [
        { name: 'GitHub', icon: icons.github, key: 'github', url: github },
        { name: 'CodePen', icon: icons.codepen, key: 'codepen', url: codepen },
        { name: 'LinkedIn', icon: icons.linkedin, key: 'linkedin', url: linkedin },
        { name: 'Upwork', icon: icons.upwork, key: 'upwork', url: upwork },
    ];

    return (
        <>
            <InspectorControls>
                <PanelBody title="Social Links">
                    {socialLinks.map(({ name, key, url }) => (
                        <TextControl
                            key={key}
                            label={`${name} URL`}
                            value={url}
                            onChange={(value) => setAttributes({ [key]: value })}
                        />
                    ))}
                </PanelBody>
            </InspectorControls>

            <div {...useBlockProps({ className: 'social-logo-row' })}>
                {socialLinks.map(({ icon, key, url }) =>
                    url ? (
                        <a
                            key={key}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`logo logo-${key}`}
                        >
                            <img src={icons[key]} alt={key} width="150" height="150" />
                        </a>
                    ) : null
                )}
            </div>
        </>
    );
}
