import { useBlockProps } from '@wordpress/block-editor';

const Edit = () => {
    const year = new Date().getFullYear();
    const siteUrl = new URL(window.location.origin).hostname;

    return (
        <p { ...useBlockProps() }>
            © { year } – { siteUrl }
        </p>
    );
};

export default Edit;
