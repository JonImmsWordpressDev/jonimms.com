import Edit from './edit';
import Save from './save';
import './style.scss';


wp.blocks.registerBlockType('jonimms-blocks/social-logos', {
    edit: Edit,
    save: Save,
});
