import { useBlockProps } from '@wordpress/block-editor';
import icons from './icons';

export default function save({ attributes }) {
    const { github, codepen, linkedin, upwork } = attributes;

    const socialLinks = [
        { key: 'github', url: github },
        { key: 'codepen', url: codepen },
        { key: 'linkedin', url: linkedin },
        { key: 'upwork', url: upwork }
    ];

    return (
        <div {...useBlockProps.save({ className: 'social-logo-row' })}>
            {socialLinks.map(({ key, url }) =>
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
    );
}
